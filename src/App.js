import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';




function App(){

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch('https://yblog.herokuapp.com/api/articles', {
      'method' : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : 'Token 9693c66068a701dc90a0bafb0898be0cd5023ab1',
      }
    })
    .then(resp => resp.json())
    .then(data => setArticles(data))
    .catch(error => console.log(error))
  }, [])
  
  return (
    <div className="App"> 

       <h2>Django and ReactJS Course</h2>
       {articles.map(article => {
         return <h3 key={article.id}>{article.title}</h3>
       })}

    </div> 
  )
}

export default App;