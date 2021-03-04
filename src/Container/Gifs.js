import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Gifs = () => {
    const [gifs,setGifs] = useState([])
    const [search,setSearch] = useState("")
    const [loading,setLoading] = useState(true)
    const [suggestions,setSuggestions] = useState('')
    
    const fetchAPI = async (url) => {
      let response = await fetch(url)
      response = await response.json()
        
         
         const  gifsArray = response.data.map(gif => {
            
           return <img width="200px" height="200px" alt={gif.title} src={gif.images.fixed_height.url} />
         })
          await setLoading(false)
           setGifs(gifsArray)
           
      }
   
    useEffect (() => {
     
       
        fetchAPI('http://api.giphy.com/v1/gifs/trending?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&limit=5')
      
     
    }, []
    )

   
     
    const onChange = (e) => {
           let inputValue = e.target.value
           setSearch(inputValue)
           getSuggestions()
    }


    const getSearchedGif = () => {
        setGifs([])
       fetchAPI(`http://api.giphy.com/v1/gifs/search?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&q=${search}&limit=10`)
       
    }

   const  getSuggestions = () => {
      axios.get(`http://api.giphy.com/v1/tags/related/${search}?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&q`)
      .then(({data}) => {
        const suggestions = data.data.map(suggestion => <h3>{suggestion.name}</h3> )
        setSuggestions(suggestions)
      })
    
    }
  return  (

    <div style={{marginTop:"100px"}}>
        <div className="row mt-5 mb-5">
            <div className="col-4">
            <input onChange={onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="col-2">
            <button onClick={getSearchedGif} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
               <div className="col-6"></div>
            </div>
       <ul>
       {suggestions}
       </ul>
        
   
  { !loading ? <div> {gifs}</div> 
  : <div className="text-center"><div style={{marginTop:"200px", width:"100px",height:"100px"}} className=" spinner-border text-warning" role="status"></div>
   </div> }
   </div>
   
  )
  
};

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>{r.name}</li>
  ))
  return <ul>{options}</ul>
}
