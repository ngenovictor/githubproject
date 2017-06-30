(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "34ddff6ac12d8d8564922e3fd8d60ef96e82f040";
},{}],2:[function(require,module,exports){
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
},{"./../.env":1}],3:[function(require,module,exports){
var getUsernames = require('./../js/githublogic.js').getUsernames;
var getRepos = require('./../js/githublogic.js').getRepos;

$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var inputtedUsername = $('#git_username').val()
		getUsernames(inputtedUsername);

	});
});
},{"./../js/githublogic.js":2}]},{},[3]);
