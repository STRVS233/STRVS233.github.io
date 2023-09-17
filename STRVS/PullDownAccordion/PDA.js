//by STRVS
document.addEventListener("DOMContentLoaded", function() {
  var pdaElements = document.querySelectorAll("pda");
  pdaElements.forEach(function (element) {
    var divElement = document.createElement("div");
    divElement.className = "pda";
    divElement.innerHTML = '<a class="name">' + element.getAttribute("name") + '</a><button class="accordion" onclick="otck()">' + element.getAttribute("name") + '</button><div class="panel"><p id="tx">' + element.textContent + '</p></div>';
    element.parentNode.replaceChild(divElement, element);
    const elements=document.querySelectorAll('p#tx');
      elements.forEach(element=>{
        element.innerHTML=element.innerHTML.replace(/\|/g,'<br>');
      })
  });
});
function otck(){
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    }
  }
}