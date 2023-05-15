import React, {useState} from 'react'

const BasicFetch2 = () => {
  // state
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState('');

  // fetch data
  const fetchData = () => {
    fetch(`https://api.agify.io/?name=${name}`)
    .then((res) => res.json())
    .then((data) => {
      setPredictedAge(data);
      console.log(data);
    });
  }


  return (
    <div className='App'>
      <input placeholder='Ex. Aris...' onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={fetchData} >Predict Age</button>

      <h1>Predict Name: {predictedAge.name}</h1>
      <h1>Predict Age: {predictedAge.age}</h1>
      <h1>Predict Count: {predictedAge.count}</h1>
    </div>
  )
}

export default BasicFetch2