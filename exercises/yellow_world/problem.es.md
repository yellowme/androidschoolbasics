# Yellow World!

Bienvenido a una nueva lección de Android School Basics
Desarrollado por Yellowme.

Esta lección te muestra cómo agregar y modificar un textView(vista de texto) en el proyecto Android y cómo ejecutar la aplicación.

--------------------
## Vamos a jugar con el editor de diseño!
--------------------

    Nota: Esta lección espera que esté utilizando Android Studio 2.3 o superior y que haya seguido la lección anterior
          Para abrir el proyecto Android.

* Para empezar, configure su espacio de trabajo de la siguiente manera:

1- En la ventana Project de Android Studio, abre app> res> layout> activity_main.xml.

2- Para hacer más espacio para el Editor de diseño, oculta la ventana Project seleccionando View> Tool Windows> Proyect 
(o haz click en Project En el lado izquierdo de Android Studio).

3- Si el editor muestra la fuente XML, haga clic en la pestaña 'Design' en la parte inferior de la ventana.

4- En la pestaña 'Palette', busca los Widgets y arrastra un "Plain TextView" en la pantalla, en la parte que más te guste.

5- En el lado izquierdo, puedes ver la pestaña 'properties'. Allí puedes editar todas las propiedades de tu elemento, por ejemplo, el
El color de fondo, el id, el texto, y más.

6- Cambia el textView 'id' a 'textViewUser'

7- Normalmente, usarías 'Hello World', pero lo haremos un poco diferente. Cambia el 'texto' del textView a 'Yellow World!'

8- Puedes cambiar las propiedades del textView como desees, tal vez puedes poner un tamaño más grande? , Prueba con las propiedad 
'textSize' y asignale Un valor de "50sp", o tratar de cambiar la propiedad que quieras, con excepción del id y del texto 
(Eso es lo que vamos a evaluar :D).

Para ver cuáles son todas las propiedades, lee la documentación de la clase "View" (https://goo.gl/7c5Spn)

    Nota: El sp (Scale-independent Pixels) es la mejor manera de poner el tamaño del texto, ya que es escalado por la preferencia de 
    tamaño de fuente del usuario.

9- Ahora tenemos nuestro primer Yellow World! en android.

--------------------
## Vamos a ejecutar la aplicación
--------------------

### Ejecutar en un dispositivo real

Configure su dispositivo de la siguiente manera:

1- Conecte su dispositivo a su máquina de desarrollo con un cable USB. Si se está desarrollando en Windows, es posible que deba 
instalar el controlador USB adecuado para su dispositivo. Para obtener ayuda sobre cómo instalar controladores, 
consulte el documento OEM USB Drivers.

2- Habilite la depuración USB en su dispositivo accediendo a Configuración> Opciones de desarrollador.

    Nota: en Android 4.2 y versiones más recientes, las opciones de desarrollador se ocultan de forma predeterminada. 
    Para hacerlo disponible, vaya a Configuración> Acerca del teléfono y haga clic en numero de compilacion siete veces. 
    Vuelva a la pantalla anterior para encontrar las opciones de desarrollador.

Ejecute la aplicación desde Android Studio de la siguiente manera:

1- En Android Studio, haga clic en el módulo de la aplicación en la ventana Proyecto y luego seleccione Ejecutar> Ejecutar 
(o haga clic en Ejecutar en la barra de herramientas).

2- En la ventana Seleccionar destino de despliegue, seleccione su dispositivo y haga clic en Aceptar.

Android Studio instala la aplicación en el dispositivo conectado y lo inicia.

Eso es su "Yellow World!" Corriendo en su dispositivo! Para empezar a desarrollar, continúe con la siguiente lección.


--------------------
### Ejecutar en un emulador

    Nota: Antes de ejecutar la aplicación en un emulador, debe crear una definición de Dispositivo Virtual de Android (AVD). 
    Una definición AVD especifica las características de un teléfono Android, una tableta, Android Wear o un dispositivo de 
    Android TV que desee simular en el emulador de Android.

* Crear una definición AVD como sigue:

1- Inicie el Administrador de dispositivos virtuales de Android seleccionando Herramientas> Android> Administrador de AVD o haciendo 
clic en el icono de AVD Manager en la barra de herramientas.

2- En la pantalla Sus dispositivos virtuales, haga clic en Crear dispositivo virtual.

3- En la pantalla Seleccionar hardware, seleccione un dispositivo de teléfono, como Pixel y, a continuación, haga clic en Siguiente.

4- En la pantalla Imagen del sistema, haga clic en Descargar para una de las imágenes del sistema recomendadas. Acepta los términos 
para completar la descarga.

5- Una vez completada la descarga, seleccione la imagen del sistema de la lista y haga clic en Siguiente.

6- En la siguiente pantalla, deje todas las configuraciones como están y haga clic en Finalizar.

7- De vuelta en la pantalla Sus dispositivos virtuales, seleccione el dispositivo que acaba de crear y haga clic en Iniciar este AVD 
en el emulador.

    Mientras el emulador se inicia, cierre la ventana del Administrador de dispositivos virtuales de Android y vuelva a su proyecto 
    para poder ejecutar la aplicación:

1- Una vez arrancado el emulador, haga clic en el módulo de aplicación en la ventana Proyecto y luego seleccione Ejecutar> Ejecutar 
(o haga clic en Ejecutar en la barra de herramientas).

2- En la ventana Seleccionar destino de despliegue, seleccione el emulador y haga clic en Aceptar.

    Android Studio instala la aplicación en el emulador y la inicia.


Eso es "Yellow World!" Corriendo en el emulador! Para empezar a desarrollar, continúe con la siguiente lección.

    Nota: En esta lección le mostramos cómo usar la pestaña 'design', pero también puede usar la pestaña 'text' y escribir todos 
    los elementos con sus propiedades para construir de una manera más rápida la interfaz.

    Para completar este ejercicio, ejecute "androidbasics verify this" dentro del directorio del proyecto descargado.