import React from 'react';

function Home() {
  const myStyle = {
    backgroundImage: "url('/Images/nature.jpg')",
    display:'flex',
    height:'100vh',
  };

  return (
    <div  className='home'>
      Readme
      <p>
        Wellecome to this website I m willing to learn about how API work and to get a clear Idea about how json-server works in general
      </p>
    </div>
    
  );
}

export default Home;
