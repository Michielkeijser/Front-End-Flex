import React, { useState } from 'react'
import PlayList from './PlayList';
import InputForm from './InputForm'



export default function Container() {
const [songList, setSongList] = useState([])

    return (
        <div>
            <InputForm songList={songList} setSongList={setSongList} />
            <PlayList songList={songList} setSongList={setSongList} />
        </div>
        
    )
}
