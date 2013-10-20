// OpenWeatherMap JSON Antwort parsen
var weather=JSON.parse(msg.payload);
// Neue Nachricht mit Payload erstellen
var newMsg = { payload: weather.main.temp };
// zurückgeben der Nachricht
return newMsg;
