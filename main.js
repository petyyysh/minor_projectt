function verify() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let m = parseInt(document.getElementById("m").value);
    let k = parseInt(document.getElementById("k").value);

    let boxSizes = [a, b, c].sort((x, y) => x - y);
    let doorSizes = [m, k].sort((x, y) => x - y);

    console.log("Размеры коробки (отсортированные):", boxSizes);
    console.log("Размеры двери (отсортированные):", doorSizes);

    let result;
    let check = false;

    if (boxSizes[0] <= doorSizes[0] && boxSizes[1] <= doorSizes[1]) {
        result = "Коробка проходит в дверь, скидка 15%!";
        check = true;
    } else {
        result = "Коробка не проходит в дверь.";
    }


    const resultElement = document.getElementById("result");
    resultElement.innerText = result; 
    resultElement.style.color = check ? "green" : "red"; 


    window.taskData = {
        formulation: "Проходит ли коробка в дверь?",
        a: a,
        b: b,
        c: c,
        result: result
    };

    return check;
}

function sendData() {
   
    if (!window.taskData) {
        alert("Сначала выполните проверку, чтобы сформировать данные.");
        return;
    }

   
    const queryString = new URLSearchParams(window.taskData).toString();


    window.location.href = `https://www.bing.com/search?q=${queryString}`;
}


document.getElementById("send").addEventListener("click", verify);
document.getElementById("sendData").addEventListener("click", sendData);
