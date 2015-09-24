var xmlHttp = createXmlHttpRequestObject();    //this object allows communication with the server without reloading the page

function createXmlHttpRequestObject() {
	var xmlHttp;

//if running internet explorer
	if (window.activeXObject) {
		try{
			xmlHttp = new activeXObject("Microsoft.XMLHTTP");
		}catch(e) {
			xmlHttp = false;
		}
	}else{
		try{
			xmlHttp = new XMLHttpRequest();
		}catch(e) {
			xmlHttp = false;
		}
	}
	if(!xmlHttp)
		alert("can't create that object bro");
	else
		return xmlHttp;
}


//this process function is going to be responsible for taking an object and sending the request to the server 
function process(){
//is the object ready??
	if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
		//our object is ready to communicate with the server
		food = encodeURIComponent(document.getElementByid("userInput").value); //whatever the user typed in the box
		xmlHttp.open("GET", "foodstore.php?food=" + food, true);   //my request
		xmlHttp.onreadystatechange = handleServerResponse;   //call the function handleServerResponse whenever the server responds
		xmlHttp.send(null);    //sending the request

	}else{
		setTimeout("process()", 1000);    //
	}
}



//whenever we receive a response from the server, what do we wanna do??
function handleServerResponse() {
	//sends an xml file
	if (xmlHttp.readyState == 4) {
		//if done communicating
		if (xmlHttp.status == 200) {
			//if session went ok
			xmlResponse = xmlHttp.responseXML;   //pulling the xml
			xmlDocumentELement = xmlResponse.documentELement;
			message = xmlDocumentELement.firstChild.data;
			document.getElementByid
		}
	}
}