const inputUpload = document.getElementById('foto')

inputUpload.addEventListener('change', function(event) {  

    const arquivo = event.target.files[0]

    if (arquivo) {
        const nomeDaImagem = arquivo.name
        console.log(nomeDaImagem)
    } else {
        console.log("Nenhum arquivo selecionado.");
    }
});

const nome = document.getElementById("nome")

const button = document.getElementById("btn")

button.addEventListener("click", () => { 
    console.log(nome.value)
})