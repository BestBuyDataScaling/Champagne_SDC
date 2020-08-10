import React, {useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';


const App = () => {
  // use react hook useState to create a setoptions function associated with changing the state of the options key. Set the options key to an empty array with useState
  const [options, setOptions] = useState([])

  // accept what is being typed in as a parameter and set the state equal to the response
  useEffect(() => {
    // axios.get(`http://localhost:3001/products/${query}`)
    // .then(res => {
    //   console.log(res);
    //   setOptions(res.data)
    // })
    // .catch(err => {
    //   console.log(`Axios error getting all products: ${err}`)
    // })
    axios.get(`http://localhost:3001/products`)
    .then(res => {
      console.log(res);
      setOptions(res.data)
    })
    .catch(err => {
      console.log(`Axios error getting all products: ${err}`)
    })
  }, []);



  const handleChange = (e) => {
    console.log(e.target.value);
    // each time a letter is typed in, trigger get request to see what products match the typed in text
    // getProducts(e.target.value)
  }

  return (
    <div>
      <Searchbar options={options} handleChange={handleChange} />
    </div>
  )
}

export default App;