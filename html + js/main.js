function compare(numA, numB) {
    let resultado
    if (numA < numB){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}

form.addEventlistener('submit', function (e) {
    e.preventDefault();

    const numA = document.getElementById('numA')
    const numB = document.getElementById('numB')

    if(compare(numA.value, numB.value)){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = 'O numero é valido!';
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = 'O numero não é valido!'
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
})