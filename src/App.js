import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'

function App() {
  return (
    <div className='App'>
      <header className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
