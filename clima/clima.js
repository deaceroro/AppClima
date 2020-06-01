const axios = require('axios')
const lugar = require('../lugar/lugar')


const getClima = async(nombre) =>{

	let arrlugar = await lugar.getLugarLatLon(nombre)
  	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${arrlugar.lat}&lon=${arrlugar.lng}&appid=0663cd8c15d35781d9750940b0f26071&units=metric`)
	 return resp.data.main.temp
}

module.exports = {
	getClima	
}