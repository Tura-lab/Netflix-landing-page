import './App.css';
import Nav from './Nav';
import Texts from './Texts';
import SecondLayer from './SecondLayer';
import ThirdLayer from './ThirdLayer';
import FourthLayer from './FourthLayer';
import FifthLayer from './FifthLayer';
import FAQLayer from './FAQLayer';

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
      <FourthLayer />
      <FifthLayer />
      <FAQLayer />
    </div>
  );
}

export default App;
