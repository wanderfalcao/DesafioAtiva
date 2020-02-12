import $ from 'jquery';
import Modal from'../home/modal';
$( document ).ready(function() {
    $.getJSON( "https://api.npoint.io/ea71bed4c364fa0430db", function( i ) {
        var tam = Object.keys( i ).length;
            if(tam>=1){
            for(var indice = 0;indice<=Object.keys(i).length;indice++){
                $('#investimentos tbody').append(
                    '<tr><td>' + i.investimento[indice].nome +
                    '</td><td>' + i.investimento[indice].cnpj +
                    '</td><td>' + i.investimento[indice].investimentoMinimo +
                    '</td><td>' + '<a onclick=""><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png"></a>' +
                    '</td></tr>'
                );
            };
        };
    });
});