var total=0;
$(document).on("pageInit", "#index", function(e, id, page) {
	total++;
	var a=0;
	$(page).on("click","#indexBtn",function(){
		total++;
		a++;
		alert('index show '+total+",inner a="+a);
	});
	$(page).on("click","#modalLoginBtn",function(){
		$.modalLogin("测试text", "标题", function(){
			alert('OK');
		}, function(){
			alert('cancel');
		})
	});
	$(page).on("click","#rsa",function(){
		var secretKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCI2UITDhEZnwvkKuhEDgkJLQbV2PX8WGTbRnzzVqJu0jGXyEQ4l01SCeCj3WL143kHqPzZWyykAXkdyMvQjR2Om2xNCoyYmRncBAgIXWIsAKx4UyUYV3ErLx4mfUjRbKceSa58XHnHwNU7mI6EIKlO7B1KopeJ27X3BbqaWuCptwIDAQAB";
		var crypt = new JSEncrypt();
		crypt.setKey(secretKey);
		var username = crypt.encrypt("admin");
		$('#msg').val(username);
	});
	
	
});

$(document).on("pageInit", "#page1", function(e, id, page) {
	total++;
	var b=0;
	$(page).on("click","#page1Btn",function(){
		total++;
		b++;
		alert('index show '+total+",inner b="+b);
	});
});

$(document).on("pageInit", "#page2", function(e, id, page) {
	total++;
});

$(document).on("pageInit", "#page3", function(e, id, page) {
	total++;
});
$(document).on("pageInit", "#router3", function(e, id, page) {
	total++;
});
$.init();


