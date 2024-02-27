// components/VideoCard.js
//import styles from '../styles/VideoCard.module.css';

import React, { useState, useEffect } from 'react';

const VideoCard = ({ video_path }) => {
    
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(video_path);
            const data = await response.json();
            setApiData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);
    
    return (
      <div>
        <h2>Insta API Response:</h2>
        {apiData ? (
          <ul>
            {apiData.map((item) => (
                // <li key={item.id}>
                // {/* {item.caption} - Caption: {item.media_url} */}
                <div>
                    <video controls width="600">
                        <source src={item.media_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                // </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};



export default VideoCard;