import React from 'react'

export default function Songs({ id, title, artist, rating, genre, songList, setSongList }) {
    const deleteItem = e => {
         e.preventDefault()
        console.log(e.target.id);
        setSongList(songList.filter(el => el.id != e.target.id))

    }
    return (
      
            <tr onClick={deleteItem} id={id} className='song-row__data'>
                <td  id={id}>{title}</td>
                <td id={id} >{artist}</td>
                <td id={id} >{genre}</td>
                <td id={id} >{rating}</td>
           </tr>
    )
}
