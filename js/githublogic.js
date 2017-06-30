var apiKey = require('./../.env').apiKey;

exports.getUsernames = function(username){
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    $('div#results').text('');
    $('div#results').append('<img src="'+response['avatar_url']+'" alt="github prof" >');
    $('div#results').append('<span class="name">'+response["name"]+'</span>');



  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username){

	$.get('https://api.github.com/users/'+username+'/repos?sort=created&access_token=' + apiKey).then(function(response){
		
		$('div#repos table tbody').text('');		
		for(var i=0;i<response.length;i++){
			$('div#repos table tbody').append(
				`<tr>
					<td><a target="_blank" href='${response[i].git_url}'>${response[i].name}</a></td>
					<td>${response[i].language}</td>
					<td>${response[i].created_at}+</td>
					<td>${response[i].updated_at}+</td>
					</tr>`);
		}
		

		console.log(response.length);
	}).fail(function(error){
		console.log(error.responseJSON.message);
	})

}