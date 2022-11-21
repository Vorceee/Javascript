const options = [
  { language: "js", about: "js is fun" },
  { language: "php", about: "php is not fun is fun" },
  { language: "java", about: "java is awesome" },
];

for (let i = 0; i < options.length; i++) {
  const para = document.createElement("option");
  const node = document.createTextNode(options[i].language);
  para.appendChild(node);
  const element = document.getElementById("select");
  element.appendChild(para);
}
document.querySelector("#select").addEventListener("change", () => {
  const selection = document.querySelector("#select").value;

  let out = "";

  for (let i = 0; i < options.length; i++) {
    if (selection == options[i].language) {
      out = options[i].about;
    }
  }
  document.querySelector("#output").innerHTML = out;
});
