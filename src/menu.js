export default function menuPage() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = "<h1>welcome to the menu</h1>";
  container.appendChild(div);
}

// Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
