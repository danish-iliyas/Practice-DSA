import React from 'react';
import { useParams } from 'react-router-dom';
const AlbumDetail = ({  data }) => {
  
  const { albumId } = useParams(); // Get albumId from URL

  // Ensure data is an array before filtering
  const filteredAlbum = Array.isArray(data)
    ? data.filter((item) => item.albumId === albumId)
    : [];
  console.log(filteredAlbum, "filteredAlbum");

  return (
    <div>
      <h1>Album Details:</h1>
      {/* Display the filtered album details */}
      <div style={{
            }}>
        {filteredAlbum.map((item) => (
          <div key={item.id} className='p-2 m-2 bg-red-400s h-[500px] w-[500px]'>
            <p><strong>Id:</strong> {item.id}</p>
            <p><strong>Title:</strong> <img src="https://via.placeholder.com/150" alt="" srcset="" /></p>
            {/* <img src={item.url} alt={item.title} className="w-full h-auto" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
