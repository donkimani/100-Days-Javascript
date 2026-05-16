// const heading = document.createElement("h1");
// const headingText = document.createTextNode("Our Blog");
// heading.appendChild(headingText);
// document.body.appendChild(heading);

const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
    story.textContent = "RUTO MUST GOOOOO!!!"
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
})

// adding and removing a child
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    if(parent.childNodes.length > 1) {
        return;
    }
    const child = document.createElement("div");
    child.classList.add("child");
    child.textContent = "child";
    parent.appendChild(child);
})

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
    const child = document.body.querySelector(".child");
    parent.removeChild(child);
})

// modifying header and paragraph
document.querySelector("input").addEventListener("click", () => {
    // document.getElementsByTagName("h2")
    // elements in the document, and the first number is 0
    const header = document.getElementsByTagName("h2").item(0);
    header.firstChild.data = "Kimani Roy";
})