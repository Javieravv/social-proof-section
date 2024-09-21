import { FC } from "react";
import Start from "./Start";

interface PropsCardHeader {
    title: string;
    index?: number;
}

const Cardheader: FC<PropsCardHeader> = ({ title, index=0 }) => {
    const marginTemp = ( index === 0) ? 'md:ml0-cardheader'
    : (index === 1 ) ? 'md:ml1-cardheader' : 'md:ml2-cardheader'
    return (
        <div className={`flex flex-col bg-LightGrayishMagenta rounded 
        place-content-center place-items-center h-[70px] gap-1 
        ${marginTemp} md:h-[55px] md:w-[80%]`} >
            <div className=" flex gap-1">
                {
                    Array(5).fill('',1,5).map((_, index) => (
                        <Start key={`${title}-${index}`} />
                    ))
                }
            </div>
            <div>
                <p className="text-VeryDarkMagenta font-bold"> {title} </p>
            </div>

        </div>
    )
}

export default Cardheader