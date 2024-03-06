function exercicio1(){
    let meses = ['janeiro','fevereiro','abril','março','maio','junho','agosto','setembro','outubro','novembro','dezembro'];
    let dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    let dateF = new Date();
    let dayS = dias[dateF.getDay()];
    let day = dateF.getDate();
    let month = meses[dateF.getMonth()];
    let year = dateF.getFullYear();
    alert(dayS+", "+day+" de "+month+" de "+year);
} 
function exercicio2(){
    alert(setTimeout())
}
function exercicio3(){

}