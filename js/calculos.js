function calculaAtingimento(realizado, meta){
    if(meta != 0){
        return ((realizado / meta) * 100);//calculando a porcentagem de atingimento de meta.
    }else{
        return 0;
    }
}
$(document).ready(function(){
    $("form").change(function(){
        var metaCalcados = document.getElementById('metaCalcados').value;// recebendo na variavel o valor da meta calçados
        metaCalcados = parseFloat(metaCalcados.replace(',','.'));//convertendo número com virgula para float        
        var realizadoCalcados = document.getElementById('realizadoCalcados').value;//mesma situação com a meta
        realizadoCalcados = parseFloat(realizadoCalcados.replace(',','.'));//mesma situação com a meta
        var gapCalcados = realizadoCalcados - metaCalcados;//calculando o gap
        var atingimentoCalcados = calculaAtingimento(realizadoCalcados, metaCalcados);
        $("#gapCalcados").val(gapCalcados.toFixed(2).toString().replace('.',','));//apartir daqui devolve para o form os valores de gap e atingimento
        $("#atingimentoCalcados").val(atingimentoCalcados);// aqui manda para um input "invisivel", futuramente será necessário para poder mandar para o Banco de dados.
        $(".atingimentoCalcados").html(atingimentoCalcados.toFixed(2).toString().replace('.',','));

        var metaBike = document.getElementById('metaBike').value;// recebendo na variavel o valor da meta calçados
        metaBike = parseFloat(metaBike.replace(',','.'));//convertendo número com virgula para float
        var realizadoBike = document.getElementById('realizadoBike').value;//mesma situação com a meta
        realizadoBike = parseFloat(realizadoBike.replace(',','.'));//mesma situação com a meta
        var gapBike = realizadoBike - metaBike;
        var atingimentoBike = calculaAtingimento(realizadoBike, metaBike);
        $("#gapBike").val(gapBike.toFixed(2).toString().replace('.',','));//apartir daqui devolve para o form os valores de gap e atingimento
        $("#atingimentoBike").val(atingimentoBike);// aqui manda para um input "invisivel", futuramente será necessário para poder mandar para o Banco de dados.
        $(".atingimentoBike").html(atingimentoBike.toFixed(2).toString().replace('.',','));

        var metaAuto = document.getElementById('metaAuto').value;
        metaAuto = parseFloat(metaAuto.replace(',','.'));
        var metaLoja = metaCalcados + metaBike + metaAuto;
        $("#metaLoja").val(metaLoja.toFixed(2).toString().replace('.',','));

        var realizadoLoja = document.getElementById('realizadoLoja').value;
        realizadoLoja = parseFloat(realizadoLoja.replace(',','.'));
        var gapLoja = realizadoLoja - metaLoja;
        var atingimentoLoja = calculaAtingimento(realizadoLoja, metaLoja);
        $("#gapLoja").val(gapLoja.toFixed(2).toString().replace('.',','));
        $("#atingimentoLoja").val(atingimentoLoja);
        $(".atingimentoLoja").html(atingimentoLoja.toFixed(2).toString().replace('.',','));

        var realizadoAuto, atingimentoAuto, gapAuto;
        if((realizadoLoja - (realizadoBike+realizadoCalcados))>0){
            realizadoAuto = realizadoLoja - (realizadoBike+realizadoCalcados);    
            atingimentoAuto = calculaAtingimento(realizadoAuto, metaAuto);
        }else{
            realizadoAuto = 0.0;
            atingimentoAuto = 0.0;
        }
        gapAuto = realizadoAuto - metaAuto;//calculando o gap
        $("#gapAuto").val(gapAuto.toFixed(2).toString().replace('.',','));//apartir daqui devolve para o form os valores de gap e atingimento
        $("#realizadoAuto").val(realizadoAuto.toFixed(2).toString().replace('.',','));
        $("#atingimentoAuto").val(atingimentoAuto);// aqui manda para um input "invisivel", futuramente será necessário para poder mandar para o Banco de dados.
        $(".atingimentoAuto").html(atingimentoAuto.toFixed(2).toString().replace('.',','));

        var realizadoOMS = document.getElementById('realizadoOMS').value;
        realizadoOMS = parseFloat(realizadoOMS.replace(',','.'));
        var realizadoLojaSemOMS = realizadoLoja-realizadoOMS;
        var gapLojaSemOMS = realizadoLojaSemOMS - metaLoja;
        var atingimentoLojaSemOMS = calculaAtingimento(realizadoLojaSemOMS, metaLoja);
        $("#realizadoLojaSemOMS").val(realizadoLojaSemOMS.toFixed(2).toString().replace('.',','));
        $("#gapLojaSemOMS").val(gapLojaSemOMS.toFixed(2).toString().replace('.',','));
        $("#atingimentoLojaSemOMS").val(atingimentoLojaSemOMS);// aqui manda para um input "invisivel", futuramente será necessário para poder mandar para o Banco de dados.
        $(".atingimentoLojaSemOMS").html(atingimentoLojaSemOMS.toFixed(2).toString().replace('.',','));
    });
});