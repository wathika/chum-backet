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