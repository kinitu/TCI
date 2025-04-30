import React, { PureComponent } from 'react'
import Container from '../components/Container'
import Message from '../components/Message'
import GetProduct from '../components/GetProduct'
import {HelmetProvider, Helmet} from 'react-helmet-async';

class Blog extends PureComponent {
    render() {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>Blog</title>
                    <meta name="description" content="Страница c блогами" />
                    <meta name="keywords" content="Журнал событий" />
                </Helmet>
                <Container>
                    <Message/>
                    <GetProduct />
                </Container>
            </HelmetProvider>
        )
    }
}

export default Blog