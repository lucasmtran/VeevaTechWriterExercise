# VeevaTechWriterExercise
Notes:
For the purposes of this exercise, Google Chrome version 76.0.3809.132 was used as the web browser.
Sublime text version 3.2.1 build 3207 was used as the text editor.
Exercise was performed on 9/9/2019, beginning at 1330 hours.

Steps:
Open the candidate exercise on github.com. 
If you do not already have an account, create one. Otherwise, login to your account.
Download the candidate exercise files from github.com. 
The download button is in a green text box on the right-side of the screen.

Extract the files from the .zip file.
Check to make sure you have the required files:
Index.html
Jellyfish.jpg
Main.js
Readme.md
Styles.css
The above files, except from jellyfish.jpg (which should be in the resources folder), should be in the same folder as index.html
Open index.html with the text editor of your choice.
In the <head> section, enter <link rel="stylesheet" href="styles.css"> to link the included CSS file.
Under the same <head> section, enter <script src=”main.js”></script>
There is an error referencing the included jellyfish image. By default, it references a PNG image instead of the included JPG image. Under the <div> section referencing the banner, change the <img> tag to read: <img src="Resources/jellyfish.jpg"> instead of <img src="Resources/jellyfish.png">.
There is an <a> tag without a link below the banner image tag. Enter “https://www.veeva.com” in between the quotation marks after “href=”.
Open styles.css. 
Go to the bottom of the document and create a new class called “row” by entering the following:
.row {
	display: flex;
}
Create another class called “column” by entering the following:
.column {
	flex: 50%;
	border: 5px solid lightgray;
}
Save styles.css
Go back to index.html. In the <div> tag containing the body lorem ipsum text, reference the row class you just created.
Change the <div> tag to read <div class=”row”>
There are 8 paragraphs of text. Separate them equally into two <div> sections containing 4 paragraphs each.
In these new sections, add the column class to the <div> tag so they both read <div class=”column”>
Create an html form after the banner section. Locate the end of the <div> section containing the banner image and link from earlier and make a new line.
Create a new section with <form></form>
Inside this section, create the following inputs:
New user?:<br>
<input type=”checkbox” name=”new user”><br>
Which feature are you interested in?:<br>
<input list=”features”>
	<datalist id=”features”>
		<option value=”Inventory Monitoring”>
		<option value=”Order Management”>
		<option value=”MyInsights”>
	</datalist>
Name: <br>
<input type=”text” name=”name”><br>
<input type=”submit” value=”Submit”>
Save index.html
Go back to styles.css
Go to the “header-bar” class
Make the position static by changing the following position element inside the class to:
“Position:fixed;”
To keep the header bar at the forefront, add the following line:
“z-index: 1;”
Under the “.btn:link,.btn visited” class change the “background-color” element to read: “background-color: orange;”
Make a new line under the “.btn:link,.btn visited” class
Create a new class called “.btn:hover”
Inside that class, enter the following elements:
“background-color: blue;”
“color: white;”
Make a new line under the “banner” class
Create a new class called “.banner img”
Inside that class, enter the following:
“width: 100%;”
Under the “.header-bar p” class, remove the display line.
Create a new class under “.header-bar” called “.header-bar h1”
Add the element: “text-align: left;”
Under the “.centered” class, add the following element: “text-align: center;”
Create a class below “column” called “.column p” and enter the following element:
font-family: ‘Roboto’;
Go back to the <head> section of index.html and add the following line:
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
Create the following classes for the right column by entering the following:
.column-right {
	flex: 50%;
	border: 5px solid lightgray;
}
.column-right:hover {
	background-color:gray;
}
.column-right a,p {
	text-decoration: none;
	font-family: ‘Roboto’;
}
In index.html, go to the <div> containing the right column (the 2nd <div> containing the column class) and modify it to:
<div class="column-right"><a href="https://www.veeva.com">
Close the link tag by add </a> before the closing </div> tag.
Add styling for the form by doing the following:
In styles.css, add the following class:
.form {
  text-align: center;
  background-color: gray;
  width: 250px;
  margin: 0 auto;
  border-radius: 25px;
}
In index.html, navigate to the <form> tag and add “class=form” to the tag.
Modify the submit element to the following:
<input type="submit" value="Submit" style="width:200px">
Open main.js and modify the text to read:
	window.onload = function(){
		alert("Page Loaded");
	};
Add an alert for form submissions by adding the following line to main.js:
function myForm (){
	var x1=document.getElementById('text1').value;
	var x2=document.getElementById('text2').value;
	var x3=document.getElementById('text3').value;

	alert("New User: "+x1+"\n Which feature are you interested in?: "+x2+"\n Name: "+x3);
}

Go back to index.html and modify the <input> tags to the following:
	<input type="checkbox" name="new user" id="text1">
	<input list="features" id="text2">
	<input type="text" name="name" id="text3">

Save index.html, main.js, and styles.css
