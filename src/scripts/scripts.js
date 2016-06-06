/*==============================================================================*\
	Scripts
\*==============================================================================*/
var pageHome;
var pageAbout;
var pageTest;

$(document).ready(function(){
	//Check which navbar link is pressed
	checkNavBar();

	$("#navbarHome").click(function(){
		pageHome = true;
		pageAbout = false;
		pageTest = false;
		checkNavBar();
	})
	$("#navbarAbout").click(function(){
		pageHome = false;
		pageAbout = true;
		pageTest = false;
		checkNavBar();
	})
	$("#navbarTest").click(function(){
		pageHome = false;
		pageAbout = false;
		pageTest = true;
		checkNavBar();
	})

})

checkNavBar = function(){
	if(pageHome){
		$("#navbarHome").addClass("active");
		console.log(pageHome);
	}
	else if(pageAbout){
		$("#navbarAbout").addClass("active");
		console.log(pageHome);
	}
	else if(pageTest){
		$("#navbarTest").addClass("active");
		console.log(pageHome);
	}
}