class validacionesatomicas{

    constructor(){

    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }

    static solo_digitos(id) {
        const valor = document.getElementById(id).value;
        const aux = /^[0-9]+$/;
    
        if (aux.test(valor)) {
            return true; 
        } else {
            return false;
        }
    }
    
    static alfabeticos_tipo1(id) {
        const valor = document.getElementById(id).value;
        const aux = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    
        if (aux.test(valor)) {
            return true; 
        } else {
            return false; 
        }
    }

    static alfabeticos_tipo2(id) {
        const valor = document.getElementById(id).value;
        const aux = /^[A-Za-z]+$/;
    
        if (aux.test(valor)) {
            return true; 
        } else {
            return false; 
        }
    }

    static alfabeticos_tipo3(id) {
        const valor = document.getElementById(id).value;
        const aux = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s\.,;:!¡¿?"'\n\r]+$/u;
    
        if (aux.test(valor)) {
            return true; 
        } else {
            return false; 
        }
    }
    
    static alfabeticos_tipo4(id) {
        const valor = document.getElementById(id).value;
        const aux = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s.,;:!?¡¿"'-]+$/u;
    
        if (aux.test(valor)) {
            return true;
        } else {
            return false;
        }
    }  
    
    static size_minimof(nuevo_id, valorminimo){
        
        const archivoInput = document.getElementById(nuevo_id);
        const archivo = archivoInput.files[0]; 
            
        if (archivo) {
            const nombreArchivo = archivo.name;
            const nombreSinExtension = nombreArchivo.slice(0, nombreArchivo.lastIndexOf('.'));
            
            if (nombreSinExtension.length < valorminimo) {
                return false;
            } else {
                return true;
            }
        }
        return false;
      
    }

    static size_maximof(id, valormaximo){
        const archivoInput = document.getElementById(id);
        const archivo = archivoInput.files[0];
        if (archivo) {
        const nombreArchivo = archivo.name;
        const nombreSinExtension = nombreArchivo.slice(0, nombreArchivo.lastIndexOf('.'));
        
        if (nombreSinExtension.length > valormaximo) {
            return false;
        } else {
            return true;
        }
        } else {
        return false;
        }
    }

    static alfabeticos_tipof(id) {
        const archivoArray = document.getElementById(id);
        const archivo = archivoArray.files[0];
        const aux = /^[A-Za-z]+$/;

        const nombreArchivo = archivo.name;
        const nombreSinExtension = nombreArchivo.slice(0, nombreArchivo.lastIndexOf('.'));
    
        if (aux.test(nombreSinExtension)) {
            return true;
        } else {
            return false;
        }
    }  

    static validarFechaActual(id) {
        const fechaInput = document.getElementById(id);
        const fechaSeleccionada = new Date(fechaInput.value);
        const fechaActual = new Date();

        if (fechaSeleccionada > fechaActual) {
            return false; 
        }

        return true; 
    }

    static validarArchivo(id, tiposPermitidos, tam) {
        const archivoArray = document.getElementById(id);
        const archivo = archivoArray.files[0];
    
        const extension = archivo.name.toLowerCase();
        
        if (tiposPermitidos.some(tipo => extension.endsWith(`.${tipo}`)) && archivo.size <= tam) {
            return true;
        }
    
        return false;
    }

    static validarAno(id) {
        const valor = document.getElementById(id).value;
        const anioActual = new Date().getFullYear();
        
        if (/^\d+$/.test(valor) && parseInt(valor) <= anioActual) {
            return true;
        }
        
        return false;
    }

    static validarOpcion(id){
        const valor = document.getElementById(id).value;
        switch (id) {
            case 'unidad_poblacion':
                if(valor == 'MESES' || valor == 'AÑOS'){
                    return true;
                }
                break;
            case 'tipo_programa':
                if(valor == 'EVALUACIÓN' || valor == 'INTERVENCIÓN' || valor == 'EVALUACIÓN E INTERVENCIÓN'){
                    return true;
                }
                break;
            case 'formato_programa':
                if(valor == 'PAPEL' || valor == 'ELECTRÓNICO' || valor == 'PAPEL Y ELECTRÓNICO'){
                    return true;
                }
                break;
            case 'modo_correccion_programa':
                if(valor == 'PAPEL' || valor == 'ELECTRÓNICO' || valor == 'PAPEL Y ELECTRÓNICO'){
                    return true;
                }
                break;
            case 'modo_aplicacion_programa':
                if(valor == 'COLECTIVO' || valor == 'INDIVIDUAL' || valor == 'INDIVIDUAL Y COLECTIVO'){
                    return true;
                }
                break;
            default:
                return false;
        }        
        return false;
    }

    static campoVacio(id) {
        var valor = document.getElementById(id).value;
        return valor.trim() === '';
    }

    static alfabeticos_tipoascii(id) {
        const valor = document.getElementById(id).value;
        const asciiPattern = /^[\x00-\x7F\s.,;:!?¡¿"'-]+$/u;
    
        if (asciiPattern.test(valor)) {
            return true;
        } else {
            return false;
        }
    }

    static validarFechaVacia(id) {
        const fechaInput = document.getElementById(id);
        const fechaSeleccionada = new Date(fechaInput.value);
    
        if (isNaN(fechaSeleccionada)) {
            return false; 
        } else {
            return true; 
        }
    }
    
}
