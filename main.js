window.onload = function(){
	alert("Page Loaded");
};
function myForm (){
	var x1=document.getElementById('text1').value;
	var x2=document.getElementById('text2').value;
	var x3=document.getElementById('text3').value;

	alert("New User: "+x1+"\n Which feature are you interested in?: "+x2+"\n Name: "+x3);
}