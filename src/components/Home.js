import React from "react";
import { name, city } from "../data/data.js";

const headingColor = {
  color: 'firebrick',
}

function Home() {
  return( 
  <div id="home">
    <h1 style={headingColor}> {name} is a Web Developer from {city} </h1>
    Home
  </div>
  )
}

export default Home;
