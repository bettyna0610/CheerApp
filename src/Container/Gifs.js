import React, {useState, useEffect} from 'react'

export const Gifs = () => {
    const [gifs,setGifs] = useState([])
    const [search,setSearch] = useState("")

    useEffect (() => {
        
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&limit=5')
      .then(response => response.json())
      .then(data => {
          console.log(data)
         const  gifsArray = data.data.map(gif => {
            
           return <img width="200px" height="200px" alt={gif.title} src={gif.images.original.url} />
         })
           setGifs(gifsArray)
           
      }
     
      )
    }, []
    )
     
    const onChange = (e) => {
           let inputValue = e.target.value
           setSearch(inputValue)
    }


    const getSearchedGif = () => {
        setGifs([])
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&q=${search}&limit=10`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
           const  gifsArray = data.data.map(gif => {
              
             return <img width="200px" height="200px" alt={gif.title} src={gif.images.original.url} />
           })
             setGifs(gifsArray)
             
        }
       
        )
    }
  return  (
    <div style={{marginTop:"100px"}}>
        <div className="row mt-5 mb-5">
            <div className="col-4">
            <input onChange={onChange} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="col-2">
            <button onClick={getSearchedGif} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
               <div className="col-6"></div>
            </div>
       
        
   
   <div> {gifs}</div> </div>
  )
  
};
