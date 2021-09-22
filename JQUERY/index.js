// Comprueba si el servicio de jQuery está disponible. Sólo es necesario si el script de jQuery no se llama al final del html
$(document).ready(function() {
    //$("h1").css("color", "red");
});

// Añade una clase de css a un objeto
$("h1").addClass("big-title");

// Consulta la propiedad del css
console.log($("h1").css("color"));

$("a").attr("href", "https://cws.civilnova.com");

/*$("h1").click(function() {
    $("h1").css("color", "purple");
});*/

$("button").click(function() {
    //$("h1").css("color", "purple");
    $("h1").animate({
        opacity: 0.5
    });
});

// Si no pones nada entre parentesis, se ejecuta a nivel global
/*$("input").keypress(function(event) {
    console.log(event.key);
});*/

/*$(document).keypress(function(event) {
    $("h1").text(event.key);
});*/