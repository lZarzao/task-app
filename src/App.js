import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import Task from './components/Task';

function App() {
  return (
    <div className='App'>
      <header className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='logo' />
      </header>
      <main className="task-main-list">
        <h1>My taskt</h1>
        <Task text='Aprender React' />
      </main>
    </div>
  );
}

export default App;