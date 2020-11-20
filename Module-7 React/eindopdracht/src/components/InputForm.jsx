import React from 'react'

export default function InputForm({songList, setSongList}) {
  
    const submitInputHandler = e => {
        e.preventDefault()
        const title = e.target.title.value
        const artist = e.target.artist.value
        if (title !== "" && artist !== "") {
          setSongList([...songList, {
            title: e.target.title.value,
            artist: e.target.artist.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            id: Math.random() * 1000, amount: 1
        }])
        e.target.reset()
        } else {
            alert('Vul alle velden in')
        }
            
            
       
    }

    return (
        <div id="formContainer">
            <form onSubmit={submitInputHandler} >
                <input name="title" type="text" placeholder='Title' />
                <input name="artist" type="text" placeholder='Artist' />
                <select name="genre">
                    <option value="Trance">Trance</option>
                    <option value="Hardstyle">Hardstyle</option>
                    <option value="EDM">EDM</option>
                    <option value="Other">Other</option>
                </select>
                  <select name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Add Song</button>
           </form>
          
        </div>
    )
}
