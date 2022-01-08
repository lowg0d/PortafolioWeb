ScrollReveal().reveal('.header-content', { delay: 200 });
ScrollReveal().reveal('.tittle', { delay: 200 });
ScrollReveal().reveal('.container', { delay: 400 });ç
ScrollReveal().reveal('.btn', { delay: 500 });

function copyOnClick() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("The email has been copied to your clipboard");
  }