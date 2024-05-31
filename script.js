const containerLista = document.querySelector('.container-lista');
const createEl = document.querySelector('#item-submit');
// const productName = document.querySelector('#item-name');
// const produto = productName.value;


// function newEl() {
//     const productName = document.querySelector('#item-name');
//     const produto = productName.value;

//     if(productName.value != '') {
        

//         let novoEl = document.createElement('div');
//         novoEl.className = 'div-item';
//         novoEl.innerHTML = `<span class="product-name">${productName}</span>
//         <div class="product-icons">
//             <i class="bi bi-box-arrow-up-right"></i>
//             <i class="bi bi-trash" id="trash"></i>
//         </div>`;
//         containerLista.appendChild(novoEl);

//         productName.value = '';
//     } else {
//         alert('Digite algo no campo!!!');
//     }
// }


//Evento de criar items
createEl.addEventListener('click', () => {
    const productName = document.querySelector('#item-name');
    const produto = productName.value;

    if(productName.value != '') {
        

        let novoEl = document.createElement('div');
        novoEl.className = 'div-item';
        novoEl.innerHTML = `<span class="product-name">${produto}</span>
        <div class="product-icons">
            <i class="bi bi-box-arrow-up-right finalizado" id="finalizado"></i>
            <i class="bi bi-trash trash" id="trash"></i>
        </div>`;
        containerLista.appendChild(novoEl);

        productName.value = '';
    } else {
        alert('Digite algo no campo!!!');
    }
});


//Evento de exclusão de items
document.addEventListener('click', (event) => {
    let atual = event.target;
    let idTrash = "trash";
    if(atual.id === idTrash){
        let productName = document.querySelector('.product-name');
        let divPai = productName.parentElement;
            divPai.remove();
         }
     }
);

//evento de finalizar o item
document.addEventListener('click', (event) => {
    let atual = event.target;
    let idFinalizado = 'finalizado';
    if(atual.id === idFinalizado) {
        let paiEl = atual.parentElement;
        let rightEl = paiEl.previousElementSibling;

        rightEl.classList.toggle('finished');
    }
})

//Evento de limpar completamente a lista
const btnLimpar = document.querySelector('#btn-limpar');

document.addEventListener('click', (event) => {
    let atual = event.target;
    if(atual.id === 'btn-limpar'){
        confirm('Deseja apagar a lista?')
        if(confirm = true) {
            // let divs = document.querySelectorAll('.div-item');
            // let divsPai = document.querySelector('.container-lista');
            // let filhos = divsPai.removeChild(divs);
            // console.log(filhos);

            let filhos2 = document.querySelectorAll('.div-item');
            filhos2.forEach((node) => {
                node.parentNode.removeChild(node);
            })
            location.reload();
            }
        }
    }

)
