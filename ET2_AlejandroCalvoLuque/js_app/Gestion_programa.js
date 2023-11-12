class Gestion_programa extends GestionEntidad{


static recargarform(){

    document.getElementById("IU_form").innerHTML= '';

    document.getElementById("IU_form").innerHTML= `
        <label class="id_programa "></label>
        <input type='text' id='id_programa' name='id_programa'></input>
        <div id="div_error_id_programa" class="errorcampo"><a id="error_id_programa"></a></div>
        <script>document.querySelector('.id_programa').innerHTML=traduccion['id_programa'];</script>
        <br>

        <label class="nombre_programa"></label>
        <input type='text' id='nombre_programa' name='nombre_programa'></input>
        <div id="div_error_nombre_programa" class="errorcampo"><a id="error_nombre_programa"></a></div>
        <script>document.querySelector('.nombre_programa').innerHTML=traduccion['nombre_programa'];</script>
        <br>
        
        <label class="acronimo_programa"></label>
        <input type='text' id='acronimo_programa' name='acronimo_programa'></input>
        <div id="div_error_acronimo_programa" class="errorcampo"><a id="error_acronimo_programa"></a></div>
        <script>document.querySelector('.acronimo_programa').innerHTML=traduccion['acronimo_programa'];</script>
        <br>
        
        <label class="nombre_original_programa"></label>
        <input type='text' id='nombre_original_programa' name='nombre_original_programa'></input>
        <div id="div_error_nombre_original_programa" class="errorcampo"><a id="error_nombre_original_programa"></a></div>
        <script>document.querySelector('.nombre_original_programa').innerHTML=traduccion['nombre_original_programa'];</script>
        <br>

        <label class="autor_programa"></label>
        <input type='text' id='autor_programa' name='autor_programa'></input>
        <div id="div_error_autor_programa" class="errorcampo"><a id="error_autor_programa"></a></div>
        <script>document.querySelector('.autor_programa').innerHTML=traduccion['autor_programa'];</script>
        <br>

        <label class="autor_original_programa"></label>
        <input type='text' id='autor_original_programa' name='autor_original_programa'></input>
        <div id="div_error_autor_original_programa" class="errorcampo"><a id="error_autor_original_programa"></a></div>
        <script>document.querySelector('.autor_original_programa').innerHTML=traduccion['autor_original_programa'];</script>
        <br>
        
        <label class="ano_programa"></label>
        <input type='text' id='ano_programa' name='ano_programa'></input>
        <div id="div_error_ano_programa" class="errorcampo"><a id="error_ano_programa"></a></div>
        <script>document.querySelector('.ano_programa').innerHTML=traduccion['ano_programa'];</script>
        <br>

        <label class="ano_original_programa"></label>
        <input type='text' id='ano_original_programa' name='ano_original_programa'></input>
        <div id="div_error_ano_original_programa" class="errorcampo"><a id="error_ano_original_programa"></a></div>
        <script>document.querySelector('.ano_original_programa').innerHTML=traduccion['ano_original_programa'];</script>
        <br>

        <label class="requisitos_programa"></label>
        <textarea row="5" cols="100" id='requisitos_programa' name='requisitos_programa'></textarea>
        <div id="div_error_requisitos_programa" class="errorcampo"><a id="error_requisitos_programa"></a></div>
        <script>document.querySelector('.requisitos_programa').innerHTML=traduccion['requisitos_programa'];</script>
        <br>

        <label class="poblacion_desde_programa"></label>
        <input type='text' id='poblacion_desde_programa' name='poblacion_desde_programa'></input>
        <div id="div_error_poblacion_desde_programa" class="errorcampo"><a id="error_poblacion_desde_programa"></a></div>
        <script>document.querySelector('.poblacion_desde_programa').innerHTML=traduccion['poblacion_desde_programa'];</script>
        <br>

        <label class="poblacion_hasta_programa"></label>
        <input type='text' id='poblacion_hasta_programa' name='poblacion_hasta_programa'></input>
        <div id="div_error_poblacion_hasta_programa" class="errorcampo"><a id="error_poblacion_hasta_programa"></a></div>
        <script>document.querySelector('.poblacion_hasta_programa').innerHTML=traduccion['poblacion_hasta_programa'];</script>
        <br>

        <label class="unidad_poblacion"></label>
        <input type='text' id='unidad_poblacion' name='unidad_poblacion'></input>
        <div id="div_error_unidad_poblacion" class="errorcampo"><a id="error_unidad_poblacion"></a></div>
        <script>document.querySelector('.unidad_poblacion').innerHTML=traduccion['unidad_poblacion'];</script>
        <br>

        <label class="tipo_programa"></label>
        <input type='text' id='tipo_programa' name='tipo_programa'></input>
        <div id="div_error_tipo_programa" class="errorcampo"><a id="error_tipo_programa"></a></div>
        <script>document.querySelector('.tipo_programa').innerHTML=traduccion['tipo_programa'];</script>
        <br>

        <label class="tiempo_aplicacion_programa"></label>
        <input type='text' id='tiempo_aplicacion_programa' name='tiempo_aplicacion_programa'></input>
        <div id="div_error_tiempo_aplicacion_programa" class="errorcampo"><a id="error_tiempo_aplicacion_programa"></a></div>
        <script>document.querySelector('.tiempo_aplicacion_programa').innerHTML=traduccion['tiempo_aplicacion_programa'];</script>
        <br>

        <label class="descrip_interp_programa"></label>
        <textarea rows="5" cols="100" id='descrip_interp_programa' name='descrip_interp_programa'></textarea>
        <div id="div_error_descrip_interp_programa" class="errorcampo"><a id="error_descrip_interp_programa"></a></div>
        <script>document.querySelector('.descrip_interp_programa').innerHTML=traduccion['descrip_interp_programa'];</script>
        <br>

        <label id="label_fichero_programa" class="label_fichero_programa"></label>
        <input type='text' id='fichero_programa' name='fichero_programa'></input>
        <a id="link_fichero_programa" href="http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_fichero_programa" class="label_nuevo_fichero_programa"></label>
        <input type='file' id='nuevo_fichero_programa' name='nuevo_fichero_programa'></input>
        <div id="div_error_fichero_programa" class="errorcampo"><a id="error_fichero_programa"></a></div>
        <script>document.querySelector('.fichero_programa').innerHTML=traduccion['fichero_programa'];</script>
        <br>
        
        <label class="enlace_programa"></label>
        <input type='text' id='enlace_programa' name='enlace_programa'></input>
        <div id="div_error_enlace_programa" class="errorcampo"><a id="error_enlace_programa"></a></div>
        <script>document.querySelector('.enlace_programa').innerHTML=traduccion['enlace_programa'];</script>
        <br>

        <label class="formato_programa"></label>
        <input type='text' id='formato_programa' name='formato_programa'></input>
        <div id="div_error_formato_programa" class="errorcampo"><a id="error_formato_programa"></a></div>
        <script>document.querySelector('.formato_programa').innerHTML=traduccion['formato_programa'];</script>
        <br>

        <label class="modo_correccion_programa"></label>
        <input type='text' id='modo_correccion_programa' name='modo_correccion_programa'></input>
        <div id="div_error_modo_correccion_programa" class="errorcampo"><a id="error_modo_correccion_programa"></a></div>
        <script>document.querySelector('.modo_correccion_programa').innerHTML=traduccion['modo_correccion_programa'];</script>
        <br>

        <label class="modo_aplicacion_programa"></label>
        <input type='text' id='modo_aplicacion_programa' name='modo_aplicacion_programa'></input>
        <div id="div_error_modo_aplicacion_programa" class="errorcampo"><a id="error_modo_aplicacion_programa"></a></div>
        <script>document.querySelector('.modo_aplicacion_programa').innerHTML=traduccion['modo_aplicacion_programa'];</script>
        <br>

        <label id="label_imagen_programa" class="label_imagen_programa"></label>
        <input type='text' id='imagen_programa' name='imagen_programa'></input>
        <a id="link_imagen_programa" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_programa" class="label_nuevo_imagen_programa"></label>
        <input type='file' id='nuevo_imagen_programa' name='nuevo_imagen_programa'></input>
        <div id="div_error_imagen_programa" class="errorcampo"><a id="error_imagen_programa"></a></div>
        <script>document.querySelector('.imagen_programa').innerHTML=traduccion['imagen_programa'];</script>
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

//-----------------------------------------------------------------------------
// formularios

static createForm_ADD(){

    // resetear el formulario
    this.recargarform();

    // rellenar titulo formulario
    document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_ADD_programa"]; 

    document.getElementById('IU_form').action = 'javascript:Gestion_programa.ADD();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

    document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');

    document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');

    document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');

    document.getElementById('nombre_original_programa').setAttribute('onblur','Gestion_programa.comprobar_nombre_original_programa()');

    document.getElementById('autor_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_programa()');

    document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa()');

    document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa()');

    document.getElementById('ano_original_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_original_programa()');

    document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa()');

    document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa()');

    document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa()');

    document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion()');

    document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa()');

    document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa()');

    document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa()');

    document.getElementById('nuevo_fichero_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_fichero_programa()');
    document.getElementById("label_fichero_programa").style.display = '';
    document.getElementById("fichero_programa").value = '';
    document.getElementById('fichero_programa').setAttribute("readonly",true);
    document.getElementById("link_fichero_programa").style.display = '';

    document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa()');

    document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa()');

    document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa()');

    document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa()');

    document.getElementById('nuevo_imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_imagen_programa()');
    document.getElementById("label_imagen_programa").style.display = '';
    //document.getElementById("imagen_programa").style.display = '';
    document.getElementById('imagen_programa').value = ''   ;
    document.getElementById('imagen_programa').setAttribute("readonly",true);
    document.getElementById("link_imagen_programa").style.display = '';

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

static createForm_DELETE(datos_programa){
    // resetear el formulario
    this.recargarform();

    // rellenar titulo formulario
    document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_programa"]; 

    // se rellena el action del formulario
    document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

    // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
    document.getElementById('id_programa').value = datos_programa.id_programa;
    document.getElementById('id_programa').setAttribute("readonly",true);

    document.getElementById('nombre_programa').value = datos_programa.nombre_programa;
    document.getElementById('nombre_programa').setAttribute("readonly",true);

    document.getElementById('acronimo_programa').value = datos_programa.acronimo_programa;
    document.getElementById('acronimo_programa').setAttribute("readonly",true);

    document.getElementById('nombre_original_programa').value = datos_programa.nombre_original_programa;
    document.getElementById('nombre_original_programa').setAttribute("readonly",true);

    document.getElementById('autor_programa').value = datos_programa.autor_programa;
    document.getElementById('autor_programa').setAttribute("readonly",true);

    document.getElementById('autor_original_programa').value = datos_programa.autor_original_programa;
    document.getElementById('autor_original_programa').setAttribute("readonly",true);

    document.getElementById('ano_programa').value = datos_programa.ano_programa;
    document.getElementById('ano_programa').setAttribute("readonly",true);

    document.getElementById('ano_original_programa').value = datos_programa.ano_original_programa;
    document.getElementById('ano_original_programa').setAttribute("readonly",true);

    document.getElementById('requisitos_programa').value = datos_programa.requisitos_programa;
    document.getElementById('requisitos_programa').setAttribute("readonly",true);

    document.getElementById('poblacion_desde_programa').value = datos_programa.poblacion_desde_programa;
    document.getElementById('poblacion_desde_programa').setAttribute("readonly",true);

    document.getElementById('poblacion_hasta_programa').value = datos_programa.poblacion_hasta_programa;
    document.getElementById('poblacion_hasta_programa').setAttribute("readonly",true);

    document.getElementById('unidad_poblacion').value = datos_programa.unidad_poblacion;
    document.getElementById('unidad_poblacion').setAttribute("readonly",true);

    document.getElementById('tipo_programa').value = datos_programa.tipo_programa;
    document.getElementById('tipo_programa').setAttribute("readonly",true);

    document.getElementById('tiempo_aplicacion_programa').value = datos_programa.tiempo_aplicacion_programa;
    document.getElementById('tiempo_aplicacion_programa').setAttribute("readonly",true);

    document.getElementById('descrip_interp_programa').value = datos_programa.descrip_interp_programa;
    document.getElementById('descrip_interp_programa').setAttribute("readonly",true);
    
    document.getElementById('fichero_programa').value = datos_programa.fichero_programa;

    document.getElementById('fichero_programa').setAttribute("readonly",true);
    document.getElementById("link_fichero_programa").href += datos_programa.fichero_programa;
    document.getElementById("label_nuevo_fichero_programa").style.display = 'none';
    document.getElementById("nuevo_fichero_programa").style.display = 'none';

    document.getElementById('enlace_programa').value = datos_programa.enlace_programa;
    document.getElementById('enlace_programa').setAttribute("readonly",true);

    document.getElementById('formato_programa').value = datos_programa.formato_programa;
    document.getElementById('formato_programa').setAttribute("readonly",true);
    
    document.getElementById('modo_correccion_programa').value = datos_programa.modo_correccion_programa;
    document.getElementById('modo_correccion_programa').setAttribute("readonly",true);

    document.getElementById('modo_aplicacion_programa').value = datos_programa.modo_aplicacion_programa;
    document.getElementById('modo_aplicacion_programa').setAttribute("readonly",true);

    document.getElementById('imagen_programa').value = datos_programa.imagen_programa;
    document.getElementById('imagen_programa').setAttribute("readonly",true);
    document.getElementById("link_imagen_programa").href += datos_programa.imagen_programa;
    document.getElementById("label_nuevo_imagen_programa").style.display = 'none';
    document.getElementById("nuevo_imagen_programa").style.display = 'none';
        

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

static createForm_EDIT(datos_programa){
        
    // resetear el formulario
    this.recargarform();
    
    // rellenar titulo formulario
    document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_EDIT_programa"]; 

    // se rellena el action del formulario
    document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_EDIT();');

    document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
    document.getElementById('id_programa').value = datos_programa.id_programa;

    // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
    document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');
    document.getElementById('nombre_programa').value = datos_programa.nombre_programa;

    document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');
    document.getElementById('acronimo_programa').value = datos_programa.acronimo_programa;

    document.getElementById('nombre_original_programa').setAttribute('onblur','Gestion_programa.comprobar_nombre_original_programa()');
    document.getElementById('nombre_original_programa').value = datos_programa.nombre_original_programa;

    document.getElementById('autor_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_programa()');
    document.getElementById('autor_programa').value = datos_programa.autor_programa;

    document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa()');
    document.getElementById('autor_original_programa').value = datos_programa.autor_original_programa;

    document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa()');
    document.getElementById('ano_programa').value = datos_programa.ano_programa;

    document.getElementById('ano_original_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_original_programa()');
    document.getElementById('ano_original_programa').value = datos_programa.ano_original_programa;

    document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa()');
    document.getElementById('requisitos_programa').value = datos_programa.requisitos_programa;

    document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa()');
    document.getElementById('poblacion_desde_programa').value = datos_programa.poblacion_desde_programa;

    document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa()');
    document.getElementById('poblacion_hasta_programa').value = datos_programa.poblacion_hasta_programa;

    document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion()');
    document.getElementById('unidad_poblacion').value = datos_programa.unidad_poblacion;

    document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa()');
    document.getElementById('tipo_programa').value = datos_programa.tipo_programa;

    document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa()');
    document.getElementById('tiempo_aplicacion_programa').value = datos_programa.tiempo_aplicacion_programa;

    document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa()');
    document.getElementById('descrip_interp_programa').value = datos_programa.descrip_interp_programa;

    document.getElementById('fichero_programa').value = datos_programa.fichero_programa;
    document.getElementById('link_fichero_programa').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/'+ datos_programa.fichero_programa);
    document.getElementById('fichero_programa').setAttribute("readonly",true);
    document.getElementById('nuevo_fichero_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_fichero_programa()');

    document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa()');
    document.getElementById('enlace_programa').value = datos_programa.enlace_programa;

    document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa()');
    document.getElementById('formato_programa').value = datos_programa.formato_programa;

    document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa()');
    document.getElementById('modo_correccion_programa').value = datos_programa.modo_correccion_programa;

    document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa()');
    document.getElementById('modo_aplicacion_programa').value = datos_programa.modo_aplicacion_programa;
    
    document.getElementById('imagen_programa').value = datos_programa.imagen_programa;
    document.getElementById('link_imagen_programa').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/'+ datos_programa.imagen_programa);
    document.getElementById('imagen_programa').setAttribute("readonly",true);
    document.getElementById('nuevo_imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_imagen_programa()');

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

static createForm_SHOWCURRENT(datos_programa){
        
    // reutilizo la creación del delete porque me implica pocas modificaciones
    this.createForm_DELETE(datos_programa);
    
    // rellenar titulo del formulario
    document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SHOWCURRENT_programa"]; 

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
    document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SEARCH_programa"]; 

    document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

    document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa_SEARCH()');

    document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa_SEARCH()');

    document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa_SEARCH()');

    document.getElementById('nombre_original_programa').setAttribute('onblur','Gestion_programa.comprobar_nombre_original_programa_SEARCH()');

    document.getElementById('autor_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_programa_SEARCH()');

    document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa_SEARCH()');

    document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa_SEARCH()');

    document.getElementById('ano_original_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_original_programa_SEARCH()');

    document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa_SEARCH()');

    document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa_SEARCH()');

    document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa_SEARCH()');

    document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion_SEARCH()');

    document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa_SEARCH()');

    document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa_SEARCH()');

    document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa_SEARCH()');

    document.getElementById('nuevo_fichero_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_fichero_programa_SEARCH()');


    document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa_SEARCH()');

    document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa_SEARCH()');

    document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa_SEARCH()');

    document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa_SEARCH()');
    
    document.getElementById('nuevo_imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_imagen_programa_SEARCH()');
    
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

//-----------------------------------------------------------------------------
// submits
static comprobar_submit(){
    
    let valor = this.comprobar_id_programa();
    let valor1 = this.comprobar_nombre_programa();
    let valor2 = this.comprobar_acronimo_programa();
    let valor3 = this.comprobar_nombre_original_programa();
    let valor4 = this.comprobar_autor_programa();
    let valor5 = this.comprobar_autor_original_programa();
    let valor6 = this.comprobar_ano_programa();
    let valor7 = this.comprobar_ano_original_programa();
    let valor8 = this.comprobar_requisitos_programa();
    let valor9 = this.comprobar_poblacion_desde_programa();
    let valor10 = this.comprobar_poblacion_hasta_programa();
    let valor11 = this.comprobar_unidad_poblacion();
    let valor12 = this.comprobar_tipo_programa();
    let valor13 = this.comprobar_tiempo_aplicacion_programa();
    let valor14 = this.comprobar_descrip_interp_programa();
    let valor15 = this.comprobar_nuevo_fichero_programa();
    let valor16 = this.comprobar_enlace_programa();
    let valor17 = this.comprobar_formato_programa();
    let valor18 = this.comprobar_modo_correccion_programa();
    let valor19 = this.comprobar_modo_aplicacion_programa();
    let valor20 = this.comprobar_nuevo_imagen_programa();

    let resultado = (
        valor &&
        valor1 &&
        valor2 &&
        valor3 &&
        valor4 &&
        valor5 &&
        valor6 &&
        valor7 &&
        valor8 &&
        valor9 &&
        valor10 &&
        valor11 &&
        valor12 &&
        valor13 &&
        valor14 &&
        valor15 &&
        valor16 &&
        valor17 &&
        valor18 &&
        valor19 &&
        valor20 
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
        
    let valor = this.comprobar_id_programa();
    let valor1 = this.comprobar_nombre_programa();
    let valor2 = this.comprobar_acronimo_programa();
    let valor3 = this.comprobar_nombre_original_programa();
    let valor4 = this.comprobar_autor_programa();
    let valor5 = this.comprobar_autor_original_programa();
    let valor6 = this.comprobar_ano_programa();
    let valor7 = this.comprobar_ano_original_programa();
    let valor8 = this.comprobar_requisitos_programa();
    let valor9 = this.comprobar_poblacion_desde_programa();
    let valor10 = this.comprobar_poblacion_hasta_programa();
    let valor11 = this.comprobar_unidad_poblacion();
    let valor12 = this.comprobar_tipo_programa();
    let valor13 = this.comprobar_tiempo_aplicacion_programa();
    let valor14 = this.comprobar_descrip_interp_programa();
    let valor15 = this.comprobar_nuevo_fichero_programa_SEARCH();
    let valor16 = this.comprobar_enlace_programa();
    let valor17 = this.comprobar_formato_programa();
    let valor18 = this.comprobar_modo_correccion_programa();
    let valor19 = this.comprobar_modo_aplicacion_programa();
    let valor20 = this.comprobar_nuevo_imagen_programa_SEARCH();

    let resultado = (
        valor &&
        valor1 &&
        valor2 &&
        valor3 &&
        valor4 &&
        valor5 &&
        valor6 &&
        valor7 &&
        valor8 &&
        valor9 &&
        valor10 &&
        valor11 &&
        valor12 &&
        valor13 &&
        valor14 &&
        valor15 &&
        valor16 &&
        valor17 &&
        valor18 &&
        valor19 &&
        valor20 
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
    
    let valor = this.comprobar_id_programa_SEARCH();
    let valor1 = this.comprobar_nombre_programa_SEARCH();
    let valor2 = this.comprobar_acronimo_programa_SEARCH();
    let valor3 = this.comprobar_nombre_original_programa_SEARCH();
    let valor4 = this.comprobar_autor_programa_SEARCH();
    let valor5 = this.comprobar_autor_original_programa_SEARCH();
    let valor6 = this.comprobar_ano_programa_SEARCH();
    let valor7 = this.comprobar_ano_original_programa_SEARCH();
    let valor8 = this.comprobar_requisitos_programa_SEARCH();
    let valor9 = this.comprobar_poblacion_desde_programa_SEARCH();
    let valor10 = this.comprobar_poblacion_hasta_programa_SEARCH();
    let valor11 = this.comprobar_unidad_poblacion_SEARCH();
    let valor12 = this.comprobar_tipo_programa_SEARCH();
    let valor13 = this.comprobar_tiempo_aplicacion_programa_SEARCH();
    let valor14 = this.comprobar_descrip_interp_programa_SEARCH();
    let valor15 = this.comprobar_nuevo_fichero_programa_SEARCH();
    let valor16 = this.comprobar_enlace_programa_SEARCH();
    let valor17 = this.comprobar_formato_programa_SEARCH();
    let valor18 = this.comprobar_modo_correccion_programa_SEARCH();
    let valor19 = this.comprobar_modo_aplicacion_programa_SEARCH();
    let valor20 = this.comprobar_nuevo_imagen_programa_SEARCH();

    let resultado = (
        valor &&
        valor1 &&
        valor2 &&
        valor3 &&
        valor4 &&
        valor5 &&
        valor6 &&
        valor7 &&
        valor8 &&
        valor9 &&
        valor10 &&
        valor11 &&
        valor12 &&
        valor13 &&
        valor14 &&
        valor15 &&
        valor16 &&
        valor17 &&
        valor18 &&
        valor19 &&
        valor20 
    );

    if(resultado == true){
        this.SEARCH;
        DOM_class.cerrar_div_formulario();
    } else {
        //alert('Hay un error');
    }
    
    return resultado;    
}

//-----------------------------------------------------------------------------
// acciones a back

static async ADD(){  // async porque estamos utilizando un await indicando que esperamos por la respuesta de la función
    await this.peticionBackGeneral('IU_form', 'programa', 'ADD')
        .then((respuesta) => {  // en el then recogemos la respuesta del resolve() de la promesa
            if (respuesta['ok']){  // comprobamos si la operación ha sido correcta
                    this.resetearform();  // limpiamos el formulario para que el SEARCH lo haga sin criterios
                    this.SEARCH(); // llamamos al SEARCH para que haga la busqueda y nos muestre la tabla de resultados
            }
            else{
                    DOM_class.mostrardivmensajes(respuesta['code']); // como se ha producido un error mostramos el error de ACCION del back
            }
    });
}

static async EDIT(){
    await this.peticionBackGeneral('IU_form', 'programa', 'EDIT')
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
    await this.peticionBackGeneral('IU_form', 'programa', 'DELETE')
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
    await this.peticionBackGeneral('IU_form', 'programa', 'SEARCH')
    .then((respuesta) => {
        this.recargarform();
        let programa = new Gestion_programa('programa',respuesta['resource'],Array('id_programa','nombre_programa', 'acronimo_programa', 'nombre_original_programa','autor_programa', 'autor_original_programa', 'ano_programa', 'ano_original_programa', 'requisitos_programa', 'poblacion_desde_programa', 'poblacion_hasta_programa', 'unidad_poblacion', 'tipo_programa', 'tiempo_aplicacion_programa', 'descrip_interp_programa', 'fichero_programa', 'enlace_programa', 'formato_programa', 'modo_correccion_programa', 'modo_aplicacion_programa', 'imagen_programa')); programa.mostrartabla();
    });
}

//-----------------------------------------------------------------------------
//Comprobar campos

static comprobar_id_programa(){
    if (validacionesatomicas.size_minimo('id_programa',1)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('id_programa',6)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_max');
        return false;
    }

    if(validacionesatomicas.solo_digitos('id_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('id_programa');
    return true;
}

static comprobar_nombre_programa(){

   if (validacionesatomicas.size_minimo('nombre_programa',6)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('nombre_programa',60)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_max');
        return false;
    }
    
    if (validacionesatomicas.alfabeticos_tipo1('nombre_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('nombre_programa');
    return true;

}

static comprobar_acronimo_programa(){

    if (validacionesatomicas.size_minimo('acronimo_programa',3)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('acronimo_programa',20)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipo2('acronimo_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('acronimo_programa');
    return true;
}

static comprobar_nombre_original_programa(){
    
    if (validacionesatomicas.size_minimo('nombre_original_programa',6)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('nombre_original_programa',60)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipo1('nombre_original_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('nombre_original_programa');
    return true;
}

static comprobar_autor_programa(){    
    if (validacionesatomicas.size_minimo('autor_programa',6)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('autor_programa',50)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipo1('autor_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('autor_programa');
    return true;
}

static comprobar_autor_original_programa(){
    if (validacionesatomicas.size_minimo('autor_original_programa',6)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('autor_original_programa',50)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipo1('autor_original_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('autor_original_programa');
    return true;
}

static comprobar_ano_programa(){
    if (validacionesatomicas.size_minimo('ano_programa',4)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam');
        return false;
    }

    if (validacionesatomicas.size_maximo('ano_programa',4)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam');
        return false;
    }

    if(validacionesatomicas.solo_digitos('ano_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_formato');
        return false;
    }

    if(validacionesatomicas.validarAno('ano_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_fecha');
        return false;
    }

    DOM_class.mostrarexitovalor('ano_programa');
    return true;
}

static comprobar_ano_original_programa(){
    if (validacionesatomicas.size_minimo('ano_original_programa',4)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_tam');
        return false;
    }

    if (validacionesatomicas.size_maximo('ano_original_programa',4)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_tam');
        return false;
    }

    if(validacionesatomicas.solo_digitos('ano_original_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_formato');
        return false;
    }

    if(validacionesatomicas.validarAno('ano_original_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_fecha');
        return false;
    }

    DOM_class.mostrarexitovalor('ano_original_programa');
    return true;
}

static comprobar_requisitos_programa(){
    if (validacionesatomicas.size_minimo('requisitos_programa',6)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('requisitos_programa',300)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipo4('requisitos_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('requisitos_programa');
    return true;
}

static comprobar_poblacion_desde_programa(){
    if (validacionesatomicas.size_minimo('poblacion_desde_programa',1)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('poblacion_desde_programa',2)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_max');
        return false;
    }

    if(validacionesatomicas.solo_digitos('poblacion_desde_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_formato');
        return false;
    }
    

    DOM_class.mostrarexitovalor('poblacion_desde_programa');
    return true;
}

static comprobar_poblacion_hasta_programa(){
    if (validacionesatomicas.size_minimo('poblacion_hasta_programa',1)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('poblacion_hasta_programa',2)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_max');
        return false;
    }

    if(validacionesatomicas.solo_digitos('poblacion_hasta_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_formato');
        return false;
    }
    
    DOM_class.mostrarexitovalor('poblacion_hasta_programa');
    return true;
}

static comprobar_unidad_poblacion(){
    if (validacionesatomicas.validarOpcion('unidad_poblacion')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion','KO_unidad_poblacion_valor');
        return false;
    }

    DOM_class.mostrarexitovalor('unidad_poblacion');
    return true;
}

static comprobar_tipo_programa(){
    if (validacionesatomicas.validarOpcion('tipo_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('tipo_programa','KO_tipo_programa_valor');
        return false;
    }

    DOM_class.mostrarexitovalor('tipo_programa');
    return true;
}

static comprobar_tiempo_aplicacion_programa(){
    if (validacionesatomicas.size_minimo('tiempo_aplicacion_programa',1)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa',4)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_max');
        return false;
    }

    if(validacionesatomicas.solo_digitos('tiempo_aplicacion_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_formato');
        return false;
    }
    
    DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
    return true;
}

static comprobar_descrip_interp_programa(){
    if (validacionesatomicas.size_minimo('descrip_interp_programa',100)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('descrip_interp_programa',5000)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipo3('descrip_interp_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('descrip_interp_programa');
    return true;
}

static comprobar_nuevo_fichero_programa(){
    if (validacionesatomicas.size_minimof('nuevo_fichero_programa',7)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximof('nuevo_fichero_programa',60)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.validarArchivo('nuevo_fichero_programa', ["pdf", "doc", "docx"], 2000000)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_form_fich');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipof('nuevo_fichero_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('fichero_programa');
    return true;
}

static comprobar_enlace_programa(){
    if (validacionesatomicas.size_minimo('enlace_programa',10)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximo('enlace_programa',100)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_max');
        return false;
    }

    DOM_class.mostrarexitovalor('enlace_programa');
    return true;
}

static comprobar_formato_programa(){
    if (validacionesatomicas.validarOpcion('formato_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('formato_programa','KO_formato_programa_valor');
        return false;
    }

    DOM_class.mostrarexitovalor('formato_programa');
    return true;
}

static comprobar_modo_correccion_programa(){
    if (validacionesatomicas.validarOpcion('modo_correccion_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa','KO_modo_correccion_programa_valor');
        return false;
    }

    DOM_class.mostrarexitovalor('modo_correccion_programa');
    return true;
}

static comprobar_modo_aplicacion_programa(){
    if (validacionesatomicas.validarOpcion('modo_aplicacion_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa','KO_modo_aplicacion_programa_valor');
        return false;
    }

    DOM_class.mostrarexitovalor('modo_aplicacion_programa');
    return true;
}

static comprobar_nuevo_imagen_programa(){
    if (validacionesatomicas.size_minimof('nuevo_imagen_programa',7)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_min');
        return false;
    }

    if (validacionesatomicas.size_maximof('nuevo_imagen_programa',60)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_max');
        return false;
    }

    if (validacionesatomicas.validarArchivo('nuevo_imagen_programa', ["jpg", "jpeg"], 20000)){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_form_fich');
        return false;
    }

    if (validacionesatomicas.alfabeticos_tipof('nuevo_imagen_programa')){
    }
    else{
        DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_formato');
        return false;
    }

    DOM_class.mostrarexitovalor('imagen_programa');
    return true;
}

//Comprobar campos para SEARCH
static comprobar_id_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('id_programa')){
        DOM_class.mostrarexitovalor('id_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimo('id_programa',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_min');
            return false;
        }
    
        if (validacionesatomicas.size_maximo('id_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_max');
            return false;
        }
    
        if(validacionesatomicas.solo_digitos('id_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_formato');
            return false;
        }
    
        DOM_class.mostrarexitovalor('id_programa');
        return true;
    }
}

static comprobar_nombre_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('nombre_programa')){
        DOM_class.mostrarexitovalor('nombre_programa');
        return true;
    } else {
        if(validacionesatomicas.size_minimo('nombre_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_programa',60)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_max');
            return false;
        }
        
        if (validacionesatomicas.alfabeticos_tipo1('nombre_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_programa');
        return true;
    }
}

static comprobar_acronimo_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('acronimo_programa')){
        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimo('acronimo_programa',3)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('acronimo_programa',20)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipo2('acronimo_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;
    }
}

static comprobar_nombre_original_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('nombre_original_programa')){
        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimo('nombre_original_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_original_programa',60)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipo1('nombre_original_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
    }
}

static comprobar_autor_programa_SEARCH(){    
    if(validacionesatomicas.campoVacio('autor_programa')){
        DOM_class.mostrarexitovalor('autor_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimo('autor_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_programa',50)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipo1('autor_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_programa');
        return true;
    }
}

static comprobar_autor_original_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('autor_original_programa')){
        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimo('autor_original_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_original_programa',50)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipo1('autor_original_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;
    }
}

static comprobar_ano_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('ano_programa')){
        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimo('ano_programa',4)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam');
            return false;
        }

        if (validacionesatomicas.size_maximo('ano_programa',4)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam');
            return false;
        }

        if(validacionesatomicas.solo_digitos('ano_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_formato');
            return false;
        }

        if(validacionesatomicas.validarAno('ano_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_fecha');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    }
}

static comprobar_ano_original_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('ano_original_programa')){
        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('ano_original_programa',4)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_tam');
            return false;
        }

        if (validacionesatomicas.size_maximo('ano_original_programa',4)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_tam');
            return false;
        }

        if(validacionesatomicas.solo_digitos('ano_original_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_formato');
            return false;
        }

        if(validacionesatomicas.validarAno('ano_original_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_fecha');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;
    }
}

static comprobar_requisitos_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('requisitos_programa')){
        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('requisitos_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('requisitos_programa',300)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipo4('requisitos_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;
    }
}

static comprobar_poblacion_desde_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('poblacion_desde_programa')){
        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('poblacion_desde_programa',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('poblacion_desde_programa',2)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_max');
            return false;
        }

        if(validacionesatomicas.solo_digitos('poblacion_desde_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_formato');
            return false;
        }
        

        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;
    }
}

static comprobar_poblacion_hasta_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('poblacion_hasta_programa')){
        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('poblacion_hasta_programa',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('poblacion_hasta_programa',2)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_max');
            return false;
        }

        if(validacionesatomicas.solo_digitos('poblacion_hasta_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_formato');
            return false;
        }
        
        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;
    }
}

static comprobar_unidad_poblacion_SEARCH(){
    if(validacionesatomicas.campoVacio('unidad_poblacion')){
        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;
        } else {
        if (validacionesatomicas.validarOpcion('unidad_poblacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion','KO_unidad_poblacion_valor');
            return false;
        }

        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;
    }
}

static comprobar_tipo_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('tipo_programa')){
        DOM_class.mostrarexitovalor('tipo_programa');
        return true;
        } else {
        if (validacionesatomicas.validarOpcion('tipo_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('tipo_programa','KO_tipo_programa_valor');
            return false;
        }

        DOM_class.mostrarexitovalor('tipo_programa');
        return true;
    }
}

static comprobar_tiempo_aplicacion_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('tiempo_aplicacion_programa')){
        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('tiempo_aplicacion_programa',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa',4)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_max');
            return false;
        }

        if(validacionesatomicas.solo_digitos('tiempo_aplicacion_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_formato');
            return false;
        }
        
        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;
    }
}

static comprobar_descrip_interp_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('descrip_interp_programa')){
        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('descrip_interp_programa',100)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('descrip_interp_programa',5000)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipo3('descrip_interp_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;
    }
}

static comprobar_nuevo_fichero_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('nuevo_fichero_programa')){
        DOM_class.mostrarexitovalor('fichero_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimof('nuevo_fichero_programa',7)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximof('nuevo_fichero_programa',60)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.validarArchivo('nuevo_fichero_programa', ["pdf", "doc", "docx"], 2000000)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_form_fich');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipof('nuevo_fichero_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('fichero_programa');
        return true;
    }
}

static comprobar_enlace_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('enlace_programa')){
        DOM_class.mostrarexitovalor('enlace_programa');
        return true;
        } else {
        if (validacionesatomicas.size_minimo('enlace_programa',10)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('enlace_programa',100)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_max');
            return false;
        }

        DOM_class.mostrarexitovalor('enlace_programa');
        return true;
    }
}

static comprobar_formato_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('formato_programa')){
        DOM_class.mostrarexitovalor('formato_programa');
        return true;
        } else {
        if (validacionesatomicas.validarOpcion('formato_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('formato_programa','KO_formato_programa_valor');
            return false;
        }

        DOM_class.mostrarexitovalor('formato_programa');
        return true;
    }
}

static comprobar_modo_correccion_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('modo_correccion_programa')){
        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;
        } else {
        if (validacionesatomicas.validarOpcion('modo_correccion_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa','KO_modo_correccion_programa_valor');
            return false;
        }

        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;
    }
}

static comprobar_modo_aplicacion_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('modo_aplicacion_programa')){
        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;
        } else {
        if (validacionesatomicas.validarOpcion('modo_aplicacion_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa','KO_modo_aplicacion_programa_valor');
            return false;
        }

        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;
    }
}

static comprobar_nuevo_imagen_programa_SEARCH(){
    if(validacionesatomicas.campoVacio('nuevo_imagen_programa')){
        DOM_class.mostrarexitovalor('imagen_programa');
        return true;
    } else {
        if (validacionesatomicas.size_minimof('nuevo_imagen_programa',7)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximof('nuevo_imagen_programa',60)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_max');
            return false;
        }

        if (validacionesatomicas.validarArchivo('nuevo_imagen_programa', ["jpg", "jpeg"], 20000)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_form_fich');
            return false;
        }

        if (validacionesatomicas.alfabeticos_tipof('nuevo_imagen_programa')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('imagen_programa');
        return true;
    }
}
}