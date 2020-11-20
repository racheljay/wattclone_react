import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home(props) {
    const [storyData, setStoryData] = useState([])

    const axiosCall = () => {
        const method = 'get';
        const url = 'http://127.0.0.1:8000/allstories';

         axios({
            method,
            url,

        }).then(res => setStoryData(res.data)).catch(err => console.log('error: ', err));
    }
useEffect(axiosCall, [])

    // console.log(data);
    return (
        <div className="container">
            <h1>Home</h1>
            {/* <button onClick={axiosCall}></button> */}
            {/* <h2>{data[0].title}</h2> */}
            <div className="row">
                {storyData.map((item, index) => {
                    return(
                    <div key={index} className="col-4 border">
                        <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Home;