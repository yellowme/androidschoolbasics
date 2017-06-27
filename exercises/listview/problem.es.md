# ListView

Bienvenido a un nuevo ejercicio de ANDROID SCHOOL BASICS
Desarrollado por Yellowme.

-------------------------------------------------- 
Hagamos una actividad con nombres de países.
Haga que la aplicación tenga 2 actividades diferentes, una MainActivity que contendrá un botón para 
iniciar una nueva actividad (Menú). Esta actividad tiene que tener un textView con 20 nombres 
de países, y al hacer clic en uno de ellos, verá un toast con el nombre del país.

     CONDICIONES: Actividad: MainActivity con {
                     Button con id: 'button'
                  }

                 Actividad: Menu con {
                     ListView con id: 'listViewCountries'
                 }

                 Recursos String {
                     Tipo: 'String-array'  Nombre: 'countries'  valor: 20 diferentes nombres de países
                 }

-------------------------------------------------- 

# Pistas

El nuevo de este ejercicio, es que usted tendrá que utilizar un listView, fijar un onClicklister a sus elementos
Y utilizar una matriz de cadenas. Pero no te preocupes, es más fácil de lo que piensas: D.

1- La primera es crear una nueva Actividad llamada 'Menú'. Usted ya ahora cómo.

2- Ahora, Modifique el diseño del menú. En /res/layout/activity_menu.xml, elimine el TextView del diseño
Y poner un ListView (En el pallete, la sección Contenedores) para mostrar los países.
    Nota: No olvide establecer el ID del listView con 'listViewUser'


3- Añada cadenas necesarias para el menú. En /res/values/strings.xml, agregue una cadena
Array en el cuerpo <resources>. Pon tus 20 países favoritos.
La descripción de la matriz de cadena es la siguiente:

    <string-array name="countries">
        <item>México</item>
        <item>India</item>
        <item>Bélgica</item>
        <item>Alemania</item>
        <item>Wakanda</item>
    </string-array>

4- Algo impresionante de la lista, es que puedes definir el diseño de los elementos de la lista de menús.
Esto significa que usted puede crear una lista muy agradable. Pero en este ejercicio, lo mantendremos sencillo.
Cree un nuevo archivo list_item.xml en / res / layout. Simplemente haga clic derecho sobre la carpeta de diseño y haga clic en
Nuevo> Archivo de recursos de diseño. En las ventanas 'Nuevo archivo de recursos', establezca el nombre del diseño con 'list_item'.
Cambiar el elemento raíz para TextView. Y dejar las otras opciones con el valor predeterminado. Y haga clic en Aceptar.
En realidad, este archivo crea un TextView para los elementos de la lista.

    Nota: Puede cambiar las propiedades de textView para que parezca que desea.
    Este textView se repetirá para cada elemento del textView.


5- El siguiente, es establecer un arrayAdapter a la listaVer para ver la matriz de cadena.
Para hacerlo, sólo tiene que agregar este código a la onCreate () de la clase Menu:
    
    // Obtener la referencia al elemento ListView en el diseño main.xml
    ListView menuList = (ListView) findViewById(R.id.ListView_menu);

    // Crear una matriz de cadenas y llenarla con los elementos de la
    // string array declarada en strings.xml
    String[] items = getResources().getStringArray(R.array.menu_items);

    // Cree un adaptador de matriz para crear el menú con los elementos de lista que están siendo
    // establecidos según list_item.xml y los nombres de elementos de los elementos []
    // array creado anteriormente
    ArrayAdapter<String> adapt = new ArrayAdapter<String>(this,R.layout.list_item, items);
    menuList.setAdapter(adapt);

Si ejecutas tu aplicación ahora (ya sé que ya configuras tu botón para iniciar la actividad del menú)
Verá una lista con todos los países, MUY BUENO: D.


6- Todo a la izquierda es establecer el onClick () para cada elemento de la lista y generar un brindis con el nombre del país.
Sólo tiene que añadir este código a la onCreate () de la clase Menu.
    // hace que los elementos de menú sean accionables declarando un listener de onclick para
    // cada uno de ellos.
    // Utilice "Toast" para mostrar el nombre del elemento de menú durante un corto período
    // en la pantalla en un cuadro de mensaje
    menuList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
        public void onItemClick(AdapterView<?> parent, View itemClicked, int position, long id) {

            // Cuando se hace clic, muestra un brindis con el texto TextView
            Toast.makeText(getApplicationContext(), ((TextView) itemClicked).getText(), Toast.LENGTH_SHORT).show();
        }
    });


En este punto, usted debe tener su actividad funcionando correctamente.

--------------------------------------------------
Para saber más sobre lo que hicimos aquí, puedes consultar los siguientes enlaces:
    [ListView](https://goo.gl/uhdfst)
    [String Resources](https://goo.gl/xJTHQo)
    [ArrayAdapter](https://goo.gl/4dnYtS)


Para completar este ejercicio, ejecute "androidbasics verify this" dentro del directorio del proyecto descargado y vamos a verificar este ejercicio.