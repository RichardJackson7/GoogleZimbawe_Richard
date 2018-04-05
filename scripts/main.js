let afficherElement = document.getElementById('afficher_element');
let corpsPage = document.getElementById('corps_page');

afficherElement.onclick = function () {
	

	if (corpsPage.style.display = "none") 
	{
		afficherElement.style.display = "none";
		corpsPage.style.display = "block";

	} else {

        corpsPage.style.display = "none";
    }

}

let maPageWeb = document.querySelector('html')

maPageWeb.onclick = function () {
   setTimeout(function(){alert("Hello"); }, 10000);
}