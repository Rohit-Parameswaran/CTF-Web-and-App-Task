import "./App.css";
import { Home, Menu, Footer, Location, Contact, About } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/menu" exact component={() => <Menu />} />
          <Route path="/location" exact component={() => <Location />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
