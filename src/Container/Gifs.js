import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Autosuggest from 'react-autosuggest';

export const Gifs = () => {
    const [gifs,setGifs] = useState([])
    const [value,setValue] = useState("")
    const [loading,setLoading] = useState(true)
    const [suggestions,setSuggestions] = useState('')
    const [sug, setSug] = useState([])
    
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

   
     
   const onChange = (event, { newValue }) => {
      setValue(newValue)
     
    };


    const getSearchedGif = () => {
        setGifs([])
       fetchAPI(`http://api.giphy.com/v1/gifs/search?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&q=${value}&limit=10`)
       
    }

   
   const fetchSuggestions = (array) => {
    axios.get(`http://api.giphy.com/v1/tags/related/${value}?api_key=E5RM8Zgl4lCemTo228dldFw1CYWPg9Go&q`)
    .then(({data}) => {
     array = data.data.map(suggestion => suggestion )  
     setSug(array)
    // console.log(suggestionsArray)
    
    
   });
   return sug
   }

   
    const getSuggestions = value => {
      const inputValue = value.trim().toLowerCase();
  
      console.log(inputValue)
      const inputLength = inputValue.length;
      let suggestionsArray = []
     
       // setSuggestions(suggestionsArray)
       
       
      
       console.log(suggestionsArray)
       return  inputLength === 0 ? [] :  fetchSuggestions(suggestionsArray)
       
    };
    const getSuggestionValue = suggestion => suggestion.name;

    const onSuggestionsClearRequested = () => {
     setSuggestions([])
    };

    const onSuggestionsFetchRequested = ({value}) => {
      let suggestionsNew = getSuggestions(value)
      setSuggestions(suggestionsNew)
      console.log(suggestions)
    }

    const renderSuggestion = suggestion => <span>{suggestion.name}</span>
    

    const inputProps = {
      placeholder: 'Search gif',
      value,
      onChange
    };
   
  return  (

    <div style={{marginTop:"100px"}}>
        <div className="row mt-5 mb-5">
            <div className="col-4">
            <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
            {/*<input onChange={onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
            </div>
            <div className="col-2">
            <button onClick={getSearchedGif} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
               <div className="col-6"></div>
            </div>
      
        
   
  { !loading ? <div> {gifs}</div> 
  : <div className="text-center"><div style={{marginTop:"200px", width:"100px",height:"100px"}} className=" spinner-border text-warning" role="status"></div>
   </div> }
  
   </div>
   
  )
  
};


