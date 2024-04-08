class Propietario{
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono} `
    }
}
class Animal extends Propietario{
    constructor (nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this.tipo = tipo
    }
    getTipo(){
        return `El tipo de animal es un: ${this.tipo}`
    }

}
class Mascota extends Animal{
    constructor (nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad){
        super (nombrePropietario, direccion, telefono, tipo,)
        this._nombre = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota(){
        return this._nombre
    }
    set nombreMascota (nuevoNombre){
        this._nombre= nuevoNombre;
    }
    get enfermedad(){
        return this._enfermedad
    }
    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    const listaResultados = document.querySelector('#resultado ul');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Recuperar valores del formulario
        const propietario = document.querySelector('#propietario').value;
        const telefono = document.querySelector('#telefono').value;
        const direccion = document.querySelector('#direccion').value;
        const nombreMascota = document.querySelector('#nombreMascota').value;
        const tipo = document.querySelector('#tipo').value;
        const enfermedad = document.querySelector('#enfermedad').value;

        // Crear instancia de Mascota
        const mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);

        // Agregar datos al DOM
        const elementoLista = document.createElement('li');
        elementoLista.innerHTML = `
        <p>${mascota.datosPropietario()}</p><p><strong>Mascota:</strong> ${mascota.nombreMascota}, que es un ${mascota.tipo} y viene por: ${mascota.enfermedad}</p>
    `;

        listaResultados.appendChild(elementoLista);

        formulario.reset(); // Limpiar el formulario después de enviar
    });
});
