import React, {useState, useEffect } from 'react'
import axios from 'axios';
// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

function 	SummaryStatsApp(){

    const [resourceType, setResourceType ] = useState('posts')
    const [items, setItems] =useState([])
    
    //const data = JSON.parse(items);
    const keys = Object.keys(items.length ? items[0] : {});
   
    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios(
            //"http://localhost:8080", 
              {
                url: `/${resourceType}`,
                baseURL: "",
                withCredentials: false,
                method: 'POST', 
                headers: {
                  'Access-Control-Allow-Origin' : '*',
                  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                  'Accept': 'application/json', // 'Access-Control-Allow-Origin
                  'Content-Type': 'application/json'   
                }, 
                data: JSON.stringify({"age": 2,"name": "Ervin Howell","username": "ErvMate", "email": "Sincere@april.biz", "gender": "male"})
              }
          );
          //setItems({ hits: data } );
          setItems(data);
          
          console.log('fetch complete' , resourceType   ,data    );
        };
        fetchData();
      }, [resourceType]);


  return (
    <div className="App">
      <h5>|{resourceType}|</h5>
             <button onClick={() => setResourceType('posts') }>posts</button>
             <button onClick={() => setResourceType('users') }>users</button>
             <button onClick={() => setResourceType('comments') }>comments</button>

      {items.length > 0 && (
        <table>
         <thead>
            <tr>
              {keys.map((item, idx) => (
                <th key={idx}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                {keys.map((key, idx) => (
                  <td>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );


}

export default SummaryStatsApp;

