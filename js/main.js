let color = ['ROJA','NEGRA','AZUL'];
let precio = ['300','250','150'];
let talle = ['S','M','L','XL','XXL'];
let remera = 'color de la remera es:'

 let comprar = prompt("comprar S (O) E-salir");
 if ( comprar != "E"){
    function agregarRemeras(){
        let cantidadRemeras = prompt("cuantas remeras quieres ?");
        // let selecTalle = prompt("Escriba acá su tarea");
        for(let i = 1; i <= cantidadRemeras; i++) {
            let selecColor = prompt("seleccione color (1-roja) (2-negra) (3-azul)");
                if(selecColor == "1"){
                    console.log(`${remera}${color[0]}`)
                }else if(selecColor == '2'){
                    console.log(`${remera}${color[1]}`)
                }else if (selecColor == '3'){
                    console.log(`${remera}${color[2]}`)
                }else {
                    console.log("no eligio color") 
                }
            let selecTalle = prompt("seleccionar talle (1-S) (2-M) (3-L) (4-XL) (5-XXL)")
            if(selecTalle == "1"){
                console.log(`TALLE: ${talle[0]},TOTAL: ${precio[0]}`)
            }else if(selecTalle == '2'){
                console.log(`,TALLE: ${talle[1]},TOTAL: ${precio[1]}`)
            }else if (selecTalle == '3'){
                console.log(`,TALLE: ${talle[2]},TOTAL: ${precio[2]}`)
            }else if(selecTalle == '4'){
                console.log(`,TALLE: ${talle[1]},TOTAL: ${precio[1]}`)
            }else if (selecTalle == '5'){
                console.log(`,TALLE: ${talle[2]},TOTAL: ${precio[2]}`)
            }else {
                console.log("no eligio talle") 
            }
            toDoList.push(selecTalle);
        }
        
    }
}else{   
    function agregarRemeras(){
        salio = prompt("por que sale ?");     
        console.log(`el usuario respondio: ${salio} ,salio con exito` ); 
      };
    }

const toDoList = []
            
agregarRemeras();

