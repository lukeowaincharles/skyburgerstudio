import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Sections/About";
// import FindOutMore from "./Components/Sections/FindOutMore";
// import WhoWeAre from "./Components/Sections/WhoWeAre";
import HappyBirthday from "./Components/Sections/HappyBirthday";
import Intro from "./Components/Sections/Intro";
import Splash from "./Components/Sections/Splash";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Splash />
              <Intro />
              {/* <FindOutMore />
              <WhoWeAre /> */}
              <About />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route exact path="/happy-birthday" render={() => <HappyBirthday />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
