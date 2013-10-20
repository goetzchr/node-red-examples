// OpenWeatherMap JSON Antwort parsen
var weather=JSON.parse(msg.payload);
// Neue Nachricht mit Payload erstellen
var newMsg = { payload: "Die aktuelle Temperatur in München ist "+weather.main.temp + " Grad." };
// zurückgeben der Nachricht
return newMsg;
