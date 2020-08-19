import React from "react";

import { Card, Chart, CountryPicker } from "./components";
import "./App.modules.css";
import { fetchData } from "./API";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const Data = await fetchData();
    this.setState({ data: Data });
    
  }
  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <Card data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
