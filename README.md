# RF_SimpleTestingRestApi

This is a simple api for testing other mods. 


### Install Dependecies
```
npm install
```

### Start
```
node server.js
```


### Development mode
```
npm install -g nodemon
nodemon server.js
```


### Already created routes

#### Route '/'
##### Response
```json
{
	"status": 200
}
```

#### Route '/api/players'
##### Response
```json
{
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
```