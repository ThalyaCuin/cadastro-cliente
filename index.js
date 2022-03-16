const express = require ("express");

const app = express();

app.get("/",function(req,resp){
    resp.send("Bem vindo ao meu app");
})

app.get("/contato",function(req,resp){
    resp.send("pagina de contato do meu app");
})

app.get("/produto",function(req,resp){
    resp.send("pagina de produto do meu app");
})

app.get("/dados/:nome/:cargo",function(req,resp){
    resp.send("<h1>Ola sr(a). "+requestAnimationFrame.params.nome+"</h1><h2> seu cargo é"+req.params.cargo+"</h2>");
})

app.listen(8080, function(){
    console.log("Servidor funcionando na url http:/localhost:8080");

});