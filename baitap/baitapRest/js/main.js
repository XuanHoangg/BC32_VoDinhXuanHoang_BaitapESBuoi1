function dom(element) {
    return document.querySelector(element);
}
const totalScore = (...numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / (numbers.length)
}



dom("#btnKhoi1").onclick = function () {
    let math = +dom('#inpToan').value;
    let physics = +dom('#inpLy').value;
    let chemistry = +dom('#inpHoa').value;
    let score = totalScore(math, physics, chemistry)
    dom("#tbKhoi1").innerHTML = score;
}

dom("#btnKhoi2").onclick = function () {
    let literature = +dom('#inpVan').value;
    let history = +dom('#inpSu').value;
    let geography = +dom('#inpDia').value;
    let english = +dom('#inpEnglish').value;
    let score = totalScore(literature, history, geography, english)
    dom("#tbKhoi2").innerHTML = score;
}
