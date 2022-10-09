/* Funciones constructoras */
/*-------------------------------------------------------------------------*/

class campeon{
    constructor(a, b, c, d, e){
        this.nombre = a
        this.posicion = b;
        this.estilo = c;
        this.especialidad = d;
        this.valor = e;
    }
}

let Aatrox = new campeon("Aatrox","top", "melee", "luchador", 0) 
let Ahri = new campeon("Ahri","mid","rango","mago", 0)
let Akali = new campeon("Akali","mid","melee","asesino", 0)
let Akshan = new campeon("Akshan","mid", "rango", "tirador", 0)
let Alistar = new campeon("Alistar", "sup", "melee", "tanque", 0)
let Amummu = new campeon("Amummu", "jg", "melee", "tanque", 0)
let Anivia = new campeon("Anivia","mid","rango","mago",0)
let Annie = new campeon("Annie","mid","rango","mago",0)
let Aphelios = new campeon("Aphelios","adc","rango","tirador",0)
let Ashe = new campeon("Ashe","adc","rango","tirador",0)
let aurelionSol = new campeon("Aurelion Sol","mid","rango","mago",0)
let Azir = new campeon("Azir","mid","rango","mago",0)
let Bardo = new campeon("Bardo","sup","rango","soporte",0)
let Belveth = new campeon("Bel'Veth","jg","melee","luchador",0)
let Blitzkrank = new campeon("Blitzkrank","sup","melee","tanque",0)
let Brand = new campeon("Brand","sup","rango","mago",0)
let Braum  = new campeon("Braum","sup","melee","soporte")


/* Arrays */
/*--------------------------------------------------------------------*/
let campeones = [Aatrox, Ahri, Akali, Akshan, Alistar, Amummu, Anivia, Annie, Aphelios, Ashe, aurelionSol, Azir, Bardo, Belveth, Blitzkrank, Brand, Braum]

/* Funciones */
/*----------------------------------------------------------------------*/
function empezar(){
    let posicion = prompt("Elige tu posicion: Adc - Sup - Mid - Jg - Top").toLowerCase()
    let estilo = prompt("Prefieres un campeón: Melee - Rango").toLowerCase()
    let especialidad = prompt("Elige tu estilo de campeón: Asesino - Luchador - Mago - Tirador - Soporte - Tanque").toLowerCase()
    let mids = campeones.filter((eleccion) => {
    return eleccion.posicion === posicion && eleccion.estilo === estilo && eleccion.especialidad === especialidad
});
console.log(mids)
console.log(mids.length)
if (mids.length === 0){
    alert("No hay campeónes con esas características")
} else if (mids.length === 1){
    for(let resultados of mids){
        alert("Su campeón main es " + resultados.nombre)
    }
} else{
    for(let resultados of mids){
    alert("Sus posibles mains son " + resultados.nombre)
    }
}
}