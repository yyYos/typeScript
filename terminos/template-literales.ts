(function(){
    
    function getEga() {
        return 10 + 10 +10;
    }
    
    const NOMBRE:string = 'yoselin';
    const APELLIDO : string = 'arzola';
    const EDAD : number = 22;

    const nombre_completo = ` ${ NOMBRE } ${ APELLIDO } ( ${ getEga() } )`;

    console.log(nombre_completo);

})();


