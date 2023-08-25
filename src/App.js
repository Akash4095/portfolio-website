import logo from './logo.svg';
import './App.css';
import Header from './component/Head/header';
import Home from './component/Hero/home';
import Features from './component/Features/features';
import Portfolio from './component/Portfolio/Portfolio';
import Resume from './component/Resume/Resume';
import Testimonial from './component/Testimonial/Testimonial';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
