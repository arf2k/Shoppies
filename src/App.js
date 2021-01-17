import './App.css';
import React from 'react';
import MovieContainer from './containers/MovieContainer.js'
import styled from 'styled-components'


function App() {
  return (
    <>
    <Background>
    <Title>Welcome to The Shoppies: Search and Pick 5 Nominees</Title>
    <MovieContainer/>
    </Background>
    </>
  );
}

export default App;

const Title = styled.h1`
text-align: Center 
`
const Background = styled.section`
background-color: #5D85A2

`