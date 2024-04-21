
$(document).ready(function() {
    
    $(".menu li a").on("click", function(event) {
        
        event.preventDefault();
        
        var target = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

   
    $("#btnAvaliacao").on("click", function() {
        
        var target = $("#formulario").offset().top;
        
        $("html, body").animate({
            scrollTop: target
        }, 800);
    });
});


$("#contactForm").submit(function(event) {
    
    event.preventDefault();
    
    alert("Mensagem enviada com sucesso!");
});
