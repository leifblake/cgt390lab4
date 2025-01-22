import Navbar from './components/Navbar';
import About from './components/About';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import './index.css';

const App = () => {
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
            <Card1 />
            <Card2 />
          </div>  
        </div>
      </main>
    </>
  );
}

export default App;
