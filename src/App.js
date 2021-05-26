import './App.css';
import Nav from './Nav';
import Texts from './Texts';
import SecondLayer from './SecondLayer';

function App() {
  return (
    <div className="App">
      <div className="first__layer">
        <div className='back'>
          <Nav />
          <Texts />
        </div>
      </div>
      
      <div>
        <SecondLayer />
      </div>
      
    </div>
  );
}

export default App;
