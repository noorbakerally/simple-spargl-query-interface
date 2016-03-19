function generate(){
	query_text = $("#query").val();
	$("#results").hide();
	$("#loading").show();
	$.ajax({
	  method: "POST",
	  url: "http://127.0.0.1:5000/generate",
	  data: { query: query_text}
	})
	  .done(function( msg ) {
	  	$("#results").show();
	  	$("#result").val(msg);
	  	$("#loading").hide();
	});
}

function reset(){
	$("#query").val("");
}