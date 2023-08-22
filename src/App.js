import logo from './logo.svg';
import './App.css';
import Header from './component/Head/header';
import Home from './component/Hero/home';
import Features from './component/Features/features';
import Portfolio from './component/Portfolio/Portfolio';
import Resume from './component/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
