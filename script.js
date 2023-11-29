const link = document.querySelectorAll("nav a");

link.forEach(function ativarlink(link) {
  const teste = link.href;
  const url = document.location.href;
  if (teste === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
});
