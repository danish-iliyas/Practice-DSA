import React, { useEffect, useState ,} from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { useNavigate } from 'react-router-dom';

const Photo = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        console.log("Fetched data:", response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`); // Navigate to album detail page
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedAlbum(null); // Clear selected album
  };

  const albumIds = [...new Set(data.map((item) => item.albumId))];

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albumIds.map((albumId) => (
          <li key={albumId}>
            <strong>Album ID:</strong> {albumId} <br />
            <button
              onClick={() => handleAlbumClick(albumId)}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Open
            </button>
          </li>
        ))}
      </ul>
             { selectedAlbum && <AlbumDetail albumId={selectedAlbum} data={data} />} 
      {/* {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(55, 65, 81, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              width: '50%',
              maxWidth: '600px',
              position: 'relative',
              maxHeight: '80vh', // Max height to avoid it taking over the entire screen
              overflowY: 'auto', // Enable vertical scrolling when content overflows
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                fontSize: '20px',
                color: '#6b7280',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            {selectedAlbum && <AlbumDetail selectedAlbum={selectedAlbum} data={data} />}
          </div>
        </div>
      )} */}

    </div>
  );
};

export default Photo;
