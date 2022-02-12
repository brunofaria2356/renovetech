import React from 'react';

import Hero from './components/Hero';
import ComponentHomeOne from './components/ComponentHomeOne';
import ComponentHomeTwo from './components/ComponentHomeTwo';
import ComponentContactUs from './components/ComponentContactUs';


function Home() {
  return (
    <>
      <Hero />
      <ComponentHomeOne />
      <ComponentHomeTwo />
      <ComponentContactUs />
    </>
  )
}

export default Home;