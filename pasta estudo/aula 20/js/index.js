function myForm() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const people = [];
    function receiveInformation(event) {
        event.preventDefault();
        const nome = form.querySelector('.nome').value
        const sobrenome = form.querySelector('.sobrenome').value
        const peso = form.querySelector('.peso').value
        const altura = form.querySelector('.altura').value

        const tes = { nome, sobrenome, peso, altura };

        people.push(tes);

        console.log(people)

        result.innerHTML += `<p>Seu nome é ${nome} ${sobrenome}, seu Peso é ${peso} e sua Altura é ${altura}</p>`
    }
    form.addEventListener('submit', receiveInformation);

    // form.onsubmit = function (event) {
    //     event.preventDefault();
    // };
}
myForm()