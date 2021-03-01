import React, {useState} from 'react'
import {Button} from './Button'
import {ButtonChuck} from './ButtonChuck'
import {ButtonPun} from './ButtonPun'
import {ButtonProgramming} from './ButtonProgramming'

export const JokePage = () => {

    const [joke,setJoke] = useState("")

    const onClick = () => {
        let dailyJoke;
    fetch('https://api.jokes.one/jod')
  .then(response => response.json())
  .then(data => {
    console.log(data)
       dailyJoke = data.contents.jokes[0].joke.text
       setJoke(dailyJoke)
  }
 
  )
    
    }

   const  onClickChuck = () => {
        let chuckJoke;
    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
       chuckJoke = data.value
       setJoke(chuckJoke)
  }
 
  )
    }


    const onClickPun = () => {
        let punJoke;
    fetch(' https://v2.jokeapi.dev/joke/pun')
  .then(response => response.json())
  .then(data => {
       console.log(data)
       punJoke = data.setup + data.delivery
       console.log(punJoke)
       setJoke(punJoke)
  }
 
  )
    }

   const  onClickProgramming = () => {
        let progJoke;
    fetch('https://v2.jokeapi.dev/joke/programming')
  .then(response => response.json())
  .then(data => {
       if (data.joke) {
        progJoke = data.joke
       } else {
         progJoke = `${data.setup} ${data.delivery}`
       }
       
       setJoke(progJoke)
       console.log(progJoke)
  }
 
  )
    }
   


    return (
      <div>
        <div className="row justify-content-center">
          
          <div className="text-xs-center" style={{marginTop:"200px"}}>
              <Button onClick={onClick}/>
              
              
              <ButtonChuck onClickChuck= {onClickChuck}/>
              
              <ButtonPun onClickPun = {onClickPun}/>
              
              <ButtonProgramming onClickProgramming = {onClickProgramming}/>
              
             
              </div>
              
          
       
              </div>
              {joke && <div  className="font-weight-bold rounded font-italic border border-warning row justify-content-center m-5 p-5">{joke}</div> }
             
              

      
      </div>
       
              
    )
}