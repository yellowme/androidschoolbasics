# Botón y toast

Bienvenido al primer EJERCICIO de ANDROID SCHOOL BASICS
Desarrollado por Yellowme.

-------------------------------------------------- 
Haz que la app tenga un editText (Text Field) y un botón que cuando sea clickeado, debe mostrar un toast, y ese
toast debe mostrar el texto que se puso en el editText.

    CONDICIONES: EditText con id: 'editTextUser'
                Button con   id: 'buttonUser'

-------------------------------------------------- 

# Pistas

En la última lección aprendiste cómo poner un elemento en la app, recuerda que sólo tienes que buscar el elemento que quieres y
arrastrarlo a la pantalla. Ahora vas a usar esa información y vas a interactuar con esos elementos y sus propiedades.

Para el botón existe una propiedad 'onclick', esta propiedad es para indicar lo que va a suceder cuando hacemos clic en él.
El valor de la propiedad será el nombre de una función que recibirá un objeto 'View' como parámetro. Esta función debe
Estar en la clase MainActivity (app > java > androidschool > MainActivity.java).

    Nota: En el archivo java, vas a programar en java (Por si no era obvio :P).

Para este ejercicio necesita crear una función con el nombre que desee y utilizar la información de los elementos. En este
caso, el texto del editText. Puede obtener la instancia de un elemento y asignarlo a una variable de esta forma:

    EditText editTextElement = (EditText) findViewById(R.id.editTextUser); // findViewById(R.id.'Your element id')

Y con esta instancia puede obtener un montón de cosas del elemento, por ejemplo, el texto:

    editTextElement.getText().toString();

Para el toast, solo tienes que generar una instancia una vez que tengas todo lo que va a mostrar. 
Para generar una instancia del objeto 'Toast' solo tienes que hacer:

    Toast.makeText(getApplicationContext(),"el texto que desea mostrar", Toast.LENGTH_SHORT)  // Tambien puedes usar Toast.LENGTH_LONG

Y una vez que tenga la instancia del toast, llame al método 'show ()' del toast.

    toastVariable.show();

Si tienes todo correcto, puedes ejecutar tu aplicación, y revisar si funciona como debe.

--------------------------------------------------
Para saber más sobre lo que se hizo, puedes consultar los siguientes enlaces:

[EditText] (https://goo.gl/3JSnAR)
[Button] (https://goo.gl/nx4zVL)
[Toast] (https://goo.gl/j43QRO)


Para completar este ejercicio, ejecute 'androidbasics verify this' dentro del directorio del proyecto android descargado.