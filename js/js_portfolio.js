// JavaScript Document
$(document).ready(function() {
    $(".pic1").mouseover(function(){
		$(".pic1 span").css("opacity", "1");
		});
	$(".pic1").mouseout(function(){
		$(".pic1 span").css("opacity", "0");
		});
		
    $(".pic2").mouseover(function(){
		$(".pic2 span").css("opacity", "1");
		});
	$(".pic2").mouseout(function(){
		$(".pic2 span").css("opacity", "0");
		});		

    $(".pic3").mouseover(function(){
		$(".pic3 span").css("opacity", "1");
		});
	$(".pic3").mouseout(function(){
		$(".pic3 span").css("opacity", "0");
		});
	
	
	$("#addProject").click(function(event){
		event.preventDefault();
		$("#overlay").fadeIn(400,
			function(){
				$("#modalWindow").css("display", "block").animate({opacity: 1, top: "50%"}, 200);
			});
		});
	$("#modalClose, #overlay").click(function(){
		$("#modalWindow").animate({opacity: 0, top: "45%"}, 200,
			function(){
				$(this).css("display","none");
				$("#overlay").fadeOut(400);
			});
		});

	$(".file_input").change('document.getElementById("fileName").value=this.value;');

});

