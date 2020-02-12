import $ from 'jquery';


$.getJSON( "https://api.npoint.io/42dd64614d37163977b2", function( i ) {
        var tam = Object.keys( i ).length;
        if(tam>=1){
            for(var indice = 0;indice<tam;indice++){
                console.log(i.usuario[indice].nome)
                $('#usuario tbody').append(
                    '<tr><td>' + i.usuario[indice].nome +
                    '</td><td>' + i.usuario[indice].cnpj +
                    '</td><td>' + i.usuario[indice].valorInvestimento +
                    '</td><td>' + '<a ><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png"></a>' +
                    '</td></tr>'
                );
            };
        }
    });

    
