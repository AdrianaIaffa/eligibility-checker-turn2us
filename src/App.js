import Checker from './components/checker/Checker';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Checker />
    </div>
    </BrowserRouter>
  );
}

export default App;
