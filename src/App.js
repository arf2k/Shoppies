import './App.css';
import React from 'react';
import MovieContainer from './containers/MovieContainer.js'
import styled from 'styled-components'


function App() {
  return (
    <>
    <Title>Welcome to The Shoppies: Search and Pick</Title>
    <MovieContainer/>
    </>
  );
}

export default App;

const Title = styled.h1`
text-align: Center 
`