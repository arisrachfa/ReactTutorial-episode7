import React, {useState} from 'react'
import Axios from 'axios'

const FetchUsingAxios2 = () => {
  // state
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState(null); // ketika settings agar value awalnya null

  // fetch
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setPredictedAge(res.data)
    });
  };

  return (
    <div className='App'>
      <input placeholder='Ex. Aris...' onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={fetchData} >Predict Age</button>

      {/* maksud dari tanda tanya yaitu jika nilai predictedAge nya tidak null / 
      undifined maka akan menampilkan data sesuai yang diinputkan */}
      <h1>Predict Name: {predictedAge?.name}</h1>
      <h1>Predict Age: {predictedAge?.age}</h1>
      <h1>Predict Count: {predictedAge?.count}</h1>
    </div>
  )
}

export default FetchUsingAxios2