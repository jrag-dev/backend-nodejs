import process from "node:process";
import axios from "axios";
import chalk from "chalk";
import 'dotenv/config';
import { config } from "dotenv";



config({ path: process.ENV })

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


async function getWeather(city) {
  try {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;
    const response = await axios.get(endpoint, {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: "metric"
      }
    });
    return response.data;
  } catch (err) {
    console.log(chalk.redBright.bold(err));
    throw new Error(`No es posible obtener la información de la ciudad: ${city}`);
  }
}


function main() {

  let city = process.argv[2]?.split("=")[1];
  //let country = process.argv[3]?.split("=")[1];

  if (!city) {
    console.log(
      chalk.redBright.bold("Por favor, proporciona un nombre de lugar o ciudad")
    );
    console.log(
      chalk.redBright.bold("Ejecuta el siguente comando: node app.js city=[nombre o ciudad]")
    );
  }

  city = capitalizeText(city);
  //country = capitalizeText(country);

  getWeather(city)
    .then((weatherData) => displayResults(city, weatherData))
    .catch(handleError);
    
}


function capitalizeText(text) {
  const words = text.split(" ");
  let textFull = "";
  for (const word of words) {
    const initialLetter = word.charAt().toLocaleUpperCase();
    const restOfText = word.substring(1,).toLocaleLowerCase();
    textFull += initialLetter + restOfText + " ";
  }
  return textFull;
}

function displayResults(city, data) {
  const { main } = data;
  const {temp, temp_min, temp_max, pressure, humidity } = main;
  console.log(chalk.blueBright.bold("\nInformación del clima: ") + chalk.white.bold(city));
  console.log(chalk.yellowBright.bold("Temperatura: ") + chalk.white.bold(temp) + " ºC")
  console.log(chalk.yellowBright.bold("Temp min: ") + chalk.white.bold(temp_min) + " ºC")
  console.log(chalk.yellowBright.bold("Temp máx: ") + chalk.white.bold(temp_max) + " ºC")
  console.log(chalk.yellowBright.bold("Presión: ") + chalk.white.bold(pressure) + " mb")
  console.log(chalk.yellowBright.bold("Humedad: ") + chalk.white.bold(humidity) + " %")
  console.log(
    chalk.yellowBright.bold("Velocidad del Viento: "), `${data.wind.speed} m/s`
  )
  console.log("\n")
}

function handleError(err) {
  console.log(chalk.redBright.bold("Error: "), err.message)
}


function kelvinToCelsius(tempKelvin) {
  let tempCelsius = tempKelvin - 273;
  return tempCelsius.toPrecision(4);
}

main();