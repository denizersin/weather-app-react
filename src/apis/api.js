import { promiseFor } from "../App";
import { data } from "../sampleData"
const API_KEY = 'b35758515974bcd630ec0327c3b2deab';

async function getCoordinates(city) {
    let cordinateJson;
    try {
        cordinateJson = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${city}&format=json&apiKey=5e5b4cf93dd44368a4968dc775e3b46e`);
    }
    catch {
        return new Error();
    }
    let cordinateJson2 = await cordinateJson.json();
    return [cordinateJson2.results[0].lat, cordinateJson2.results[0].lon];
}

export async function fetchCityData(city) {
    let lat, lon;
    try {
        [lat, lon] = await getCoordinates(city)
    }
    catch {
        return new Error();
    }
    // const data = await (await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${''}&appid=${API_KEY}`)).json();

    await promiseFor(500);
    return data;
}

