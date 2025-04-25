import React, { PureComponent } from 'react';
import Container from '../components/Container';
import Counter from '../components/Counter';
import {Helmet} from 'react-helmet';

class About extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <Helmet>
                        <title>About</title>
                        <meta name="description" content="Страница о нас"/>
                        <meta name="keywords" content="Контакты, ключевые, слова, для, SEO" />
                    </Helmet>
                </Container>
            </>
        )
    }
}

export default About