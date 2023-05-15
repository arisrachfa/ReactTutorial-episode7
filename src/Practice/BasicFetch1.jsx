import React,{useState, useEffect} from 'react'


const BasicFetch1 = () => {
    // state
    const [catFact, setCatFact] = useState()

    // fetch data from API
    // dan menggunakan costum function untuk dapat dipanggil ketika di klik
    const fetchCatData = () => {
        fetch('https://catfact.ninja/fact')
            .then((res) => res.json())
            .then((data) => {
                setCatFact(data.fact);
            });
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

export default BasicFetch1