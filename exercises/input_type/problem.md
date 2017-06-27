# Input Type

Welcome to a new Android School Basics exercise
Developed by Yellowme.

----------------------------------------------------------------------
An easy one to apply some of the things you have learned in previous exercises. 
Let's make an ultra mini calculator (only will sum two numbers)

Make the app have two editText (Text Field, Plain text) with inputType NUMBER that will be for 2 numbers, one button,
to make the sum, and a textView that will display the result of the sum.

    CONDITIONS: Activity: MainActivity with {
                    EditText with id: 'editTextUser1'
                    EditText with id: 'editTextUser2'
                    TextView with id: 'textViewResult'
                    Button   with id: 'buttonUser'
                 }

----------------------------------------------------------------------

## Hints

property inputType: The type of data being placed in a text field, used to help an input method decide 
how to let the user enter text. This is for the keyboard type, you will see how it changes with every input type.

    In this exercise, you'll use the NUMBER type, this one shows you a number keyboard, so it's easier to the user
    to enter numbers instead of letters.

Declare a method to do the sum. You should get the editText of your activity in your java class.

    EditText editText1 = (EditText) findViewById(R.id.editTextUser1);

Also, you need to take the text of the editText and parse it to Integer.

    Integer.parseInt(editText1.getText().toString());

With this, you already have the number of the editText, so now, you can do it with the other editText and do the sum.

The only thing left, is set the result in the textView.
    Note: when you set text in an editText, it should be String.

    TextView textView = (TextView) findViewById(R.id.textViewResult);
    textView.setText(String.valueOf(sum));

Remember set the onClick method to the Button.



----------------------------------------------------------------------
To know more about what we did in here, you can check this links:
    [EditText](https://goo.gl/3JSnAR)
    [inputType](https://goo.gl/RnaZ7U)


To complete this exercise run 'androidbasics verify this' inside the downloaded project directory and let's verify this exercise.




