import $ from 'jquery';

$.getJSON( " https://api.npoint.io/4517a5017b7015001f2a", function( i ) {
        var tam = Object.keys( i ).length;
        if(tam>=1){
            for(var indice = 0;indice<tam;indice++){
                var d = i.transacoes[indice].dataMovimentacao;
                d = d.substring(0,9)
                d = d.split('-').reverse().join('/');
                console.log(d)
                $.getJSON( "https://api.npoint.io/ea71bed4c364fa0430db", function( j ) {
                    for(var verifica = 0;verifica<Object.keys( j ).length;verifica++){
                        if(j.investimento[verifica].id == i.transacoes[indice-1].idFundo){
                            var nomeFundo = j.investimento[verifica].nome
                        }
                    }
                    console.log(i.transacoes[indice-1].tipoOperacao )
                    $('#transacoes tbody').append(
                        '<tr><td>' + nomeFundo +                    
                        '</td><td>' + d +
                        '</td><td>' + i.transacoes[indice-1].tipoOperacao  +
                        '</td><td>' + i.transacoes[indice-1].valorMovimentacao +
                        '</td><td>' + '<a ><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png"></a>' +
                        '</td></tr>'
                    );
            });
        }
    }
    });

