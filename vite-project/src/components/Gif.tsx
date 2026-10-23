import React from 'react'

type Props = {
    imgSrc: string;
}

export default function Gif({ imgSrc }: Props) {
    return (
        <div className="gif">
            <img src={imgSrc} />
        </div>
    )
}