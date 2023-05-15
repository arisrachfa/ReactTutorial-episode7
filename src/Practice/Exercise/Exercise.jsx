import React, {useState} from 'react'
import Axios from 'axios'

const Exercise = () => {
    // state
    const [generatedExcuse, setGeneratedExcuse] = useState('');

    // fetch data
    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
        .then((res)=>{
            // penggunaan data[0], digunakan karena API yang dipanggil menggunakan structure array pada data JSON oleh karena
            // itu untuk mengambil data tersebut menggunkan [0] karena data yang diingikan ada pada indeks pertama
            // Jika [] tidak digunakan maka akan terjadi error
            setGeneratedExcuse(res.data[0].excuse)
            console.log(res.data)
        });
    };


  return (
    <div className='App'>
        <h1>Generate An Excuse</h1>
        <button onClick={() => {fetchExcuse("party")}}> Party </button>
        <button onClick={() => {fetchExcuse("family")}}> Family </button>
        <button onClick={() => {fetchExcuse("office")}}> Office </button>

        <p>{generatedExcuse}</p>
    </div>
  )
}

export default Exercise