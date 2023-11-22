
let listaDeFilmes = [];
let listaDeNomes = [];
let listaDeTrailers = [];

    

function adicionarFilme() {
  let tituloFilme = document.getElementById('titulo').value;
  let filmeFavorito = document.getElementById('filme').value;
  let trailerFilme = document.getElementById('trailer').value;

    listaDeNomes.push(tituloFilme);
    listaDeFilmes.push(filmeFavorito);
    listaDeTrailers.push(trailerFilme);

    limpaCampos();
    recarregaFilmes();


}

function  recarregaFilmes() {
  let filmes = document.getElementById('listaFilmes');
  filmes.innerHTML = '';

  for ( let i = 0; i < listaDeFilmes.length; i++) {
    // filmes.innerHTML += "<h2>" + listaDeNomes[i] + "</h2>";
    filmes.innerHTML += "<h2>" + listaDeNomes[i] + "</h2>" + "<a href=" + listaDeTrailers[i]  + "><img src=" + listaDeFilmes[i] + "></a>"
  }

}

function limpaCampos() {
  document.getElementById('titulo').value = '';
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}