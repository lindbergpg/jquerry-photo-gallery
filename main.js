$(document).ready(function() {

    $('#btn-mais').click(function() {
        $('form').slideDown();
    });

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoImagem = $('#endereco-imagem').val();
        const novaImagem = $('<li></li>');

        $(`<img src="${enderecoImagem}">`).appendTo(novaImagem);
        $(`<div class="overlay-img-lk">
            <a href="${enderecoImagem}" target="_blank" title="Ver a imagem em tamanho real">Ver a imagem em tamanho real</a>
        </div>`).appendTo(novaImagem);

        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn(1000);
        $('#endereco-imagem').val('');
    });
});