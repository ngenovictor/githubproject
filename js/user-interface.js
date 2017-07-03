var getUsernames = require('./../js/githublogic.js').getUsernames;//import getUserName
var getRepos = require('./../js/githublogic.js').getRepos;//

$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var inputtedUsername = $('#git_username').val()
		getUsernames(inputtedUsername);//get userdetails
		getRepos(inputtedUsername);//get user repos

	});
});
