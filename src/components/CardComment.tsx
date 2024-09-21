import { FC } from "react";
import { DataComment } from "../data/data";

interface PropsCardComment {
    data: DataComment;
    index: number;
}

const CardComment: FC<PropsCardComment> = ({ data, index }) => {
    const marginTop = (index === 0) 
    ? 'md:mt0-cardcomment'
    : ( index === 1) ? 'md:mt1-cardcomment' : 'md:mt2-cardcomment'; 
    return (
        <article className={`bg-VeryDarkMagenta text-White p-4 rounded-md flex flex-col gap-6 ${marginTop} md:h-[200px] `}>
            <div className="flex gap-6">
                <img
                    src={data.image}
                    alt={data.image}
                    className="rounded-full w-[45px]"
                />
                <div>
                    <h3 className="text-White text-[1rem]">{data.name}</h3>
                    <p className="text-SoftPink text-[0.8rem]"> {data.title} </p>
                </div>
            </div>
            <div className="text-LightGrayishMagenta text-[0.8rem]">
                <p>{data.comment}</p>
            </div>
        </article>
    )
}

export default CardComment