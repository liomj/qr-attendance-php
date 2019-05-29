$('#submit').click(function (e) {
     e.preventDefault();
	username = $("#regno").val();
	password = $("#password").val();
	if (password != "" && username !="") {
		$.post('admin/inc/process.php',{checku_login:1,username:username,password:password},function (data) {
       if (data ==='yes') {
       	location.href = "dashboard";
       }else{
       	 $("#available").html(data);
       }
    	});
	}
	
})