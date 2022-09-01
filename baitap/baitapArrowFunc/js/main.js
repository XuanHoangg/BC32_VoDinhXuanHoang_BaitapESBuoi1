//array màu
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"]
//Hiển thị màu trên giao diện
const loadColor = () => {
    for (let i = 0; i < colorList.length; i++) {
        if (i === 0) {
            document.getElementById("colorContainer").innerHTML +=
                `
            <button class="color-button ${colorList[i]} active"></button>
        `
        }
        else {
            document.getElementById("colorContainer").innerHTML +=
                `
            <button class="color-button ${colorList[i]}"></button>
        `
        }
    }
}
loadColor()
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
//click đổi màu
document.getElementById("colorContainer").addEventListener("click", function () {
    for (let i = 0; i < document.getElementById("colorContainer").children.length; i++) {
        document.getElementById('colorContainer').children[i].onclick = function () {
            document.getElementById("house").className = `house ${colorList[i]}`
        };
    }
})
