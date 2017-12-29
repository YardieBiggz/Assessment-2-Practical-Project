window.onload = function() {
 // This allows the image to Change every 2.5 seconds
 // # Harvard Referencing (HR10)
 var slideIndex = 0;
 showSlides();

 function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
   slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2500);
  // This allows the image to Change every 2.5 seconds
 }
};

// Get the modal Harvard Referencing (HR2)
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
 }
 // Get all images and insert the clicked image inside the modal
 // Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
 images[i].onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.nextElementSibling.innerHTML;
 }

};

// this filter i can say gave me the most problems.
filterSelection("all")

function filterSelection(c) {
 var x, i;
 x = document.getElementsByClassName("genre");
 if (c == "all") c = "";
 for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
 }
}

function w3AddClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {
   element.className += " " + arr2[i];
  }
 }
}

function w3RemoveClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
   arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
 }
 element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
 btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
 });
}
