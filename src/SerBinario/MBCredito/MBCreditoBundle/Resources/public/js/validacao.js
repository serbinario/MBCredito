$("form#formModal").submit(function () {    
    //Recuperando os valores dos campos
    var margem       = $("form#formModal input[name='margem']").val();
    var vDisponivel  = $("form#formModal input[name='vDisponivel']").val();
    
    //Verifica se o valor da marge está válido
    if( !($.isNumeric(vDisponivel))) {
        $("form#formModal span#errorVDisponivel")
                .css("color", "red")
                .text("Informe um valor do tipo numérico para valor disponível");
        
        return false;
    }
    
    //Verifica se o valor disponível está válido
    if( !($.isNumeric(margem))) {
        
        $("form#formModal span#errorMargem")
                .css("color", "red")
                .text("Informe um valor do tipo numérico para margem");
        
        return false;
    }
    
    return true;
});