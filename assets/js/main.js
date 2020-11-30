
$(function(){

    var Tariffazione = $("#Tariffazione");
    Tariffazione.mouseenter(function () {
        $(".link_uno").removeClass("invisible");
    });
    Tariffazione.mouseout(function () {
        $(".link_uno").addClass("invisible");
    });

    var Conti = $("#Conti");
    Conti.mouseenter(function () {
        $(".link_due").removeClass("invisible");
    });
    Conti.mouseout(function () {
        $(".link_due").addClass("invisible");
    });

    var Prodotti = $("#Prodotti");
    Prodotti.mouseenter(function () {
        $(".link_tre").removeClass("invisible");
    });
    Prodotti.mouseout(function () {
        $(".link_tre").addClass("invisible");
    });

    var Azienda = $("#Azienda");
    Azienda.mouseenter(function () {
        $(".link_quattro").removeClass("invisible");
    });
    Azienda.mouseout(function () {
        $(".link_quattro").addClass("invisible");
    });

    var Aiuto = $("#Aiuto");
    Aiuto.mouseenter(function () {
        $(".link_cinque").removeClass("invisible");
    });
    Aiuto.mouseout(function () {
        $(".link_cinque").addClass("invisible");
    });

    var It = $("#It");
    It.mouseenter(function () {
        $(".link_sei").removeClass("invisible");
    });
    It.mouseout(function () {
        $(".link_sei").addClass("invisible");
    });

});