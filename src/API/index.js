import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, deaths, lastUpdate, recovered },
    } = await Axios.get(url);
    return { confirmed, deaths, lastUpdate, recovered };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

fetchDailyData();
