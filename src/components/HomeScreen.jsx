import React from 'react'
import "./HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import requests from './request';
import Row from './Row';
function HomeScreen() {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchTrending} isLargeRow ={true}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen