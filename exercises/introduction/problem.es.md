# Introduccion a android

Bienvenido a Android School Basics
Desarrollado por Yellowme.

Las primeras dos lecciones son para enseñarte lo super básico de android, los demás serán ejercicios.

En esta lección the mostraremos cómo abrir un proyecto android con android studio, cómo crear tu primera activity y te describiremos algunos archivos básicos del proyecto.

--------------------
## Vamos a empezar!
--------------------

1- En Android Studio, abre el proyecto base que descargaste:
    * Selecciona "abrir un proyecto android estudio existente".
    * Selecciona el directorio del proyecto descargado.
    * Click en siguiente.
    
    * No actualices el gradle, es importante para este proyecto en particular.

    Datos del proyecto descargado
    Nombre de la app: "androidschool"
    Dominio de la compañia: "mx.yellowme"

    En este proyecto trabajaremos con el sdk 23, que es para android 6.0 en adelante.
    Si eres curioso acerca de cómo las diferentes versiones de SDK afectan a tu app, lee "Supporting Different Platform Versions" (https://goo.gl/dYHfzP).

    Nota: * Si tiene un mensaje para agregar algunos archivos a git, no lo haga, haga clic en cancelar, porque vamos a usar git
            y puede causar algunos problemas. En caso de que el gradle quiera sincronizar, está bien, es para configurar algunos archivos, 
            haga clic en sincronizar.
          * Si tiene un error 'Failed to find Build tools revision', solo haz click en 'install build tools and sync project'

2- Crea tu primera activity
    * Primero, asegurate de que la ventana Proyecto está abierta  (selecciona View > Tool Windows > Project).
    * Haz click derecho en la carpeta "app" y selecciona new > activity > empty activity.
    * En la pantalla de personalizacion de la activity, manten los valores por default y haz click en Finish.

    * Has creado tu primera activity en android!!!

3- Ahora tomate un momento para revisar los archivos mas importantes.
    * Revisa que la pestaña "project" este seleccionado "Android" en la lista drop-down en la cima de esa ventana. Puedes ver los siguientes archivos:

    * app > java > mx.yellowme.androidschool > MainActivity.java
      Esta es la activity principal (el punto de entrada de tu app). Cuando construyas y corras la app, el sistema lanza una instancia de esta activity
      (https://goo.gl/xgtUdC) y carga su layout.
    
    * app > res > layout > activity_main.xml
      Este archivo XML define el layout para la UI de la interfaz. Contiene un elemento TextView(https://goo.gl/19TpGm) con el texto "Hello world!".

    * app > manifests > AndroidManifest.xml
      El archivo manifest(https://goo.gl/xyQwV3) describe las caracteristicas fundamentales de la app y define cada uno de sus componentes.

    * Gradle Scripts > build.gradle
      Puedes ver dos archivos con este nombre: uno para el proyecto y uno para el módulo "app". Cada modulo tiene su propio archivo build.gradle, 
      pero este proyecto actualmente tiene un solo modulo. Mayormente trabajarás con el archivo build.gradle del modulo para configurar como la 
      herramienta Gradle compila y construye tu app. Para mas informacion acerca de este archivo, lee Configure Your Build(https://goo.gl/jMDWmR).

Ahora solo corrre ´androidbasics verify this´ dentro del directorio del proyecto en la consola para marcar esta lección como completada.

* Para correr la app, continua en la siguiente lección, crearás tu primer "Yellow world!"