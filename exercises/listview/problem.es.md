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

Lo nuevo de este ejercicio, es que usted tendrá que utilizar un listView, fijar un onClicklister a sus elementos
Y utilizar una string-array. Pero no te preocupes, es más fácil de lo que piensas :D.

1- Lo primero es crear una nueva Actividad llamada 'Menu'. Lo haz hecho antes.

2- Ahora, Modifique el diseño del menú. En /res/layout/activity_menu.xml, elimine el TextView del diseño
Y poner un ListView (En el pallete, la sección Contenedores) para mostrar los países.
    Nota: No olvide establecer el ID del listView con 'listViewUser'


3- Añade los strings necesarios para el menú. En /res/values/strings.xml, agregue un string-array
en <resources>. Pon tus 20 países favoritos.
La descripción de el string array es el siguiente:

    <string-array name="countries">
        <item>México</item>
        <item>India</item>
        <item>Bélgica</item>
        <item>Alemania</item>
        <item>Wakanda</item>
    </string-array>

4- Algo impresionante del listView, es que puedes definir el diseño de los elementos de la lista.
Esto significa que usted puede crear una lista muy genial. Pero en este ejercicio, lo mantendremos sencillo.
Cree un nuevo archivo list_item.xml en /res/layout. Simplemente haga clic derecho sobre la carpeta de diseño y haga clic en
new > Layout resource file. En la ventana 'New resource file', establezca el nombre del layout con 'list_item'.
Cambiar el elemento raíz por  un TextView. Y dejar las otras opciones con el valor predeterminado. Haga clic en Aceptar.
En realidad, este archivo crea un TextView para los elementos de la lista.

    Nota: Puede cambiar las propiedades de textView para que luzca como desees.
    Este textView se repetirá para cada elemento de la lista.


5- Lo siguiente, es establecer un arrayAdapter al listView para ver el string-array.
Para hacerlo, sólo tiene que agregar este código al onCreate() de la clase Menu:
    
    // Obtener la referencia al elemento ListView en el layout main.xml
    ListView menuList = (ListView) findViewById(R.id.ListView_menu);

    // Crear un array de strings y llenarla con los elementos de la
    // string array declarada en strings.xml
    String[] items = getResources().getStringArray(R.array.menu_items);

    // Cree un arrayAdapter para crear el menú con los elementos de lista que están siendo
    // establecidos según list_item.xml y los nombres de elementos de items[]
    // array creado anteriormente
    ArrayAdapter<String> adapt = new ArrayAdapter<String>(this,R.layout.list_item, items);
    menuList.setAdapter(adapt);

Si ejecutas tu aplicación ahora (sé que ya configuraste tu botón para iniciar la actividad del menú)
Verá una lista con todos los países, EXCELENTE :D .


6- Lo único que falta es establecer el onClick() para cada elemento de la lista y generar un toast con el nombre del país.
Sólo tiene que añadir este código al onCreate() de la clase Menu.
    
    // hace que los elementos de menú sean accionables declarando un listener de onclick para
    // cada uno de ellos.
    // Utilice "Toast" para mostrar el nombre del elemento de menú durante un corto período
    // en la pantalla en un cuadro de mensaje
    menuList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
        public void onItemClick(AdapterView<?> parent, View itemClicked, int position, long id) {

            // Cuando se hace clic, muestra un toast con el texto TextView
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