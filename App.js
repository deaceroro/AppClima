'use strict'

const clima = require("./clima/clima")
const argv = require('yargs').option({
	direccion: {
		alias: 'd',
		desc: 'Dirección de la ciudad',
		demand:true
	}
}).argv



clima.getClima(argv.d)
	 .then((clima) => console.log(`La temperatura de ${argv.d} es de ${clima}°`))
	 .catch((err) => console.log(err.message))


