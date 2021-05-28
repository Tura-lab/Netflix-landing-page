import './App.css';
import Nav from './Nav';
import Texts from './Texts';
import SecondLayer from './SecondLayer';
import ThirdLayer from './ThirdLayer';

function App() {
  return (
    <div className="App">
      <div className="first__layer">
        <div className='back'>
          <Nav />
          <Texts />
        </div>
      </div>
      <SecondLayer />
      <ThirdLayer />
    </div>
  );
}

export default App;
