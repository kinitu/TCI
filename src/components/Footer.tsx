import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    render() {
        return (
            <div className='bg-blue-400 inset-x-0 h-[100px] absolute bottom-0'>
                <div font-lg>Footer</div>
                <div className='flex gap-x-2'>
                    <a href="https://github.com/kinitu/internet-technology.git">GitHub</a>
                    <a href="/about">About</a>
                </div>
            </div>
        )
    }
}

export default Footer