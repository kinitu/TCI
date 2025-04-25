import React, { PureComponent } from 'react'
import Container from '../components/Container'
import Message from '../components/Message'
import GetProduct from '../components/GetProduct'

class Blog extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <Message/>
                    <GetProduct />
                </Container>
            </>
        )
    }
}

export default Blog