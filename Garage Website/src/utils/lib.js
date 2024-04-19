import { html,render as renderer } from "../../node_modules/lit-html/lit-html.js";

let main = document.querySelector('main');

function render(view){
    renderer(view,main);
}

export { html, render };