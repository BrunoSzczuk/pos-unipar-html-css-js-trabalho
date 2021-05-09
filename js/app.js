
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  calculaTotal();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  calculaTotal();
}

function calculaTotal() {

  var valorTotal = 0;
  var qtd = $('#carrinho article input[name="qtde"]');
  var article = $('#carrinho article');

  article.each(function () {

    var qt = Number($(this).find(':input[name="qtde"]').val())

    var valor = Number($(this).find(':input[name="valor"]').val())
    valorTotal += qt * valor;
  })
  var totalItens = 0;
  qtd.each(function () {
    totalItens += Number($(this).val());
  })

  $('#total-itens').html(totalItens);
  $('#valor-total').html(valorTotal);

}

