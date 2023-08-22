import logo from './logo.svg';
import './App.css';
import Header from './component/Head/header';
import Home from './component/Hero/home';
import Features from './component/Features/features';
import Portfolio from './component/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
    </div>
  );
}

export default App;
