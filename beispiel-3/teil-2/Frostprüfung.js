var temp = msg.payload;
//Frost?
if(temp < 0)
{
	//Nachricht zusammenbauen und zurückgeben
	msg.payload = temp + " Grad. Achtung, Frostgefahr! Bitte Auto in die Garage fahren!";
	return msg;
}
else
{
	// nichts tun
}


