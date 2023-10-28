function noscroll() {
  window.scrollTo(0, 0);
}

function fechar_menu() {
  body = document.querySelector("body");
  bg = document.querySelector(".bg");
  img = document.querySelector("#arte_ini-mobile");
  menu = document.querySelector(".menu_lateral");
  menu.style.display = "none";
  bg.style.filter = "";
  img.style.filter = "";
  window.removeEventListener("scroll", noscroll);
}
function abrir_menu() {
  body = document.querySelector("body");
  bg = document.querySelector(".bg");
  img = document.querySelector("#arte_ini-mobile");
  menu = document.querySelector(".menu_lateral");
  menu.style.display = "block";
  bg.style.filter = "blur(2px)";
  img.style.filter = "blur(2px)";
  window.addEventListener("scroll", noscroll);
}

// Get the button:


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var btnTopo = document.getElementById("btn-topo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.transform = "scale(1)";
  } else {
    btnTopo.style.transform = "scale(0)";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//formulario

function validar() {
  if (document.contato.nome.value == "") {
    window.alert("O campo nome deve ser preenchido!");
    document.cadastro.nome.focus();
    return false;
  }
  if (document.contato.email.value == "") {
    window.alert("O campo email deve ser preenchido!");
    document.contato.email.focus();
    return false;
  }
  if (document.contato.mensagem.value == "") {
    window.alert("O campo mensagem deve ser preenchido!");
    document.contato.mensagem.focus();
    return false;
  }
}