import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/Sections/About";
import Experience from "./Components/Sections/Experience";
// import FindOutMore from "./Components/Sections/FindOutMore";
// import WhoWeAre from "./Components/Sections/WhoWeAre";
import HappyBirthday from "./Components/Sections/HappyBirthday";
import Intro from "./Components/Sections/Intro";
import RecentWork from "./Components/Sections/RecentWork";
import Splash from "./Components/Sections/Splash";
import Testimonials from "./Components/Sections/Testimonials";

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
              <Header />
              <Intro />
              <RecentWork />
              <Experience />
              <Testimonials />
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
