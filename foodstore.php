<?php
header('Content_Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo "<response>";

	$food = $_GET["food"];
	$foodArray = array('tuna','bacon','beef','loaf','ugali','kuku','yorguht');
	if(in_array($food, $foodArray))
		echo "Awesome Choice, we do have ".$food. "!";
	elseif ($food=="") 
		echo "Enter a food you IDIOT!!"
	else
		echo "Sorry Punk, we don't sell no " .$food. "!";

echo "<response>";


?>



<!-- we need a php file to generate an xml file and then send the file to the clients computer -->