import React, { PureComponent } from 'react'
import Container from '../components/Container'
import Message from '../components/Message'

class Blog extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <Message/>
                </Container>
            </>
        )
    }
}

export default Blog