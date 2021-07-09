 const express = require('express');
 const bodyParser = require('body-parser');
 const response = require('./network/response');
 const router = express.Router();
 

 var app = express();
 app.use(bodyParser.json());
 app.use(router);


 router.get('/message', function(req,res){
    
     response.success(req,res, 'Lista de mensajes' );
     console.log(req.body);
 });

 router.post('/message', function(req, res){
    console.log(req.body);
    if(req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores')
    }else{
        response.success(req, res, 'Creado correctamente');
    }
    
 });
router.delete('/message', function(req, res){
    console.log(req.body); 
    res.send('Hola desde el DELETE');
   
});

app.use('/app', express.static('public')); 


//  app.use('/', function(req, res){
//      res.send('Hola');
//  });



 app.listen('3000');
 console.log('La aplicacion esta escuchando en http://localhost:3000');