let chars = [...document.querySelector('.heading').innerHTML]
let span = "";
for (let i = 0; i < chars.length; i++) {
    span += "<span>" + chars[i] + "</span>"
    document.querySelector('.heading').innerHTML = span
}





