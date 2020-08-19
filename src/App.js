import React from "react";

import { Card, Chart, CountryPicker } from "./components";
import "./App.modules.css";
import { fetchData } from "./API";
import coronaImage from '../src/img/image.png';


class App extends React.Component {
  state = {
    data: {},
    country:'',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }
  render() {
    const { data, country } = this.state;
   
    return (
      <div className="container">
        <img className="image" src={coronaImage} alt="COVID-19"/>
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
 