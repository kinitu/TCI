import React, { PureComponent } from 'react'
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';
import Container from '../components/Container';
import Counter from '../components/Counter';
import Product from '../components/Product';
import InputComponent from '../components/InputComponent';
import {HelmetProvider, Helmet} from 'react-helmet-async';

class Home extends PureComponent {
    render() {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Главная страница" />
                    <meta name="keywords" content="Рекомендации, недавние события и меню" />
                </Helmet>
                <Container>
                    <div className='bg-green-600 text-lg'>Home</div>
                    <div className='flex gap-x-2'>
                        <Button color="primary" size="large" title="Подвердить" />
                        <Button color="secondary" size="medium" title="Удалить" />
                    </div>
                    <div>
                        <Text family="mono" size="small" title="Hello, World"/>
                    </div>
                    <div>
                        <Input size="medium" color="black"/>
                    </div>
                    <Product/>
                </Container>
            </HelmetProvider>
            
            
        )
    }
}

export default Home