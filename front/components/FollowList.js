import React, { useCallback } from 'react';
import { Button, List, Avatar } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';

const FollowList = ({ header, data, onClickMore }) => {

    const dispatch = useDispatch();
    const onCancel = useCallback((id) => () => {

        if (header === '팔로잉') {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: id,
            });
        }
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: id,
        });
    }, []);
    const loadMore = (
        <div
            style={{
                textAlign: 'center',
                margin: '10px 0',
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={onClickMore}>더보기</Button>
        </div>
    );
    return (

        <List

            style={{ marginBottom: 20 }}
            header={<div>{header}</div>}
            dataSource={data}
            itemLayout="horizontal"
            loadMore={loadMore}
            bordered
            renderItem={(item) => (
                <List.Item
                    key={`followlist_${item.id}`}
                    actions={[
                        <a
                            key={`post_${item.id}`}
                            href={`/user/${item.id}`}>게시글 보기</a>,
                        <a key={`ignored_${item.id}`}
                            onClick={onCancel(item.id)}>연결끊기</a>]}
                >

                    <List.Item.Meta
                        avatar={
                            (<Link
                                prefetch={false}
                                href={`/user/${item.id}`}>
                                <a><Avatar>
                                    {item.nickname[0]}
                                </Avatar></a>
                            </Link>)
                        }
                        title={item.nickname}
                    />
                </List.Item>
            )}
        />

    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequire,
    data: PropTypes.array.isRequire,
    onClickMore: PropTypes.func.isRequire,

}
export default FollowList; 
