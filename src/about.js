import aboutImg from "./aboutImg.jpg";

export default function aboutPage() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = "<h1>About us</h1>";

  let aboutUsImg = new Image();
  aboutUsImg.src = aboutImg;
  aboutUsImg.setAttribute("width", "400px");
  aboutUsImg.setAttribute("alt", "about-image");

  let p = document.createElement("p");

  let text = document.createTextNode(
    "We live to serve you good food with a friendly staff 24/7."
  );

  p.appendChild(text);

  container.appendChild(div);
  container.appendChild(aboutUsImg);
  container.appendChild(p);
}
