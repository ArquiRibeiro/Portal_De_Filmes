//SLIDESHOW
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  let dots = document.getElementsByClassName("demo");
  for(let i = 0; i < dots.length; i++){
    dots[i].classList.remove("selectedDot");
  }
  showDivs(n);
}

function showDivs(n) {
  slideIndex = n
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].classList.add("selectedDot");
}

//SIDEBAR
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

/*function sortTable() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "block";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}*/

function sortTable(){
  let elements = document.querySelectorAll("#catalogo img");
  let input = document.getElementById("catalogoSearch").value;
  let empty = document.getElementById("empty");
  let hiddenElements = 0;

  for(let i = 0; i < elements.length; i++){
    if(elements[i].id.toUpperCase().includes(input.toUpperCase()) == false){
      elements[i].classList.add("hide");
      hiddenElements++;
      console.log("hideeee");
    }
    else{
      console.log("shooowww");
      elements[i].classList.remove("hide");
    }

    if(hiddenElements == elements.length){
      empty.classList.remove("hide");
    }
    else{
      empty.classList.add("hide");
    }
  }
}

function sortByCategory(sort){
  let sorterElements = document.querySelectorAll("#catalogo img");
  for(let i = 0; i < sorterElements.length; i++){
    let element = sorterElements[i];

    if(sort != ''){
      if(element.classList.contains(sort)){
        element.classList.remove("hide")
      }
      else{
        element.classList.add("hide");
      }
    }

    else{
      element.classList.remove("hide");
    }    
  }
}