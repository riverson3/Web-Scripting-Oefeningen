let sensorJson = '{"temperatuur": 22.5, "luchtvochtigheid": 45, "tijdstip": "2024-09-05T14:30:00Z"}';
let sensor = JSON.parse(sensorJson);

let date = new Date(sensor.tijdstip)

console.log("De temperatuur is " + sensor.temperatuur + ", de luschtvochtigheid is " + sensor.luchtvochtigheid + "%, en de meting is gedaan op " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " om " + date.getHours() + ":" + date.getMinutes());