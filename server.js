const express = require('express')
var bodyParser = require('body-parser');

const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.get("/", (request, response) => {
	console.log("Recieved: /");
	response.json({
		"status": 200
	})
})

app.post("/api/players", (request, response) => {
	console.log("Recieved: /api/players");
	const responseData = {
		"addedBalance": 1,
		"players": [
			{
				"steamId": "76561198200724631",
				"balance": 53
			},
			{
				"steamId": "76561198077282054",
				"balance": 54
			},
			{
				"steamId": "765611982007246344",
				"balance": 55
			},
			{
				"steamId": "765611980772820531",
				"balance": 56
			}
		]
	}
	response.json(responseData)
})

app.listen(port, '0.0.0.0', function () {
    console.log('API app started working on 172.0.0.1:8080')
})