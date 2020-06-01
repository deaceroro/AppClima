const axios = require('axios')

const getLugarLatLon = async(lugar)=> {

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(lugar)}`,
	  headers: {'X-RapidAPI-Key': '3848db77c1msh753e628fbba051bp14403djsn0dfca0160b42'}
	})

	const resp = await instance.get()
	if(resp.data.Results.length == 0){
		throw new Error(`No hay resultados para ${lugar}.`)
	}
	const data		= resp.data.Results[0]
	const nombre	= data.name	
	const lat		= data.lat	
	const lng		= data.lon	

	return {
		nombre,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLon
}