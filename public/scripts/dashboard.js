// close the modal by just clicking outside of the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');
var modal4 = document.getElementById('id04');

window.onclick = function(event) { 
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4) { 
        modal.style.display = "none";
    } 
} 