import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import headshot1 from './assets/headshot1.png'; // Adjust path to where the images are stored
import headshot2 from './assets/headshot2.png';

import './index.css';

const App = () => {
  const cardData = [
    {
      name: 'Alexander Doe',
      role: 'Web Developer',
      image: headshot1,
    },
    {
      name: 'Sam Johnson',
      role: 'UI/UX Designer',
      image: headshot2,
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div id="home" className="section">
          <div className="container">
            <h1 className="profile-title">Profile App</h1>
          </div>
        </div>
        <div id="about" className="section">
          <div className="container">
            <About />
          </div>
        </div>
        <div id="profiles" className="section">
          <div className="container">
            <Wrapper>
              {cardData.map((card, index) => (
                <Card 
                  key={index} 
                  name={card.name} 
                  role={card.role} 
                  image={card.image} 
                />
              ))}
            </Wrapper>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
