// Add your code here

$(document).ready(function(){
	var animals = [];
 
	$.getJSON( "https://mks-frontend-gallery.herokuapp.com/", function( json ) {
	  for (var i in json) {
	  	$(".gallery").append("<div class='large-4 small-6 columns " + json[i].animals.join(" ") + "'><img src=" + json[i].url + "></div>");
	  }
	  var ids = [];
	  $.each( json, function ( key, val ) {
	    
	    for (var x = 0; x < val.animals.length; x++) {
	    	ids.push(
	    		val.animals[x]
	    	);
	    }
 
	    $.unique(ids);
	  });
	  for (i in ids) {
	  	$(".filters").append("<div class='filter-button individual button active' id='" + ids[i] + "'>" + ids[i]+ "</div>");
	  }
	  console.log(ids);
	}).done(function(){
		console.log("done")
		$('.filter-button').click(function(){
			$(this).toggleClass("active");
			$("." + this.id).fadeToggle(1000, "swing", function(){console.log("fade is done")});
		});
	}).fail(function(){
		console.log("fail")
	});
 
	
});








//Placing at the bottom, adding the rest of the JS at top

//$.getJSON( "http://mks-frontend-gallery.herokuapp.com/", function( json ) {
//    console.log(json);
//});



