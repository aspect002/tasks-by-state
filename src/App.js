import './App.css';
import CounterComponent from './Components/CounterComponent';
import HideShowText from './Components/HideShowText'
import InputComponent from './Components/InputComponent'
import ColorChangeButton from './Components/ColorChangeButton'
function App() {
  return (
    <div className="App">
      <HideShowText />
      <CounterComponent />
      <InputComponent />
      <ColorChangeButton />
    </div>
  );
}

export default App;
