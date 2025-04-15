import { PropsWithChildren } from "react";

export const Container = ({children}: PropsWithChildren) => {
    return(
        <div className='bg-gray-200 md:bg-amber-200 lg:bg-amber-400 w-[100%] h-[calc(100vh)] rounded-2xl shadow'>
            {children}
        </div>
    )
}

export default Container;