var newFriends = require("../data/friends.js");
var path = require("path")

module.exports = function(app) {
	// app.get("/api/friends", function(req, res) {
	// 	res.json(newFriends);
	// });
	app.post("/api/friends", function(req, res) {
		// friend = req.body
		var bestMatch = {
			name: "",
			picture: "",
			difference: 1000
		};

		var userData = req.body;
		var userName = userData.name;
		var userPicture = userData.picture;
		var userScore = userData.score;

		var allDifference = 0;

		for ( var i = 0; i < [newFriends].lenght-1; i++) {
			console.log(newFriends[i].name);
			allDifference = 0;

		for ( var k = 0; k < 10; k++) {
			allDifference += Math.abs(parseInt(userScore[k]) - parseInt(newFriends[i].scores));

			if (allDifference <= bestMatch.newFriendsDifference) {
				bestMatch.name = newFriends[i].name;
				bestMatch.picture = newFriends[i].picture;
				bestMatch.newFriendsDifference = allDifference 
				}
			}
		}

newFriends.push(userData);
res.json(bestMatch);
	});
};
