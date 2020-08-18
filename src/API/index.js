import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const data = await Axios.get(url);
    const motifiedData = {
      confirmed: data.data.confirmed,
      deaths: data.data.deaths,
      lastUpdate: data.data.lastUpdate,
      recovered: data.data.recovered,
    };
    return motifiedData;
  } catch (error) {}
};

