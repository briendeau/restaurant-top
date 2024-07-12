import steakImg from "./steak.jpg";

export default function pageLoad() {
  const div = document.getElementById("content");
  div.innerHTML = "";
  // let img = document.createElement("img");

  let mySteakImg = new Image();
  mySteakImg.src = steakImg;
  mySteakImg.setAttribute("width", "400px");
  mySteakImg.setAttribute("alt", "steak-image");

  let p = document.createElement("p");

  // steakImg.src = steakImg;
  // img.src = "steak.jpg";
  // img.setAttribute("alt", "steak-house-image");

  let text = document.createTextNode("this is some text for the paragraph");

  p.appendChild(text);
  div.appendChild(mySteakImg);

  // div.appendChild(img);s
  div.appendChild(p);
}
