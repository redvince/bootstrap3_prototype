$(function () {
	/*Loads top Nav to avoid re-using code*/
	$("#includeNavTop").load("navTop.html"); 
	/*Loads log out Modal to avoid re-using code*/
	$("#includeModal").load("logoutModal.html"); 
	/*Loads bottom Nav to avoid re-using code*/
	$("#includeNavBottom").load("NavBottom.html"); 
	/*Adds classes to the button control
	(not used in the end)*/
	$(".helpButtonControl").addClass("col-xs-4 text-center smallText"); 
	/*Re-directs when log in is clicked*/
	$("#login").click(function(e){
		e.preventDefault();
		document.location.href="justU.html";

	});
	/*Used to slide in the alert section*/
	$("#alertUser").click(function(e){
		e.preventDefault();
		$("#alertSuccess").slideDown();
	});
	/*Need to enable popover before using*/
	$(".helpTool").popover();
});
