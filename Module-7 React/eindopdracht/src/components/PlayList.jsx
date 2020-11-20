import React from 'react'
import Songs from './Songs'

export default function PlayList({songList, setSongList}) {
    return (
<React.Fragment>
  <table>
        <tr>
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>    
        </table>

         <table>
             {songList.map(song => (
               <Songs
                  songList={songList}
                  setSongList={setSongList}
                  key={song.id}
                  id={song.id}
                  title={song.title}
                  artist={song.artist}
                  rating={song.rating}
                  genre={song.genre}
              />
             ))}
          </table>
</React.Fragment>
    )
}
