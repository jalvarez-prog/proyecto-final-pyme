import React from 'react';
import {Menu, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';

export default function navbar() {
    return (
        <Menu >
            <Container>
                <Link to='/'>
                    <Menu.Item name='Home' />
                </Link>

                <Link to='/people'>
                    <Menu.Item name='people' />
                </Link>

                <Link to='/planets'>
                    <Menu.Item name='planets' />
                </Link>

                <Link to='/#'>
                    <Menu.Item name='link3' />
                </Link>

            </Container>
        </Menu>

        



    );
}
