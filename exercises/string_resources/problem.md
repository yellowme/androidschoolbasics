# String Resources

Welcome to the third Android School Basics exercise
Developed by Yellowme.

----------------------------------------------------------------------
Make the app have an editText (Text Field, Plain text) that will have a hint with a string resource named 'hint_text_info' value 
and a textView that will display the text of a string resource named 'yellow_world'.

    CONDITIONS: Activity: MainActivity with {
                    EditText with id: 'editTextUser'
                    TextView with id: 'textViewUser'
                 }

                String resources {
                    Name: yellow_world    value: 'Yellow World!'
                    Name: hint_text_info  value: whatever you want  ex. 'banana' 
                }

----------------------------------------------------------------------

## Hints

Property hint: is the background text that you can see when there is no text.


The string resources file is where you should specify all your UI strings. 
Doing so allows you to manage all UI strings in a single location, which makes it easier to find, update, and localize 
(compared to hard-coding strings in your layout or app code).

    How can you do it?

1- Open the Project window and then select res > values > strings.xml.

2- Click Open editor at the top of the editor window. This opens the Translations Editor, which provides a simple interface 
for adding and editing your default strings, and helps keep all your translated strings organized.

3- Click Add Key  to create a new string as the "yellow_world" for the text box.

4- Enter "yellow_world" for the key name.

5- Enter "Yellow World!" for the value.

6- Click OK.

7- Add another key named "hint_text_info" with a value of "banana" or whatever you want ;)


    Now you can set these strings for each view. So return to the layout file by clicking activity_main.xml 
    in the tab bar, and add the strings as follows:

1- Click the textView in the layout and, if the Properties window isn't already visible on the right, 
click Properties  on the right sidebar.

2- Locate the text property and then click Pick a Resource  to the right of the text box. In the dialog that appears, 
double-click on the key name string you want to use from the list. 
    
    You should do this with the editText too.

3- If you still viewing the text in the editText, also delete the value for the text property to see the hint text.

With this, you should be able to see the string values in your UI.

----------------------------------------------------------------------
To know more about what we did in here, you can check this links:
    [EditText](https://goo.gl/3JSnAR)
    [String Resources](https://goo.gl/xJTHQo)


To complete this exercise run 'androidbasics verify this' inside the downloaded project directory and let's verify this exercise.




