# Tipo de input

Bienvenido a un nuevo ejercicio de ANDROID SCHOOL BASICS
Desarrollado por Yellowme.

-------------------------------------------------- 
Una fácil para aplicar algunas de las cosas que has aprendido en ejercicios anteriores. 
Vamos a hacer una ultra mini calculadora (sólo sumará dos números)

Haga que la aplicación tenga dos editText (Text Field, Plain text) con inputType NUMBER que serán para 2 números, un botón,
Para hacer la suma, y un textView que mostrará el resultado de la suma.

     CONDICIONES: Actividad: MainActivity con {
                     EditText con id: 'editTextUser1'
                     EditText con id: 'editTextUser2'
                     TextView con id: 'textViewResult'
                     Button   con id: 'buttonUser'
                  }

-------------------------------------------------- 

# Pistas

Propiedad inputType: El tipo de datos que se colocan en un campo de texto, usado para ayudar a un método de entrada a decidir
Cómo permitir que el usuario introduzca texto. Esto es para el tipo de teclado, verá cómo cambia con cada tipo de entrada.

    En este ejercicio, usará el tipo NUMBER, este le mostrará un teclado numérico, por lo que es más fácil para el usuario
    introducir números en lugar de letras.

Declare un método para hacer la suma. Debe obtener el editText de su actividad en su clase java.

    EditText editText1 = (EditText) findViewById(R.id.editTextUser1);

También, usted necesita tomar el texto del editText y convertirlo a entero.

    Integer.parseInt(editText1.getText().ToString ());

Con esto, ya tienes el número del editText, así que ahora, puedes hacerlo con el otro editText y hacer la suma.

Lo único que queda, es establecer el resultado en el textView.
    Nota: cuando se establece el texto en un editText, debe ser String.

    TextView textView = (TextView) findViewById (R.id.textViewResult);
    textView.setText(String.valueOf(suma));

Recuerde configurar el método onClick en el botón.

--------------------------------------------------
Para saber más sobre lo que hicimos aquí, puedes consultar los siguientes enlaces:
    [EditText](https://goo.gl/3JSnAR)
    [inputType](https://goo.gl/RnaZ7U)


Para completar este ejercicio, ejecute "androidbasics verify this" dentro del directorio del proyecto descargado y vamos a verificar este ejercicio.