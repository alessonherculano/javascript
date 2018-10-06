let btnMais = document.querySelector('.js-clickMais');
let btnMenos = document.querySelector('.js-clickMenos');
let txtValor = document.querySelector('.js-valor');
let valInput = document.querySelector('.js-input');

let count = 0;
txtValor.innerHTML = count;

btnMais.addEventListener('click', () => {
    count += 1;
    txtValor.innerHTML = count;
    //A linha abaixo retorna valor no console 
   //console.log(count);
})

btnMenos.addEventListener('click', () => {
    count -= 1;

    if(count < 0 ){
        count = 0
        alert('Valor não pode ser negativo');
    }

    txtValor.innerHTML = count;
   //A linha abaixo retorna valor no console 
   //console.log(count);
})

console.info(valInput.value);