# Recursos String

Bienvenido al tercer ejercicio de ANDROID SCHOOL BASICS
Desarrollado por Yellowme.

-------------------------------------------------- 
Haz que la app tenga un editText (Text Field) que tendrá un hint con valor de un recurso string llamado 'hint_text_info'
y un textView que tenga un texto con valor de un recurso de string llamado 'yellow_world'

    CONDICIONES: Clase: MainActivity con {
                    EditText con id: 'editTextUser'
                    TextView con id: 'textViewUser'
                 }

                Recursos String {
                    Nombre: yellow_world    valor: 'Yellow World!'
                    Nombre: hint_text_info  valor: Lo que quieras ej. 'banana'

                }

-------------------------------------------------- 

# Pistas

propiedad hint: es el texto de fondo que puede ver cuando no hay texto.


El archivo de recursos string es donde debe especificar todos los strings de UI.
Hacerlo te permite administrar todas las strings de UI en una sola ubicación, lo que facilita la búsqueda, actualización y localización
(En comparación con strings de codificación en su diseño o código de aplicación).

    ¿Cómo puedes hacerlo?

1- Abra la ventana Proyecto y luego seleccione res> values> strings.xml.

2- Haga clic en Abrir editor en la parte superior de la ventana del editor. Esto abre el Editor de traducciones, que proporciona una interfaz sencilla
Para agregar y editar sus strings predeterminadas, y ayuda a mantener todas sus strings traducidas organizadas.

3- Haga clic en Agregar clave para crear una nueva string como "yellow_world" para el cuadro de texto.

4- Introduzca "yellow_world" para el nombre de la clave.

5- Introduzca "Yellow World!" Para el valor.

6- Haga clic en Aceptar.

7- Añadir otra clave llamada "hint_text_info" con un valor de "banana" o lo que quieras ;)

    Ahora puede establecer estas strings para cada view. Vuelva al archivo de diseño haciendo clic en activity_main.xml
    En la barra de pestañas y agregue las strings de la siguiente manera:

1- Haga clic en textView en el diseño y, si la ventana Propiedades ya no es visible a la derecha,
Haga clic en Propiedades en la barra lateral derecha.

2- Localice la propiedad de texto y, a continuación, haga clic en Seleccionar un recurso a la derecha del cuadro de texto. En el diálogo que aparece,
Haga doble clic en la cadena de nombre de clave que desee utilizar de la lista.
    
    Usted debe hacer esto con el editText también.

3- Si sigue viendo el texto en el editText, también elimine el valor de la propiedad text para ver el hint text.

Con esto, debería ser capaz de ver los valores de las strings en su interfaz de usuario.

--------------------------------------------------
Para saber más sobre lo que hicimos aquí, puedes consultar los siguientes enlaces:
    [EditText] (https://goo.gl/3JSnAR)
    [Recursos strings] (https://goo.gl/xJTHQo)


Para completar este ejercicio, ejecute "androidbasics verify this" dentro del directorio del proyecto descargado y vamos a verificar este ejercicio.