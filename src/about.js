export default function aboutPage() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = "<h1>welcome to the about</h1>";
  container.appendChild(div);
}
