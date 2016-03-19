function generate(){
	query_text = $("#query").val();
	$.ajax({
	  method: "POST",
	  url: "http://127.0.0.1:5000/generate",
	  data: { query: query_text}
	})
	  .done(function( msg ) {
	  	$("#result").val(msg);
	});


}

function reset(){
	$("#query").val("");
}