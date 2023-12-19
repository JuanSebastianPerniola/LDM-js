var fs = require("fs");

    fs.readFile('./Actividad1./HolaMundo.txt', 'UTF-8', (error,archivo)=>{
        if(error){
            throw error;
        }
        console.log(archivo);
    });