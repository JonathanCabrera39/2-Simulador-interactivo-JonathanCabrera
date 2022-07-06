let color = ['ROJA','NEGRA','AZUL'];
let precio = ['300','250','150'];
let talle = ['M','XL','S'];
let remera = 'color de la remera es:'

let comprar = prompt("comprar S (O) E-salir");
while ( comprar != "E"){
    if(comprar == 'S'){
        let selecColor = prompt("seleccione color (1-roja) (2-negra) (3-azul) (O) (E-salir)");
        {
            if(selecColor == "1"){
                let selecTalle = prompt("seleccionar talle (1-M) (2-XL) (3-S)")
                if(selecTalle == "1"){
                    console.log(`${remera}${color[0]},TALLE: ${talle[0]},TOTAL: ${precio[0]}`)
                }else if(selecTalle == '2'){
                    console.log(`${remera}${color[0]},TALLE: ${talle[1]},TOTAL: ${precio[1]}`)
                }else if (selecTalle == '3'){
                    console.log(`${remera}${color[0]},TALLE: ${talle[2]},TOTAL: ${precio[2]}`)
                }else {
                    console.log("no eligio talle") 
                }
            }else if( selecColor == "2"){
                let selecTalle = prompt("seleccionar talle (1-M) (2-XL) (3-S)")
                if(selecTalle == "1"){
                    console.log(`${remera}${color[1]},TALLE: ${talle[0]},TOTAL: ${precio[0]}`)
                }else if(selecTalle == '2'){
                    console.log(`${remera}${color[1]},TALLE: ${talle[1]},TOTAL: ${precio[1]}`)
                }else if (selecTalle == '3'){
                    console.log(`${remera}${color[1]},TALLE: ${talle[2]},TOTAL: ${precio[2]}`)
                }else {
                    console.log("no eligio talle") 
                }
            }else if( selecColor == "3" ){
                let selecTalle = prompt("seleccionar talle (1-M) (2-XL) (3-S)")
                if(selecTalle == "1"){
                    console.log(`${remera}${color[2]},TALLE: ${talle[0]},TOTAL: ${precio[0]}`)
                }else if(selecTalle == '2'){
                    console.log(`${remera}${color[2]},TALLE: ${talle[1]},TOTAL: ${precio[1]}`)
                }else if (selecTalle == '3'){
                    console.log(`${remera}${color[2]},TALLE: ${talle[2]},TOTAL: ${precio[2]}`)
                }else {
                    console.log("no eligio talle") 
                }
            }
    }
    if( selecColor == "E"){
        salio = prompt("por que sale ?"); 
        console.log(`el usuario respondio: ${salio} ,salio con exito`);   
        aler1
    }
}else{
    console.log(aler1)
}

}
let aler1 = alert( "usted salio con exito");
