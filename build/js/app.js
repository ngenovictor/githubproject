(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "ff6d958d0152c95d8c7fd4b5bdff23e42addab75";
},{}],2:[function(require,module,exports){
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
},{"./../.env":1}],3:[function(require,module,exports){
var getUsernames = require('./../js/githublogic.js').getUsernames;
var getRepos = require('./../js/githublogic.js').getRepos;

$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var inputtedUsername = $('#git_username').val()
		getUsernames(inputtedUsername);
		getRepos(inputtedUsername);

	});
});
},{"./../js/githublogic.js":2}]},{},[3]);
