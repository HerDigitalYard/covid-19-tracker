import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../API";
import Styles from "./CountryPicker.module.css";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setfetchCoutries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchCoutries(await fetchCountries());
    };

    fetchAPI();
  }, [setfetchCoutries]);
  return (
    <FormControl className={Styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
