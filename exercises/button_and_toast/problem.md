# Button and Toast

Welcome to the first Android School Basics EXERCISE
Developed by Yellowme.

----------------------------------------------------------------------
Make the app to have an editText (Text Field) and a button, and when we click the button it should make a toast
and the toast should have the text that we put in the editText.

    CONDITIONS: editText with id : 'editTextUser'
                button with   id : 'buttonUser'

----------------------------------------------------------------------

## Hints

In the last lesson you learned how to put an element in the app, you just need to look for the element you want
and drag it to the screen phone. Now you're going to use that information and you're going to interact with those
elements and his properties.

For the button exist a propertie 'onclick', this propertie is to say what is gonna happen when we click on it.
The value of the propertie will be a function name that receive an Object 'View' as parameter. This function should
be in the MainActivity class (MainActivity.java file).
    
    Note: In the java file, you're gonna be programming in java. 

For this exercise you need to create a function with the name you want, and use the information of the elements. In this
case, the text from the editText. You can get the instance of an element like this:

    EditText editTextElement = (EditText) findViewById(R.id.editTextUser); // findViewById(R.id.'Your element id')

And with this instance you can get a lot of things from the element, for example, the text:
    
    editTextElement.getText().toString();

For the toast, you just need to generate it once you have what it's going to show. To generate an instance of a 'Toast' object
you just need to do:

    Toast.makeText(getApplicationContext(),'the text you want to show',Toast.LENGTH_SHORT)  // There is algo a Toast.LENGTH_LONG

and once you have the instance of the toast, call the method 'show()'

    toastVariable.show();

If you have everything correct in your method, you can run your app, and it should work fine.

----------------------------------------------------------------------
To know more about what we did in here, you can check this links:
    [EditText](https://goo.gl/3JSnAR)
    [Button](https://goo.gl/nx4zVL)
    [Toast](https://goo.gl/j43QRO)


To complete this exercise run 'androidbasics verify this' inside the downloaded project directory and let's verify this exercise.




