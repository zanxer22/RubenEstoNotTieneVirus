class Gestion_publicacion extends GestionEntidad{


    static recargarform(){
    
        document.getElementById("IU_form").innerHTML= '';
    
        document.getElementById("IU_form").innerHTML= `
            <label class="id_publicacion "></label>
            <input type='text' id='id_publicacion' name='id_publicacion'></input>
            <div id="div_error_id_publicacion" class="errorcampo"><a id="error_id_publicacion"></a></div>
            <script>document.querySelector('.id_publicacion').innerHTML=traduccion['id_publicacion'];</script>
            <br>
    
            <label class="titulo_publicacion"></label>
            <input type='text' id='titulo_publicacion' name='titulo_publicacion'></input>
            <div id="div_error_titulo_publicacion" class="errorcampo"><a id="error_titulo_publicacion"></a></div>
            <script>document.querySelector('.titulo_publicacion').innerHTML=traduccion['titulo_publicacion'];</script>
            <br>
            
            <label class="autor_publicacion"></label>
            <input type='text' id='autor_publicacion' name='autor_publicacion'></input>
            <div id="div_error_autor_publicacion" class="errorcampo"><a id="error_autor_publicacion"></a></div>
            <script>document.querySelector('.autor_publicacion').innerHTML=traduccion['autor_publicacion'];</script>
            <br>

            <label class="fecha_publicacion"></label>
            <input type='date' id='fecha_publicacion' name='fecha_publicacion'></input>
            <div id="div_error_fecha_publicacion" class="errorcampo"><a id="error_fecha_publicacion"></a></div>
            <script>document.querySelector('.fecha_publicacion').innerHTML=traduccion['fecha_publicacion'];</script>
            <br>

            <label class="area_publicacion "></label>
            <input type='text' id='area_publicacion' name='area_publicacion'></input>
            <div id="div_error_area_publicacion" class="errorcampo"><a id="error_area_publicacion"></a></div>
            <script>document.querySelector('.area_publicacion').innerHTML=traduccion['area_publicacion'];</script>
            <br>

            <label class="texto_publicacion"></label>
            <textarea rows="5" cols="100" id='texto_publicacion' name='texto_publicacion'></textarea>
            <div id="div_error_texto_publicacion" class="errorcampo"><a id="error_texto_publicacion"></a></div>
            <script>document.querySelector('.texto_publicacion').innerHTML=traduccion['texto_publicacion'];</script>
            <br>
        
            <label id="label_imagen_publicacion" class="label_imagen_publicacion"></label>
            <input type='text' id='imagen_publicacion' name='imagen_publicacion'></input>
            <a id="link_imagen_publicacion" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion /"><img src="./iconos/FILE.png" /></a>
            <label id="label_nuevo_imagen_publicacion" class="label_nuevo_imagen_publicacion"></label>
            <input type='file' id='nuevo_imagen_publicacion' name='nuevo_imagen_publicacion'></input>
            <div id="div_error_imagen_publicacion" class="errorcampo"><a id="error_imagen_publicacion"></a></div>
            <script>document.querySelector('.imagen_publicacion').innerHTML=traduccion['imagen_publicacion'];</script>
            <br>
            `;
    
        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }
    
        setLang();
    }

    //Creacion de formularios

    static createForm_ADD(){

        // resetear el formulario
        this.recargarform();
    
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_ADD_publicacion"]; 
    
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');
    
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
    
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
    
        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
    
        document.getElementById('fecha_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_fecha_publicacion()');
    
        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');
    
        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        document.getElementById("label_imagen_publicacion").style.display = '';
        document.getElementById('imagen_publicacion').value = ''   ;
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);
        document.getElementById("link_imagen_publicacion").style.display = '';
    
        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);  
        
        // para actualizar idioma despues de incluir la imagen
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    
    static createForm_DELETE(datos_publicacion){
        // resetear el formulario
        this.recargarform();
    
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_publicacion"]; 
    
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';
    
        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').value = datos_publicacion.id_publicacion;
        document.getElementById('id_publicacion').setAttribute("readonly",true);
    
        document.getElementById('titulo_publicacion').value = datos_publicacion.titulo_publicacion;
        document.getElementById('titulo_publicacion').setAttribute("readonly",true);
    
        document.getElementById('autor_publicacion').value = datos_publicacion.autor_publicacion;
        document.getElementById('autor_publicacion').setAttribute("readonly",true);
    
        document.getElementById('fecha_publicacion').value = datos_publicacion.fecha_publicacion;
        document.getElementById('fecha_publicacion').setAttribute("readonly",true);
    
        document.getElementById('area_publicacion').value = datos_publicacion.area_publicacion;
        document.getElementById('area_publicacion').setAttribute("readonly",true);

        document.getElementById('texto_publicacion').value = datos_publicacion.texto_publicacion;
        document.getElementById('texto_publicacion').setAttribute("readonly",true);
    
        document.getElementById('imagen_publicacion').value = datos_publicacion.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);
        document.getElementById("link_imagen_publicacion").href += datos_publicacion.imagen_publicacion;
        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
            
    
        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);
    
        // para actualizar idioma
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    
    static createForm_EDIT(datos_publicacion){
            
        // resetear el formulario
        this.recargarform();
        
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_EDIT_publicacion"]; 
    
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_EDIT();');
    
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = datos_publicacion.id_publicacion;
    
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = datos_publicacion.titulo_publicacion;
    
        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = datos_publicacion.autor_publicacion;
    
        document.getElementById('fecha_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = datos_publicacion.fecha_publicacion;
    
        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = datos_publicacion.area_publicacion;

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = datos_publicacion.texto_publicacion;
        
        document.getElementById('imagen_publicacion').value = datos_publicacion.imagen_publicacion;
        document.getElementById('link_imagen_publicacion').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/'+ datos_publicacion.imagen_publicacion);
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);
        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
    
        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);
    
        // para actualizar idioma despues de incluir la imagen
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    
    static createForm_SHOWCURRENT(datos_publicacion){
            
        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datos_publicacion);
        
        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SHOWCURRENT_publicacion"]; 
    
        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
        
        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);
    
        // para actualizar el idioma
        setLang();
    
    
    }
    
    static createForm_SEARCH(){
    
        // resetear el formulario
        this.recargarform();
    
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SEARCH_publicacion"]; 
    
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');
    
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
    
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
    
        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
    
        document.getElementById('fecha_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_fecha_publicacion()');
    
        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');
    
        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        
        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        
    
        // para actualizar idioma
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    
    }

    //Comprobacion de los submits

    static comprobar_submit(){
        
        let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );

        if(resultado == true){
            this.ADD;
            DOM_class.cerrar_div_formulario();
        } else {
            //alert('Hay un error');
        }
        
        return resultado;    
    }

    static comprobar_submit_EDIT(){
            
        let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );

        if(resultado == true){
            this.ADD;
            DOM_class.cerrar_div_formulario();
        } else {
            //alert('Hay un error');
        }
        
        return resultado;    
    }

    static comprobar_submit_SEARCH(){
        
        let valor = this.comprobar_id_publicacion_SEARCH();
        let valor1 = this.comprobar_titulo_publicacion_SEARCH();
        let valor2 = this.comprobar_autor_publicacion_SEARCH();
        let valor3 = this.comprobar_fecha_publicacion_SEARCH();
        let valor4 = this.comprobar_area_publicacion_SEARCH();
        let valor5 = this.comprobar_texto_publicacion_SEARCH();
        let valor6 = this.comprobar_nuevo_imagen_publicacion_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );

        if(resultado == true){
            this.SEARCH;
            DOM_class.cerrar_div_formulario();
        } else {
            //alert('Hay un error');
        }
        
        return resultado;    
    }

    //Llamadas a BACK

    static async ADD(){  // async porque estamos utilizando un await indicando que esperamos por la respuesta de la función
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
            .then((respuesta) => {  // en el then recogemos la respuesta del resolve() de la promesa
                if (respuesta['ok']){  // comprobamos si la operación ha sido correcta
                        this.recargarform();  // limpiamos el formulario para que el SEARCH lo haga sin criterios
                        this.SEARCH(); // llamamos al SEARCH para que haga la busqueda y nos muestre la tabla de resultados
                }
                else{
                        DOM_class.mostrardivmensajes(respuesta['code']); // como se ha producido un error mostramos el error de ACCION del back
                }
        });
    }
    
    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }
    
    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }
    
    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let publicacion = new Gestion_publicacion('publicacion',respuesta['resource'],Array('id_publicacion', 'titulo_publicacion', 'autor_publicacion', 'fecha_publicacion', 'area_publicacion', 'texto_publicacion', 'imagen_publicacion')); publicacion.mostrartabla();
        });
    }

    //Campos de comprobacion

    static comprobar_id_publicacion(){
        if (validacionesatomicas.size_minimo('id_publicacion',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximo('id_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_max');
            return false;
        }
    
        if(validacionesatomicas.solo_digitos('id_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }

    static comprobar_id_publicacion_SEARCH(){
        if(validacionesatomicas.campoVacio('id_publicacion')){
            DOM_class.mostrarexitovalor('id_publicacion');
            return true;
        } else {
            if (validacionesatomicas.size_minimo('id_publicacion',1)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_min');
                return false;
            }
        
            if (validacionesatomicas.size_maximo('id_publicacion',6)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_max');
                return false;
            }
        
            if(validacionesatomicas.solo_digitos('id_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_formato');
                return false;
            }
        
            DOM_class.mostrarexitovalor('id_publicacion');
            return true;
        }
    }

    static comprobar_titulo_publicacion(){
        if(validacionesatomicas.size_minimo('titulo_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximo('titulo_publicacion',80)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_max');
            return false;
        }
            
        if (validacionesatomicas.alfabeticos_tipo1('titulo_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
        
    }

    static comprobar_titulo_publicacion_SEARCH(){
        if(validacionesatomicas.campoVacio('titulo_publicacion')){
            DOM_class.mostrarexitovalor('titulo_publicacion');
            return true;
        } else {
            if(validacionesatomicas.size_minimo('titulo_publicacion',6)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_min');
                return false;
            }
    
            if (validacionesatomicas.size_maximo('titulo_publicacion',80)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_max');
                return false;
            }
            
            if (validacionesatomicas.alfabeticos_tipo1('titulo_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_formato');
                return false;
            }
    
            DOM_class.mostrarexitovalor('titulo_publicacion');
            return true;
        }
    }

    static comprobar_autor_publicacion(){
        if(validacionesatomicas.size_minimo('autor_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximo('autor_publicacion',40)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_max');
            return false;
        }
            
        if (validacionesatomicas.alfabeticos_tipo1('autor_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
        
    }

    static comprobar_autor_publicacion_SEARCH(){
        if(validacionesatomicas.campoVacio('autor_publicacion')){
            DOM_class.mostrarexitovalor('autor_publicacion');
            return true;
        } else {
            if(validacionesatomicas.size_minimo('autor_publicacion',6)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_min');
                return false;
            }
        
            if (validacionesatomicas.size_maximo('autor_publicacion',40)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_max');
                return false;
            }
                
            if (validacionesatomicas.alfabeticos_tipo1('autor_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_formato');
                return false;
            }
        
            DOM_class.mostrarexitovalor('autor_publicacion');
            return true;
        }
    }

    static comprobar_fecha_publicacion(){
        if (validacionesatomicas.validarFechaVacia('fecha_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_vacio');
            return false;
        }
        
        if (validacionesatomicas.validarFechaActual('fecha_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_mayor');
            return false;
        }

        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    static comprobar_fecha_publicacion_SEARCH(){
        if (validacionesatomicas.validarFechaVacia('fecha_publicacion')){
            DOM_class.mostrarexitovalor('fecha_publicacion');
            return true;
        } else {
            if (validacionesatomicas.validarFechaActual('fecha_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_mayor');
                return false;
            }
            DOM_class.mostrarexitovalor('fecha_publicacion');
            return true;
        }
    }

    static comprobar_area_publicacion(){
        if (validacionesatomicas.size_minimo('area_publicacion',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximo('area_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_max');
            return false;
        }
    
        if(validacionesatomicas.solo_digitos('area_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }

    static comprobar_area_publicacion_SEARCH(){
        if(validacionesatomicas.campoVacio('area_publicacion')){
            DOM_class.mostrarexitovalor('area_publicacion');
            return true;
        } else {
            if (validacionesatomicas.size_minimo('area_publicacion',1)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_min');
                return false;
            }
        
            if (validacionesatomicas.size_maximo('area_publicacion',6)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_max');
                return false;
            }
        
            if(validacionesatomicas.solo_digitos('area_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_formato');
                return false;
            }
        
            DOM_class.mostrarexitovalor('area_publicacion');
            return true;
        }
    }

    static comprobar_texto_publicacion(){
        if (validacionesatomicas.size_minimo('texto_publicacion',30)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximo('texto_publicacion',8000)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_max');
            return false;
        }
    
        if(validacionesatomicas.alfabeticos_tipoascii('texto_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    static comprobar_texto_publicacion_SEARCH(){
        if(validacionesatomicas.campoVacio('nuevo_imagen_publicacion')){
            DOM_class.mostrarexitovalor('imagen_publicacion');
            return true;
        } else {    
            
            if (validacionesatomicas.size_minimo('texto_publicacion',30)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_min');
                return false;
            }
        
            if (validacionesatomicas.size_maximo('texto_publicacion',8000)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_max');
                return false;
            }
        
            if(validacionesatomicas.alfabeticos_tipoascii('texto_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_formato');
                return false;
            }
        
            DOM_class.mostrarexitovalor('texto_publicacion');
            return true;
        }
    }

    static comprobar_nuevo_imagen_publicacion(){
        if (validacionesatomicas.size_minimof('nuevo_imagen_publicacion',7)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximof('nuevo_imagen_publicacion',50)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_max');
            return false;
        }
    
        if (validacionesatomicas.validarArchivo('nuevo_imagen_publicacion', ["jpg", "jpeg"], 20000)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_form_fich');
            return false;
        }
    
        if (validacionesatomicas.alfabeticos_tipof('nuevo_imagen_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('imagen_publicacion');
        return true;
        
    }

    static comprobar_nuevo_imagen_publicacion_SEARCH(){
        if(validacionesatomicas.campoVacio('nuevo_imagen_publicacion')){
            DOM_class.mostrarexitovalor('imagen_publicacion');
            return true;
        } else {
            if (validacionesatomicas.size_minimof('nuevo_imagen_publicacion',7)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_min');
                return false;
            }
    
            if (validacionesatomicas.size_maximof('nuevo_imagen_publicacion',50)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_max');
                return false;
            }
    
            if (validacionesatomicas.validarArchivo('nuevo_imagen_publicacion', ["jpg", "jpeg"], 20000)){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_form_fich');
                return false;
            }
    
            if (validacionesatomicas.alfabeticos_tipof('nuevo_imagen_publicacion')){
            }
            else{
                DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_formato');
                return false;
            }
    
            DOM_class.mostrarexitovalor('imagen_publicacion');
            return true;
        }
    }
}