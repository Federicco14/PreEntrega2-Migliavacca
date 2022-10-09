let draven = 0
let yasuo = 0
let lulu = 0
let alistar = 0
let ahri = 0
let zed = 0
let kayn = 0
let kindred = 0
let sion = 0
let gnar = 0
let adc = 0
let mid = 0
let topside = 0
let sup = 0
let jg = 0
let mele = 0
let rango = 0
let eligioMele = 0
let eligioRango= 0
let satisfecho= true
let vecesPosibles = 0


function eligioAdcMele(){
    console.log ("Su campeón ideal es Yasuo");
}

function eligioAdcRango(){
    console.log ("Su campeón ideal es Draven");
}

function eligioSupMele(){
    console.log ("Su campeón ideal es Alistar");
}

function eligioSupRango(){
    console.log ("Su campeón ideal es Lulu");
}

function eligioJgMele(){
    console.log ("Su campeón ideal es Kayn");
}

function eligioJgRango(){
    console.log ("Su campeón ideal es Kindred");
}

function eligioMidMele(){
    console.log ("Su campeón ideal es Zed");
}

function eligioMidRango(){
    console.log ("Su campeón ideal es Ahri");
}

function eligioTopMele(){
    console.log ("Su campeón ideal es Sion");
}

function eligioTopRango(){
    console.log ("Su campeón ideal es Gnar");
}

function eligioTop (){
    let estilo = prompt("Elige entre rango o mele")
    switch(estilo){
        case "rango":
            console.log("Elegiste un campeón de rango")
            eligioTopRango()
            break;
        case "mele": 
            console.log("Elegiste un campeón mele")
            eligioTopMele()
            break;
        default: alert("Ese estilo de pelea no existe")
    }
    return rango && mele;
}

function eligioJg (){
    let estilo = prompt("Elige entre rango o mele")
    switch(estilo){
        case "rango":
            console.log("Elegiste un campeón de rango")
            eligioJgRango()
            break;
        case "mele": 
            console.log("Elegiste un campeón mele")
            eligioJgMele()
            break;
        default: alert("Ese estilo de pelea no existe")
    }
}

function eligioMid (){
    let estilo = prompt("Elige entre rango o mele")
    switch(estilo){
        case "rango":
            console.log("Elegiste un campeón de rango")
            eligioMidRango()
            break;
        case "mele": 
            console.log("Elegiste un campeón mele")
            eligioMidMele()
            break;
        default: alert("Ese estilo de pelea no existe")
    }
}

function eligioSup (){
    let estilo = prompt("Elige entre rango o mele")
    switch(estilo){
        case "rango":
            console.log("Elegiste un campeón de rango")
            eligioSupRango()
            break;
        case "mele": 
            console.log("Elegiste un campeón mele")
            eligioSupMele()
            break;
        default: alert("Ese estilo de pelea no existe")
    }
}

function eligioAdc (){
    let estilo = prompt("Elige entre rango o mele")
    switch(estilo){
        case "rango":
            console.log("Elegiste un campeón de rango")
            eligioAdcRango()
            break;
        case "mele": 
            console.log("Elegiste un campeón mele")
            eligioAdcMele()
            break;
        default: alert("Ese estilo de pelea no existe")
    }
}

function empezar(){
    console.log("¡Descubre tu campeón ideal!")
    let posicion = prompt("Elige posición entre: adc - sup - mid - jg - top").toLowerCase()
    switch(posicion){
        case "adc":
            console.log("Elegiste AdCarry")
            eligioAdc()
            break;
        case "sup":
            console.log("Elegiste Support")
            eligioSup()
            break;
        case "mid":
            console.log("Elegiste Middle")
            eligioMid()
            break;    
        case "jg":
            console.log("Elegiste Jungle")
            eligioJg()        
                break;
        case "top":
            console.log("Elegiste TopSide")
            eligioTop()
            break;
        default:
            alert("Esa posición no existe")
    }
}

empezar()
let valorSatisfecho = Number(prompt("Está satisfecho con su campeón? -1: Si -2: No"));
if(valorSatisfecho === 1){
    console.log("Felicidades, usted ha encontrado su main")
    satisfecho = true;
} else {
    satisfecho = false;
}
while(satisfecho == false && vecesPosibles < 1){
    empezar()
    vecesPosibles= vecesPosibles + 1
}




