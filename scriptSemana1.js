function exercicio1() {
    var dado = prompt("Digite um dado:");
    if (dado !== null) {
        var tipoDado = typeof dado;
        var verificarTipo = confirm("Deseja verificar o tipo de dado informado?");
        if (verificarTipo) {
            document.body.innerHTML = "O tipo de dado digitado é: " + tipoDado;
        } else {
            document.body.innerHTML = "Obrigado por visitar esta página";
        }
    }
}
function exercicio2() {
    var numero = parseInt(prompt("Digite um número inteiro positivo maior que um:"));
    if (!isNaN(numero) && numero > 1) {
        var primo = true;
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            alert(numero + " é um número primo.");
        } else {
            alert(numero + " não é um número primo.");
        }
    } else {
        alert("💀ERROR 2! Por favor, digite um número inteiro positivo maior que 1.");
    }
}
function exercicio3() {
    var numero = parseInt(prompt("Digite um número inteiro positivo:"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert(numero + " é um número par.");
        } else {
            alert(numero + " é um número ímpar.");
        }
    } else {
        alert("💀ERROR 3! Por favor, digite um número inteiro positivo.");
    }
}
function exercicio4() {
    var numero = parseInt(prompt("Digite um número inteiro positivo:"));
    if (!isNaN(numero) && numero >= 0) {
        var fatorial = 1;
        for (var i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        alert("O fatorial de " + numero + " é " + fatorial + ".");
    } else {
        alert("💀ERROR 4! Por favor, digite um número inteiro positivo.");
    }
}
