var apiKey = require('./../.env').apiKey;

exports.getUsernames = function(username){ //request user information
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    $('div#results').text('');
    $('div#results').append('<img src="'+response['avatar_url']+'" alt="github prof" >');
    $('div#results').append('<span class="name">'+response["name"]+'</span>');
    /* above appends user details including Full Name and Picture*/


  }).fail(function(error){ //if it fails
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username){ //request user repos

	$.get('https://api.github.com/users/'+username+'/repos?sort=created&access_token=' + apiKey).then(function(response){

		$('div#repos table tbody').text('');
		for(var i=0;i<response.length;i++){
			var created_at = moment(response[i].created_at,'h:mm a')
			$('div#repos table tbody').append(
				`<tr>
					<td><a target="_blank" href='${response[i].git_url}'>${response[i].name}</a></td>
					<td>${response[i].language}</td>
					<td>${created_at}+</td>
					<td>${response[i].updated_at}+</td>
					</tr>`);
			/*Above appends the repo details to a table with columns of Name of repo, language, date created and date updated*/
		}


		console.log(response.length);
	}).fail(function(error){
		console.log(error.responseJSON.message);
	})

}
