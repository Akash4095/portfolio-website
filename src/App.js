import logo from './logo.svg';
import './App.css';
import Header from './component/Head/header';
import Home from './component/Hero/home';
import Features from './component/Features/features';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
    </div>
  );
}

export default App;
