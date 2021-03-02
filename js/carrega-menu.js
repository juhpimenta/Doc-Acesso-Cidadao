// =================================================
// carregamento dinâmico dos menus
// =================================================

function CarregaMenuLateral() {
    $.ajax({
    url: "js/00-menu-lateral-publico.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#menu-lateral").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function CarregaMenuSuperior() {
    $.ajax({
    url: "js/00-menu-superior-publico.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#menu-superior").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function CarregaRodape() {
    $.ajax({
    url: "js/00-rodape.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#rodape").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

//injetando exemplos nas paginas 

function injetaStep() {
    $.ajax({
    url: "js/step-bar.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#stepBar").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function injetaNav() {
    $.ajax({
    url: "js/menu-AC.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#navega").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function injetaDrop() {
    $.ajax({
    url: "js/drop.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#drop").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function injetaFooter() {
    $.ajax({
    url: "js/footer.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#footer").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function injetaCard1() {
    $.ajax({
    url: "js/card-1.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#card1").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function injetaCard2() {
    $.ajax({
    url: "js/card-2.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#card2").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function injetaform() {
    $.ajax({
    url: "js/form.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#form").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}
function injetaPoper() {
    $.ajax({
    url: "js/exibe-poper.html",
    type: "GET",
    dataType : "html",
})
// quando terminar executa
  .done(function( dados ) {
        //console.log(dados);
     $("#popover-exemplo").html(dados);
  })
// deu ruim
  .fail(function( xhr, status, errorThrown ) {
    console.log("Erro carregando menu.");
  })
// confere se deu certo
  .always(function( xhr, status ) {
    console.log("Tentei carregar.");
  });
}

function abreJanela(URL) {
location.href = URL; // se for popup utiliza o window.open
}

//injetar codigo quando a pagina é carregada 

$(document).ready(function() {
injetaPoper();
});
$(document).ready(function() {
injetaform();
});
$(document).ready(function() {
injetaCard2();
});
$(document).ready(function() {
injetaCard1();
});
$(document).ready(function() {
injetaFooter();
});

$(document).ready(function() {
injetaDrop();
});

$(document).ready(function() {
injetaStep();
});

$(document).ready(function() {
CarregaMenuLateral();
});

$(document).ready(function() {
CarregaMenuSuperior();
});

$(document).ready(function() {
CarregaRodape();
});

$(document).ready(function() {
injetaNav();
});
