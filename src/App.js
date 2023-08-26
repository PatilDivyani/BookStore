import "./App.css";
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import BooksData from "./Components/BooksData";
import BookDetails from "./Components/BookDetails";

function App() {
  let [api1, setapi1] = useState({});
  let [api2, setapi2] = useState({})
  let [loading, setLoading] = useState(false)

  useEffect(() => {
      fetchAPI()
  }, [])

  const fetchAPI = async () => {
      let api1 = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
      let api2 = 'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes';
      try {
          const response1 = await axios.get(api1)
          const response2 = await axios.get(api2)

          const data1 = await response1.data.items;
          const data2 = await response2.data.items;

          setapi1(data1)
          setapi2(data2)
          setLoading(true)
      } catch (error) {
          console.log(error)
      }
  }
  
  console.log('Sherlock', api1)
  console.log('Harry', api2)


  return (
    <>
    <BookDetails api1={api1}  />
      <BooksData api1={api1} api2={api2} loading={loading} />
    </>
  );
}

export default App;
