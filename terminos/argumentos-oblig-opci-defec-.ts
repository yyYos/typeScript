(function(){
    
    function nombreCompleto( nombre: string,
                             apellidoMaterno ?: string,
                             apelldioPaterno : string = 'arzola'){
        console.log(`${ nombre } ${apelldioPaterno} ${apellidoMaterno}`);
    }

    nombreCompleto('yoselin', 'jimnz');

})();


