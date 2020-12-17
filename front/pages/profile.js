import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import FollowList from '../components/FollowList';
import IgnoreList from '../components/IgnoreList';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
import useSWR from 'swr';
import { backUrl } from '../config/config';
import fetcher from '../utils/fetcher';
import { LoadingDiv } from '../components/style';


const Profile = () => {
    const [followingsLimit, setFollowingsLimit] = useState(3);
    const [followersLimit, setFollowersLimit] = useState(3);
    const [ignoringsLimit, setIgnoringsLimit] = useState(3);
    const { data: followingsData, error: followingError } = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher);
    const { data: followersData, error: followerError } = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher);
    const { data: ignoringsData, error: ignoringError } = useSWR(`${backUrl}/user/ignorings?limit=${ignoringsLimit}`, fetcher);

    const me = useSelector(state => state.user.me);

    useEffect(() => {
        if (!(me && me.id) || (followerError || followingError || ignoringError)) {
            Router.replace('/')
        };
    }, [me && me.id, followerError, followingError, ignoringError]);

    const loadMoreFollowings = useCallback(() => {
        setFollowingsLimit((prev) => prev + 3);
    }, []);
    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    }, []);
    const loadMoreIgnorers = useCallback(() => {
        setIgnoringsLimit((prev) => prev + 3);
    }, []);

    if (!me) {
        return (<LoadingDiv>이 페이지는 로그인이 필요합니다.
            <br /> Home으로 이동합니다.</LoadingDiv>)
    };
    if (followerError || followingError || ignoringError) {
        console.error(followerError || followingError || ignoringError);
        return (<LoadingDiv>팔로잉/팔로워/차단자 로딩 중 에러가 발생했습니다</LoadingDiv>);
    }
    return (
        <AppLayout>
            <Head>
                <title>내 프로필 | Ymillonga</title>
            </Head>
            <UserProfile />
            <FollowList
                header="팔로잉"
                data={followingsData}
                loading={!followingsData && !followingError}
                onClickMore={loadMoreFollowings} />
            <FollowList
                header="팔로워"
                data={followersData}
                loading={!followersData && !followerError}
                onClickMore={loadMoreFollowers} />
            <IgnoreList
                header="차단한 사용자"
                data={ignoringsData}
                loading={!ignoringsData && !ignoringError}
                onClickMore={loadMoreIgnorers} />
        </AppLayout>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);

    await context.store.sagaTask.toPromise();
});
export default Profile; 