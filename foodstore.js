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

	if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
		//our object is ready to communicate with the server
		food = encodeURIComponent(document.getElementByid("userInput").value); //whatever the user typed in the box
		
	}else{

	}
}