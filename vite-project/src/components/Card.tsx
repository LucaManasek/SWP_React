import React from 'react'
import style from '../modules/Card.module.css'

type Props = {
    title: string; imgSrc: string; description: string;
}

const words = [
    'bright', 'river', 'paper', 'garden', 'window', 'quiet',
    'mountain', 'silver', 'morning', 'pencil', 'cloud', 'forest',
    'meadow', 'lantern', 'ocean', 'marble', 'sunrise', 'willow',
    'breeze', 'copper', 'meadow', 'island', 'canvas', 'rainfall'
];



export default function Card({ title, imgSrc, description }: Props) {
    const randomText = Array.from({ length: 3 }, () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }).join(' ');
    return (
        <div className={style.card}>
            <h2>{title}</h2>
            <img src={imgSrc} />
            <p>{description}</p>
            <p>{randomText}</p>
        </div>
    )
}