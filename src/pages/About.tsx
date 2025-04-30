import React, { PureComponent } from 'react';
import Container from '../components/Container';
import Counter from '../components/Counter';
import {HelmetProvider, Helmet} from 'react-helmet-async';

class About extends PureComponent {
    render() {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>About</title>
                    <meta name="description" content="Страница о нас" />
                    <meta name="keywords" content="Контакты, ключевые, слова, для, SEO" />
                </Helmet>
                <Container>

                </Container>
            </HelmetProvider>
            // <HelmetProvider>
            //     <Helmet>
            //         <title>About</title>
            //         <meta name="description" content="Страница о нас"/>
            //         <meta name="keywords" content="Контакты, ключевые, слова, для, SEO" />
            //     </Helmet>
            //     <Container>
            //     </Container>
            // </HelmetProvider>
        )
    }
}

export default About