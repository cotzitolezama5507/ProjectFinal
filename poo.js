
class user{
    #nombre
    #apellidoPa
    #apellidoMa
    #edad
    #altura
    constructor(nombre,apellidoPa,apellidoMa,edad,altura){
        this.#nombre=nombre
        this.#apellidoPa=apellidoPa
        this.#apellidoMa=apellidoMa
        this.#edad=edad
        this.#altura=altura
    }
    setNombre(nombre) {
        this.#nombre = nombre
    }
    getNombre() {
        return this.#nombre
    }
    setApellidoPa(apellidoPa) {
        this.#apellidoPa = apellidoPa
    }
    getApellidoPa() {
        return this.#apellidoPa
    }
    setApellidoMa(apellidoMa) {
        this.#apellidoMa = apellidoMa
    }
    getApellidoMa() {
        return this.#apellidoMa
    }
    setEdad(edad) {
        this.#edad = edad
    }
    getEdad() {
        return this.#edad
    }
    setAltura(altura){
        this.#altura=altura
    }
    getAltura(){
        return this.#altura
    }
    

}
function onClic(){
    var sinletras=/^([0-9])*$/;
    var alturaLimit=/^[0-8][.][0-9][0-9]$/;
    us.setNombre(document.contenedor.namep.value);
    us.setApellidoPa(document.contenedor.apellidoPap.value);
    us.setApellidoMa(document.contenedor.apellidoMap.value);
    us.setEdad(document.contenedor.edadp.value);
    us.setAltura(document.contenedor.alturap.value);
    if(sinletras.test(document.contenedor.edadp.value) && alturaLimit.test(document.contenedor.alturap.value)){
        document.getElementById("all").innerHTML ="{ <br>nombre: "+us.getNombre()+" <br>pellidoPa: "+us.getApellidoPa()+" <br>apellidoMa: "+us.getApellidoMa()+" <br>edad:"+us.getEdad()+" <br>altura: "+us.getAltura()+"<br>}";
       var all=document.getElementById("all");
       var usepoo=document.getElementById("usepoo");
       var aviso=document.getElementById("aviso");
       all.style.color="Blue" 
       usepoo.style.color="Purple"
       aviso.style.color="Red"    
    }else{
        alert("Escriba bien sus datos: "+us.getEdad()+" "+us.getAltura())
        document.getElementById("all").innerHTML ="";
    }
    }
function nextPage(){
    var sinletras=/^([0-9])*$/;
    var alturaLimit=/^[0-8][.][0-9][0-9]$/;
    us.setNombre(document.contenedor.namep.value);
    us.setApellidoPa(document.contenedor.apellidoPap.value);
    us.setApellidoMa(document.contenedor.apellidoMap.value);
    us.setEdad(document.contenedor.edadp.value);
    us.setAltura(document.contenedor.alturap.value);
    if(sinletras.test(document.contenedor.edadp.value) && alturaLimit.test(document.contenedor.alturap.value)){
        let person={
            nombre: us.getNombre(),
            apelldioPa: us.getApellidoPa(),
            apellidoMa: us.getApellidoMa(),
            edad: document.contenedor.edadp.value,
            altura: document.contenedor.alturap.value
        }
        localStorage.setItem("Person",JSON.stringify(person))
        document.pooform.submit();
    }else{
        alert("Escriba bien sus datos: "+us.getEdad()+" "+us.getAltura())
        document.getElementById("all").innerHTML ="";
    }
    
}

let nombre = localStorage.getItem("Nombre")
let apellidoPa=localStorage.getItem("ApellidoPaterno")
let apellidoMa=localStorage.getItem("ApellidoMaterno")
const us = new user(nombre,apellidoPa,apellidoMa,document.contenedor.edadp.value,document.contenedor.alturap.value);
document.getElementById("pe").innerHTML = "Bienvenido "+nombre+" "+apellidoPa+" "+apellidoMa;

document.contenedor.namep.value=nombre;
document.contenedor.apellidoPap.value=apellidoPa;
document.contenedor.apellidoMap.value=apellidoMa;
document.getElementById("aviso").innerHTML = "Los datos almacenados automaticamente se pueden modificar si gustan ya que solo es un ejemplo para usar el localStorage con variables normales, al momento de ir a la sig pagina, se agregara como un item json todos los datos del formulario:)";
document.getElementById("usepoo").innerHTML ="Uso del poo imprimiendo variables con metodos getter an setter y del dom cambiando de color estos 3 mensajes: ";




