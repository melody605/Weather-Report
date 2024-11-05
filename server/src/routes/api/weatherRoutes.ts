import { Router } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history


  const cityName = req.body.city
  const data = await WeatherService.getWeatherForCity(cityName)


  res.json(data)
});

// TODO: GET search history
router.get('/history', async () => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async () => {});

export default router;
