$(document).ready(function(){

	$(function(){
		$('#search-term').click(function(even){
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
		})

		function getRequest(searchTerm){
		      var params = {
        part: 'snippet',
        key: 'AIzaSyCbAkY_3yhzb_EFgsu8mGqTSqaJCkbYfVY',
        q: searchTerm,
        maxResults: 12,
        type: 'video'
    	};

    	url = 'https://www.googleapis.com/youtube/v3/search';

		  $.getJSON(url, params, function(data){
		    showResults(data.items);
		  });
		}
	  });

	function showResults(results){
		var html="";
		$.each(results, function(index,value){
			html += '<p>'+ value.snippet.title + '</p>';
			html += '<img src="'+value.snippet.thumbnails.default.url+'">';
			console.log(value.snippet.title);
	});
		$('#search-results').html(html);
	}	
});
