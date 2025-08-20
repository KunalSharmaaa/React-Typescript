import './App.css';
import { Button } from './components/Button';



function App() {

  return (
    <div className="App">
      <Button handleClick={() => {
        console.log('Button Clicked')
      }} />
    </div>
  );
}

export default App;
