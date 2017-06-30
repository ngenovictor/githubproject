var apiKey = require('./../.env').apiKey;

exports.getUsernames = function(username){
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response['avatar_url'])	;
    $('div#picture').text('');
    $('div#results').append(response["name"]);
    $('div#results').append('<img src="'+response['avatar_url']+'" alt="github prof" >');
    $('div#results').append(response["name"]);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username){
	$.get('https://api.github.com/users/repos/'+username+'?access_token=' + apiKey).then(function(response){
		console.log(response);
	}).fail(function(error){
		console.log(error.responseJSON.message);
	})

}

// exports.getUsernamesModule = getUsernames;