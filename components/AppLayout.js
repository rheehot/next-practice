import { useState } from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

const AppLayout = ({ children }) => {
    const [isLoggendIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggendIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    { children }
                </Col>

                <Col xs={24} md={6}>
                    <a href="https://redgee.tistory.com" target="_blank" rel="noreferrer noopener">Made by Harry</a>
                </Col>
            </Row>
            { children }
        </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;