import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate'

export const Quote = () => {

    const [quotes,setQuotes] = useState([])
    const [quoteDay,setQuote] = useState("")
    const [totalQuote, setTotalQuote] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const quotePerPage = 20
    
    useEffect (() => {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
             // let quotesArray = data.map(quote =><li className="list-group-item">{`,,${quote.text}"`} <i>{quote.author}</i></li>)
             setQuotes(data)
             setTotalQuote(data.length)
        
    })
   
 }, [])

 const lastQuote = currentPage * quotePerPage
  const firstQuote = lastQuote - quotePerPage
  const currentQuotes = quotes.slice(firstQuote,lastQuote)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

    const getQuoteOfDay = () => {
       console.log(quotes.length)
       const random = Math.floor(Math.random()* quotes.length) 
       console.log(random)
       let quoteOfDay = quotes[random]

       setQuote(<div>{`,,${quoteOfDay.text}"`} <i>{quoteOfDay.author}</i></div>)
       console.log(quoteOfDay)
    }

    return (
        <div style={{marginTop:"80px"}} >
            <div className="row m-5">
                <div className="col-3">
                <button onClick={getQuoteOfDay} className="btn btn-warning ">Get quote of the day:</button> 
                </div>
                <div className="col-9">
               { quoteDay}
                </div>
            
            </div>
           
            <ul className="list-group list-group-flush m-5">
            {currentQuotes.map(quote =><li className="list-group-item">{`,,${quote.text}"`} <i>{quote.author}</i></li>)}
            </ul>
            <div className="row justify-content-center">
            <ReactPaginate pageCount={Math.ceil(totalQuote/quotePerPage)} pageRangeDisplayed={2} marginPagesDisplayed={1} onPageChange={(data) => paginate(data.selected + 1)} containerClassName="pagination"
                  pageClassName="page-item" pageLinkClassName="page-link" previousClassName="page-link" nextClassName="page-link" activeClassName="active" /> 
            </div>
           
            
            </div>
    )
}