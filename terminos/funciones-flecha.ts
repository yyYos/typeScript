(function(){
    
    let letraUpper = function(a:string){
        return a.toUpperCase();
    }

    let letraUpperF = (a:string) => a.toUpperCase();

    let sumaC = function (a:number, b:number){
        return a + b;
    }

    let sumaF = (a:number, b:number) => a + b;

    console.log(letraUpper('Prueba funcion clasica'));
    console.log(letraUpperF('Prueba funcion flecha'));
    console.log(sumaC(2,2));
    console.log(sumaF(2,2));

    let objetoYo = {
        nombre : 'yoselin',
        calcularEdad(){
            setTimeout(() => {
                console.log(`${this.nombre}, funcion flecha`);
            }, 1000);
            
        }
    }

    objetoYo.calcularEdad();


})();


