const inp = document.querySelector("input");
inp.addEventListener("click", () => {
    const header = document.getElementsByTagName("h2").item(0);
    header.firstChild.data = "A dynamic document";

    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the first paragraph";

    const newText = document.createTextNode("This is the second paragraph.");
    const newElement = document.createElement("p");
    newElement.appendChild(newText);
    para.parentNode.appendChild(newElement);
});


// event captures, propagation and bubbling
const divs = document.querySelectorAll("div");

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener("click", logText, {
    capture: false
}));


