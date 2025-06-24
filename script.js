const numero = document.getElementById ("numero");
const tabuada = document.getElementById ("tabuada");
const tabuadaform = document.getElementById ("tabuadaform");
const resultado = document.getElementById ("resultado");

tabuadaform.addEventListener('submit', function(event){
    event.preventDefault()
    calcularTabuada(numero.value)
})
function calcularTabuada(numero){
    for(i=1;i<=10;i++){
    let conta = i * numero
    let linha = document.createElement("p")
    linha.textContent = `${numero} x ${i} = ${conta}`
    resultado.appendChild(linha)
    }
    

}