import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const FetchUsingAxios1 = () => {
    // state
    const [catFact, setCatFact] = useState()

    // fetch data from API menggunakan axios
    // dan menggunakan costum function untuk dapat dipanggil ketika di klik
    const fetchCatData = () => {
        Axios.get('https://catfact.ninja/fact')
        .then((res) => {
            setCatFact(res.data.fact)
        })
    };

    // menggunakan useEffect untuk merender ulang dari API yang dipanggil sesuai kebutuhan
    // dan tidak dirender ulang secara otomotis
    useEffect(() => {
        fetchCatData();
    }, []);
    
  return (
    <div className='App'>
        <button onClick={fetchCatData} >Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
  )
}

export default FetchUsingAxios1