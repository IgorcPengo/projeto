function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const image = document.querySelector("#profile img")
  //sbst a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, img light
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não tiver light mode, img normal
    image.setAttribute("src", "./assets/avatar.png")
  }
}
