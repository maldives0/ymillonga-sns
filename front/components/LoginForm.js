import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox, Row, Divider } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import FacebookLoginBtn from './FacebookLoginBtn';
import GoogleLoginBtn from './GoogleLoginBtn';
import { useRouter } from 'next/router';
const layout = {
    wrapperCol: {
        span: 16,
    },
};

const LoginForm = () => {
    const Router = useRouter();
    const { logInLoading, logInError, me, loadUserDone } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    useEffect(() => {
        if (me && me.id) {
            alert('로그인 중입니다. 메인페이지로 이동합니다.');
            Router.replace('/');//push는 뒤로가기 하면 히스토리가 남아있지만 replace는 지워짐
        }
    }, [me && me.id]);
    // useEffect(() => {
    //     if (loadUserDone) {
    //         alert('로그인 중입니다. 메인페이지로 이동합니다.');
    //         Router.replace('/');
    //     }
    // }, [loadUserDone]);
    useEffect(() => {
        if (logInError) alert(logInError);
    }, [logInError]);

    const onSubmitForm = useCallback(() => {
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        });

    }, [email, password]);


    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmitForm}

        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    value={email}
                    onChange={onChangeEmail} />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                />
            </Form.Item>

            <Form.Item {...layout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item justify="end"  >
                <Row>
                    <Button type="primary" htmlType="submit"
                        loading={logInLoading}
                    >
                        로그인
            </Button>
                    <Divider type="vertical" style={{ border: 'none' }} />
                    <Link href="/signup"><a><Button>
                        회원가입
            </Button></a></Link>
                </Row>
            </Form.Item>
            <Form.Item justify="end"  >
                <Row>
                    <GoogleLoginBtn />
                    <FacebookLoginBtn />
                </Row>
            </Form.Item>
        </Form>
    );


};
export default LoginForm;