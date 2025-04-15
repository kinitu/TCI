import React, {PureComponent} from 'react'


class Header extends PureComponent {
    render(){
        return (
            <>
                <div className='bg-orange-400 sticky top-0'>
                    <div className='text-x1'>Header</div>
                    <div className='flex gap-x-2'>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/blog">Blog</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Header