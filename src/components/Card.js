import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Journal from './Journal';
import { Route, Link } from 'react-router';

function Card (props) {
    const [data, setData] = useState([])
     useEffect (() => { 
    axios.get('https://api.harvardartmuseums.org/image?apikey=d6fda28c-3901-4112-bcba-623791e4cc0a')
   .then( (response)=> {
     console.log(response.data.records[0].baseimageurl);
      setData(response.data.records)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
   });
 }, [])

    return(
        <div className='cards-container'>
            {data.map((e) => {
              {console.log(props.id)}
               <Link to={`/img-journal/${props.id}`} key={props.id}>
                return (
                  <div className='card'>
                    <button onClick={console.log(props.id)} > CLICK ME</button>
                    
                    <img  src={e.baseimageurl} />
                    <Route 
                    path="/img-journal/:id" 
                    render = { () => <Journal  id={props.id} />}
                    />
                  </div>
                )
                
                  </Link>
            })}
        </div>
    )
}

export default Card