var element_wanted = null;

function loadDoc() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		if element_wanted != null {
			element_wanted = this.responseText
		}
	}
	xhttp.open("GET", "https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_xmlhttp/ajax_info.txt");
	xhttp.send();
}

function loadElement(id) {
	element_wanted = document.getElementById(id).innerHTML
}