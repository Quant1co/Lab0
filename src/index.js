const targetFunction = (x) => {
    return Math.pow(x, 2) - x + 1;
};

function integrate(func, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        const x = a + i * dx;
        sum += func(x);
    }

    return sum * dx;
}

function run() {
    const inputA = prompt("Введите нижний предел интегрирования (a):", "0");
    if (inputA === null) return;

    const inputB = prompt("Введите верхний предел интегрирования (b):", "2");
    if (inputB === null) return;

    const a = parseFloat(inputA.replace(',', '.'));
    const b = parseFloat(inputB.replace(',', '.'));

    if (isNaN(a) || isNaN(b)) {
        alert("Ошибка: пределы интегрирования должны быть числами!");
        return;
    }

    const n = 100000;
    const result = integrate(targetFunction, a, b, n);

    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");

    resultText.innerHTML = `
        Интервал [a, b]: [${a}, ${b}]<br>
        Разбиение (N): ${n}<br>
        Интеграл ≈ <b>${result.toFixed(6)}</b>
    `;
    resultBox.style.display = "block";
    
    console.log(`Интеграл на [${a}, ${b}] с шагом N=${n} равен: ${result}`);
}