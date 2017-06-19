# Nueva Activity

Bienvenido a un nuevo ejercicio de ANDROID SCHOOL BASICS
Desarrollado por Yellowme.

-------------------------------------------------- 
Haz que la app tenga un editText (Text Field) y un botón que cuando sea clickeado, debe lanzar una nueva activity, y esa
activity debe tener un textView en el que mostrará el texto que se puso en el editText.

    CONDICIONES: Clase: MainActivity con {
                 EditText con id: 'editTextUser'
                 Button con   id: 'buttonUser'
                 }

                 Clase: DisplayMessageActivity con {
                 TextView con id: 'textViewUser2'
                 }

                 El EXTRA_MESSAGE del intent para crear la segunda actividad, tendrá una llave "MESSAGE"

-------------------------------------------------- 

# Pistas

Después de completar la lección anterior, tiene una aplicación que muestra una actividad (una sola pantalla) con un campo de texto
Y un botón.

En este ejercicio, agregará código a MainActivity para que inicie una nueva actividad para mostrar el mensaje cuando
el usuario pulse el botón.

-----
### Responder al botón

Agregue un método en MainActivity.java para que sea llamado por el botón de la siguiente manera:

1- En el archivo app> java> mx.yellowme.androidschool> MainActivity.java, agregue el método startActivity() 
como se muestra a continuación:

    / ** Se llama cuando el usuario pulsa el botón Enviar * /
    Public void startActivity (View view) {
        // Hacer algo en respuesta al botón
    }

2- Es posible que aparezca un error porque Android Studio no puede resolver la clase View utilizada como argumento del método.
Haga clic para colocar el cursor en la declaración de View y, a continuación, realice una corrección rápida pulsando Alt + Intro
(Option + Intro en Mac). (Si aparece un menú, seleccione Importar clase.)

3- Ahora regrese al archivo activity_main.xml para llamar a este método desde el botón:

4- Haga clic para seleccionar el botón en el Editor de diseño.

5- En la ventana Propiedades, busque la propiedad onClick y seleccione startActivity [MainActivity] en la lista desplegable.
Ahora, cuando se pulsa el botón, el sistema llama al método startActivity().

Tome nota de los detalles de este método que se requieren para que el sistema lo reconozca como compatible
Con el atributo android: onClick.

Específicamente, el método debe declarar lo siguiente:

    * Acceso público
    * Un valor de retorno vacío
    * Una vista como el único parámetro (es el objeto View que se hizo clic)


A continuación, rellene este método para leer el contenido del campo de texto y entregar ese texto a otra actividad.

-----
### Construir un intent

Una Intent es un objeto que proporciona enlace de tiempo de ejecución entre componentes independientes, como dos actividades.
La Intent representa el "Intentento de una aplicación" de hacer algo.
Puede utilizar intents para una amplia variedad de tareas, pero en este ejercicio, su Intent inicia otra actividad.

En MainActivity.java, agregue el código startActivity(), como se muestra aquí:

    / ** Se llama cuando el usuario pulsa el botón Enviar * /
    public void startActivity(View view) {
        Intent intent = new Intent(this, DisplayMessageActivity.class);
        EditText editText = (EditText) findViewById(R.id.editTextUser);
        String message = editText.getText().toString();
        intent.putExtra("MESSAGE", message);
        startActivity(intent);
    }

Android Studio volverá a encontrar que No puede resolver los errores de símbolo, por lo que debe presionar
Alt + Enter (Optión + Enter en Mac) Para importar todos los paquetes necesarios.

    Un error permanece para DisplayMessageActivity, pero está bien; Lo arreglarás en la siguiente sección.

Esto es lo que está pasando en startActivity():

    * El constructor Intent toma dos parámetros:
        - Un Contexto como su primer parámetro (se utiliza porque la clase Activity es una subclase de Contexto)
        - La Clase del componente de aplicación al que el sistema debe entregar el Propósito
          (En este caso, la actividad que debe iniciarse).

    * El método putExtra () agrega el valor del EditText a la Intent. Una Intent puede llevar tipos de datos 
    como pares clave-valor llamados extras. Su clave es una cadena "MESSAGE". Pero es una buena práctica 
    definir claves para los extras de la Intent usando el nombre del paquete de su aplicación como prefijo. 
    Esto garantiza que las claves sean únicas, en caso de que la aplicación interactúe con otras aplicaciones.
    Usted puede buscar acerca de esto en Internet.

    * El método startActivity() inicia una instancia de la DisplayMessageActivity especificada por el Intent.
    Ahora necesitas crear esa clase.

-----
### Crea la segunda actividad

1- En la ventana Proyecto, haga clic con el botón derecho en la carpeta de la aplicación y seleccione New> Activity> Empty activity.

2- En la ventana de Configuracion activity, ingrese "DisplayMessageActivity" para el nombre de la actividad y haga clic en Finalizar
(Deje todas las demás propiedades establecidas en los valores predeterminados).

Android Studio hace automáticamente tres cosas:

    * Crea el archivo DisplayMessageActivity.java.

    * Crea el correspondiente archivo de presentación activity_display_message.xml.

    * Añade el elemento <activity> necesario en AndroidManifest.xml.

Si ejecuta la aplicación y pulsa el botón en la primera actividad, la segunda actividad se inicia pero está vacía. Esto se debe a que la segunda actividad utiliza la disposición vacía proporcionada por la plantilla.

-----
### Mostrar el mensaje

Agregue un textView con id: textViewUser2 a la nueva actividad como aprendió en lecciones anteriores.

Ahora va a modificar la segunda actividad para mostrar el mensaje que fue pasado por la primera actividad.

1- En DisplayMessageActivity.java, agregue el siguiente código al método onCreate ():

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_message);
        
        //Obtiene el Intent que inició esta actividad y extrae la cadena
        Intent intent = getIntent();
        String message = intent.getStringExtra("MESSAGE");

        //Captura el textView del layout y establece la cadena como su texto
        TextView textView = (TextView) findViewById(R.id.textViewUser2);
        textView.setText(message);
    }


--------------------------------------------------
Para saber más sobre lo que se hizo, puedes consultar los siguientes enlaces:
[EditText](https://goo.gl/3JSnAR)
[Button](https://goo.gl/nx4zVL)
[Intent](https://goo.gl/5Zj7C9)


Para completar este ejercicio, ejecute 'androidbasics verify this' dentro del directorio del proyecto android descargado.