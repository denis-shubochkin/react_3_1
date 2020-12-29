import './App.css';
import {Stars} from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={6} />
      <Stars count={5} />
      <Stars count={4} />
      <Stars count={'asd'} />
      <Stars />
    </div>
  );
}

export default App;
