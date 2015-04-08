$(document).ready(function(){

	$(function(){
		$('#search-term').submit(function(even){
			event.preventDefault();
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
		})

		function getRequest(searchTerm){
		  var params = {
		    s: searchTerm,
		    r: 'json'
		  };
		  url = 'http://www.youtube.com';

		  $.getJSON(url, params, function(data){
		  	result = JSON.parsel(result);
		    showResults(data.Search);
		  });
		}

		$.getJSON('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCbAkY_3yhzb_EFgsu8mGqTSqaJCkbYfVY&part=snippet,contentDetails,statistics,status', function(data){
	    myData = data.Search;
	    console.log(data);
	    $.each(myData), function(index,value){
	    	console.log(value.Title);
	    }
	  })
	});

	function showResults(results){
		var html="";
		$.each(results, function(index,value){
			html += '<p>'+ value.Title + '</p>';
			console.log(value.Title);
	});
		$('#search-results').html(html);
	}	
});

