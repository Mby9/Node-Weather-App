const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8c262d1bdbaed79e9900e31885a12e7c/' + latitude + ',' + longitude + '?unit=si'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary 
                + ' It is currently ' + body.currently.temperature 
                + ' degress out. There is a ' + body.currently.precipProbability 
                + '% chance of rain. \n'
                + 'Temperature maximum is: ' + body.daily.data[0].temperatureHigh + " degrees Celcius.\n"
                + 'Temperature minimum is: ' + body.daily.data[0].temperatureLow + " degrees Celcius.")
        }
    })
}

module.exports = forecast 