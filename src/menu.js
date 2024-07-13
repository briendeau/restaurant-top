import coltonImg from "./coltons.jpg.webp";

export default function menuPage() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = "<h1>Look at the menu</h1>";

  let coltonMenu = new Image();
  coltonMenu.src = coltonImg;
  coltonMenu.setAttribute("width", "400px");
  coltonMenu.setAttribute("alt", "menu-image");

  let p = document.createElement("p");

  let text = document.createTextNode(
    "steak house menu. Steak and Fries $10.95"
  );

  p.appendChild(text);

  container.appendChild(div);
  container.appendChild(coltonMenu);
  container.appendChild(p);
}

// Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
