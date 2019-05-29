$(document).ready(function () {
	$("#generate").click(function (e) {
		e.preventDefault();
		if($("#viewer"))
		var time = new Date();
		var course = $("#course").val();
		var random = $("#random").val();
		if ((course == "") || (random == "")) {
			$("#checker").text("Error!");
			$("#viewer").text("Both fields must be filled");
		}else{
			// $("#checker").text("Generated QR Code");
			concatenated_code = random+ " " + course + " " + time;
			$.post('inc/process.php',{qrcode:concatenated_code,course:course,post_qr:1},function (data) {
				if (data === "okay!") {
					$("#viewer").qrcode({
					text: random+ " " + course + " " + time,
					width:320,
					height:320,
					});
				}else{
					$("#viewer").qrcode({
					text: data,
					width:320,
					height:320,
					});
				}
		   });

		}
 		$(".modal").modal();
		
	});
	$(".modal-close").click(function() {
		$("#viewer").html("");
	});

	
})