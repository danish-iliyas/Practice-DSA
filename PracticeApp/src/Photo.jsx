import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Photo = () => {
const [loading,setLoading]=useState(true)
const [data , setData]= useState([])
const [selectedAlbum, setSelectedAlbum] = useState(null); 
 useEffect(
   () => {
    const fetchData = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos" )
        // console.log(response,"hi    ")
        setData(response.data)
        setLoading(false)
        console.log(response.data)
        
    }
    fetchData()
   }
 ,[])
 const setSelectedalbumm=  (item)=>{
    setSelectedAlbum(item)
  }

const albumId= [...new Set(data.map((item)=>item.albumId))]
console.log(albumId ,"albumid")
if(loading){
    return <>loading....</>
}


    // Filter or render the data
    return (
        <div>
        <h1>Fetched Data:</h1>
        <ul className=''>
          {albumId.map((item) => (
            <li key={item.id} className='h-[10vh] w-[10vw] bg-red-500'>
              <strong>Album ID:</strong> {item} <br />
              {/* <strong>Title:</strong> {item.title} <br /> */}
              <button onClick={()=>setSelectedalbumm(item)} >open</button>
            </li>
          ))}
        </ul>
      </div>
      
      );
    
}

export default Photo
