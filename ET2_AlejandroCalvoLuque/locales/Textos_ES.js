let textos_ES={
    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'', // action realizada con exito
    'SQL_KO':'', // action falla en la operacion en la bd
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'dni_es_nulo_KO':'No se ha enviado el dni',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'controlador_invalido':'', // no se envia la entidad
    'action_invalido':'', // no se envia la accion

    // atributos programa
    'id_programa':'Id programa',
    'nombre_programa':'Nombre programa',
    'acronimo_programa':'Acronimo programa',
    'nombre_original_programa':'Nombre original programa',
    'autor_programa':'Autor programa',
    'autor_original_programa':'Autor original programa',
    'ano_programa':'Año programa',
    'ano_original_programa':'Año original programa',
    'requisitos_programa':'Requisitos programa',
    'poblacion_desde_programa':'Poblacion desde programa',
    'poblacion_hasta_programa':'Poblacion hasta programa',
    'unidad_poblacion':'Unidad poblacion',
    'tipo_programa':'Tipo programa',
    'tiempo_aplicacion_programa':'Tiempo aplicacion programa',
    'descrip_interp_programa':'Descripcion programa',
    'fichero_programa':'Fichero programa',
    'enlace_programa':'Enlance programa',
    'formato_programa':'Formato programa',
    'modo_correccion_programa':'Modo correcion programa',
    'modo_aplicacion_programa':'Modo aplicacion programa',
    'imagen_programa':'Foto programa',

    // valores
    'valor1':'Intervención',

    // acciones

    "ADD":"Añadir",
    "titulo_form_ADD_programa":"Añadir un programa",
    "titulo_form_EDIT_programa":"Modificar el programa",
    "titulo_form_DELETE_programa":"Borrar un programa",
    "titulo_form_SEARCH_programa":"Buscar un programa",
    "titulo_form_SHOWCURRENT_programa":"Detalles del programa",

    // general pagina
    
    "titulo_pagina_programa":"Gestión de programa",

    //id_programa:

    "KO_id_programa_tam_min":"El id programa debe tener como mínimo un dígito",
    "KO_id_programa_tam_max":"El id programa puede tener como máximo seis dígitos",
    "KO_id_programa_formato":"Id programa contiene caracteres no permitidos, solo acepta dígitos",

    //nombre_programa:

    "KO_nombre_programa_tam_min":"Nombre programa debe tener como mínimo 6 caracteres de longitud",
    "KO_nombre_programa_tam_max":"Nombre programa puede tener como máximo 60 caracteres de longitud",
    "KO_nombre_programa_formato":"Nombre programa contiene caracteres no permitidos, solo acepta alfabéticos con acentos, ñ y espacios",

    //acronimo_programa:

    "KO_acronimo_programa_tam_min":"Acronimo programa debe tener como mínimo 3 caracteres de longitud",
    "KO_acronimo_programa_tam_max":"Acronimo programa puede tener como máximo 20 caracteres de longitud",
    "KO_acronimo_programa_formato":"Acronimo programa contiene caracteres no permitidos, solo acepta alfabéticos sin acentos ni espacios",

    //nombre_original_programa:

    "KO_nombre_original_programa_tam_min":"Nombre original programa debe tener como mínimo 6 de longitud",
    "KO_nombre_original_programa_tam_max":"Nombre original programa puede tener como máximo 60 de longitud",    
    "KO_nombre_original_programa_formato":"Nombre original programa contiene caracteres no permitidos, solo acepta alfabéticos con acentos, ñ y espacios",

    //autor_programa:

    "KO_autor_programa_tam_min":"Autor programa debe tener como mínimo 6 de longitud",
    "KO_autor_programa_tam_max":"Autor programa puede tener como máximo 50 de longitud",
    "KO_autor_programa_formato":"Autor programa contiene caracteres no permitidos, solo acepta alfabéticos con acentos, ñ y espacios",

    //autor_original_programa:

    "KO_autor_original_programa_tam_min":"Autor original programa debe tener como mínimo 6 de longitud",
    "KO_autor_original_programa_tam_max":"Autor original programa puede tener como máximo 50 de longitud",
    "KO_autor_original_programa_formato":"Autor original programa contiene caracteres no permitidos, solo acepta alfabéticos con acentos, ñ y espacios",

    //ano_programa:

    "KO_ano_programa_tam":"Ano programa solo puede tener 4 dígitos",
    "KO_ano_programa_formato":"Ano programa solo puede tener dígitos",
    "KO_ano_programa_fecha":"Ano programa no puede ser superior al año actual",
    
    //ano_original_programa:

    "KO_ano_original_tam":"Ano original programa solo puede tener 4 dígitos",
    "KO_ano_original_formato":"Ano original programa solo puede tener dígitos",
    "KO_ano_original_fecha": "Ano original programa no puede ser superior al año actual",
    
    //requisitos_programa:

    "KO_requisitos_programa_tam_min":"Requisitos programa debe como mínimo 6 caracteres",
    "KO_requisitos_programa_tam_max":"Requisitos programa puede tener como máximo 300 caracteres",
    "KO_requisitos_programa_formato":"Requisitos programa contiene caracteres no permitidos, solo permite alfabéticos con acentos, ñ, espacios y signos de puntuación",    

    //poblacion_desde_programa:

    "KO_poblacion_desde_programa_tam_min":"Población desde programa debe tener como mínimo un dígito",
    "KO_poblacion_desde_programa_tam_max": "Población desde programa puede tener como máximo dos dígitos",
    "KO_poblacion_desde_programa_formato":"Población desde programa solo puede tener dígitos",
    
    //poblacion_hasta_programa:

    "KO_poblacion_hasta_programa_tam_min":"Población hasta programa debe tener como mínimo un dígito",
    "KO_poblacion_hasta_programa_tam_max": "Población hasta programa puede tener como máximo dos dígitos",
    "KO_poblacion_hasta_programa_formato": "Población hasta programa solo puede tener dígitos",

    //unidad_poblacion:

    "KO_unidad_poblacion_valor": "Unidad población solo admite los valores MESES y AÑOS",

    //tipo_programa:

    "KO_tipo_programa_valor": "Unidad población solo admite los valores EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN",

    //tiempo_aplicacion_programa:

    "KO_tiempo_aplicacion_programa_tam_min":"Tiempo aplicación programa debe tener como mínimo un dígito",
    "KO_tiempo_aplicacion_programa_tam_max":"Tiempo aplicación programa puede tener como máximo cuatro dígitos",
    "KO_tiempo_aplicacion_programa_formato":"Tiempo aplicación programa solo puede tener dígitos",

    //descrip_interp_programa:

    "KO_descrip_interp_programa_tam_min":"Descripción interp programa debe tener como mínimo 100 caracteres de longitud",
    "KO_descrip_interp_programa_tam_max": "Descripción interp programa puede tener como máximo 5000 caracteres de longitud",
    "KO_descrip_interp_programa_formato":"Descripción interp programa contiene algún caracter no permitido, solo acepta alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro",

    //fichero_programa:

    "KO_fichero_programa_tam_min":"Fichero programa debe tener como mínimo 7 caracteres de longitud",
    "KO_fichero_programa_tam_max":"Fichero programa puede tener como máximo 60 caracteres de longitud",
    "KO_fichero_programa_formato":"Fichero programa contiene caracteres no permitidos, solo acepta alfabéticos sin acentos ni ñ ni espacios",
    "KO_fichero_programa_form_fich":"Fichero programa solo puede ser pdf, doc o docx y tamaño de fichero menor de 2000000 bytes",

    //enlace_programa:

    "KO_enlace_programa_tam_min":"Enlace programa debe tener como mínimo 10 caracteres de longitud",
    "KO_enlace_programa_tam_max": "Enlace programa puede tener como máximo 100 caracteres de longitud",
    "KO_enlace_programa_tam_formato":"Enlace programa contiene caracteres no permitidos, solo acepta alfabéticos sin acentos ni ñ ni espacios",

    //formato_programa:

    "KO_formato_programa_valor":"Unidad población solo admite los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO",

    //modo_correccion_programa:

    "KO_modo_correccion_programa_valor": "Unidad población solo admite los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO",

    //modo_aplicacion_programa:

    "KO_modo_aplicacion_programa_valor":"Unidad población solo admite los valores INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO",

    //imagen_programa:

    "KO_imagen_programa_tam_min":"Imagen programa debe tener como mínimo 7 caracteres de longitud",
    "KO_imagen_programa_tam_max":"Imagen programa puede tener como máximo 60 caracteres de longitud",
    "KO_imagen_programa_formato": "Imagen programa contiene caracteres no permitidos, solo acepta alfabéticos sin acentos ni ñ ni espacios",
    "KO_imagen_programa_form_fich":"Imagen programa solo puede ser jpg o jpeg y tamaño de fichero menor de 20000 bytes",

    // atributos publicacion
    'id_publicacion':'Id publicacion',
    'titulo_publicacion':'Titulo publicacion',
    'autor_publicacion':'Autor publicacion',
    'fecha_publicacion':'Fecha publicacion',
    'area_publicacion':'Area publicacion',
    'texto_publicacion':'Texto publicacion',
    'imagen_publicacion':'Imagen publicacion',

    // general pagina
    
    "titulo_pagina_publicacion":"Gestión de publicacion",

    // acciones

    "titulo_form_ADD_publicacion":"Añadir un publicacion",
    "titulo_form_EDIT_publicacion":"Modificar el publicacion",
    "titulo_form_DELETE_publicacion":"Borrar un publicacion",
    "titulo_form_SEARCH_publicacion":"Buscar un publicacion",
    "titulo_form_SHOWCURRENT_publicacion":"Detalles del publicacion",

    //id_publicacion:

    "KO_id_publicacion_tam_min":"El id publicacion debe tener como mínimo un dígito",
    "KO_id_publicacion_tam_max":"El id publicacion puede tener como máximo seis dígitos",
    "KO_id_publicacion_formato":"Id publicacion contiene caracteres no permitidos, solo acepta dígitos",

    //titulo_publicacion:

    "KO_titulo_publicacion_tam_min":"Titulo publicacion debe tener como mínimo 6 caracteres de longitud",
    "KO_titulo_publicacion_tam_max":"Titulo publicacion puede tener como máximo 80 caracteres de longitud",
    "KO_titulo_publicacion_formato":"Titulo publicacion contiene caracteres no permitidos, solo acepta alfabéticos con acentos, ñ y espacios",
    

    //autor_publicacion:

    "KO_autor_publicacion_tam_min":"Autor publicacion debe tener como mínimo 6 de longitud",
    "KO_autor_publicacion_tam_max":"Autor publicacion puede tener como máximo 40 de longitud",
    "KO_autor_publicacion_formato":"Autor publicacion contiene caracteres no permitidos, solo acepta alfabéticos con acentos, ñ y espacios",

    //fecha_publicacion:

    "KO_fecha_publicacion_vacio":"Hay que seleccionar una fecha",
    "KO_fecha_publicacion_mayor":"Fecha publicacion no puede ser mayor al dia actual",

    //area_publicacion:

    "KO_area_publicacion_tam_min":"El area publicacion debe tener como mínimo un dígito",
    "KO_area_publicacion_tam_max":"El area publicacion puede tener como máximo seis dígitos",
    "KO_area_publicacion_formato":"Id publicacion contiene caracteres no permitidos, solo acepta dígitos",


    //texto_publicacion:

    "KO_texto_publicacion_tam_min":"El texto publicacion puede tener como mínimo 30 caracteres",
    "KO_texto_publicacion_tam_max":"El texto publicacion puede tener como máximo 8000 caracteres",
    "KO_texto_publicacion_formato":"Area publicacion contiene caracteres no permitidos, solo acepta caracteres ascii",


    //imagen_publicacion:

    "KO_imagen_publicacion_tam_min":"Imagen publicacion debe tener como mínimo 7 caracteres de longitud",
    "KO_imagen_publicacion_tam_max":"Imagen publicacion puede tener como máximo 60 caracteres de longitud",
    "KO_imagen_publicacion_formato": "Imagen publicacion contiene caracteres no permitidos, solo acepta alfabéticos sin acentos ni ñ ni espacios",
    "KO_imagen_publicacion_form_fich":"Imagen publicacion solo puede ser jpg o jpeg y tamaño de fichero menor de 20000 bytes",

    // mensajes accion
    "id_publicacion_es_nulo_KO":"Debe indicarse un id_publicacion"
};

let traduccion = textos_ES;