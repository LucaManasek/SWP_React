import React from 'react'
import style from '../modules/List.module.css'

type Props = {
    Item1?: string;
    Item2?: string;
    Item3?: string;
}

export default function List({ Item1, Item2, Item3 }: Props) {
    return (
        <div className={style.List}>
            <ul>
                <li>{Item1}</li>
                <li>{Item2}</li>
                <li>{Item3}</li>
            </ul>
        </div>
    )
}