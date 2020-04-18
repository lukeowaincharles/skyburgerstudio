import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import FindOutMore from "./Components/Sections/FindOutMore";
import WhoWeAre from "./Components/Sections/WhoWeAre";
import HappyBirthday from "./Components/Sections/HappyBirthday";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <FindOutMore />
              <WhoWeAre />
            </React.Fragment>
          )}
        />
        <Route exact path="/happy-birthday" render={() => <HappyBirthday />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
