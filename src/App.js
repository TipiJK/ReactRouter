
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/notfound';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        
        <header className="App-header">
          <h1>Welcome to React Router</h1>
        </header>

        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/about"element={<About />} />
          <Route path="/contact"element={<Contact />} />
          <Route path="*"element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
