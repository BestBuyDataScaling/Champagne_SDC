import React, {useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';

const App = () => {
  const [options, setOptions] = useState([])

  // should pull mock data and store in state as an array
  useEffect(() => {
    axios.get(`http://localhost:3001/products`)
    .then(res => {
      console.log(res);
      setOptions(res.data)
    })
    .catch(err => {
      console.log(`Axios error getting all products: ${err}`)
    })
  }, []);

  //  query by what is being typed in
   // axios.get(`http://localhost:3001/products/${query}`)
    // .then(res => {
    //   console.log(res);
    //   setOptions(res.data)
    // })
    // .catch(err => {
    //   console.log(`Axios error getting all products: ${err}`)
    // })

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <Searchbar options={options} handleChange={handleChange} />
    </div>
  )
}

export default App;