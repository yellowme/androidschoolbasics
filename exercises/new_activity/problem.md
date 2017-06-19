# New Activity

Welcome to a new Android School Basics exercise
Developed by Yellowme.

----------------------------------------------------------------------
Make the app have an editText (Text Field) and a button that when clicked, should launch a new activity, and that
Activity must have a textView in which it will display the text that was put in the editText.

    CONDITIONS: Activity: MainActivity with {
                 EditText with id: 'editTextUser'
                 Button with   id: 'buttonUser'
                 }

                 Activity: DisplayMessageActivity with {
                 TextView with id: 'textViewUser2'
                 }

                 The EXTRA_MESSAGE of the intent to create the second activity, should have a key "MESSAGE"

----------------------------------------------------------------------

## Hints

After completing the previous lesson, you have an app that shows an activity (a single screen) with a text field 
and a button.

In this exercise, you’ll add some code to MainActivity that starts a new activity to display the message when 
the user taps the button.

-----
### Respond to the button

Add a method in MainActivity.java that's called by the button as follows:

1- In the file app > java > mx.yellowme.androidschool > MainActivity.java, add the startActivity() method stub as shown below:

    /** Called when the user taps the Send button */
    public void startActivity(View view) {
        // Do something in response to button
    }

2- You may see an error because Android Studio cannot resolve the View class used as the method argument. 
So click to place your cursor on the View declaration, and then perform a Quick Fix by pressing Alt + Enter 
(or Option + Enter on Mac). (If a menu appears, select Import class.)

3- Now return to the activity_main.xml file to call this method from the button:

4- Click to select the button in the Layout Editor.

5- In the Properties window, locate the onClick property and select startActivity [MainActivity] from the drop-down list.
Now when the button is tapped, the system calls the startActivity() method.

Take note of the details in this method that are required in order for the system to recognize it as compatible 
with the android:onClick attribute. 

Specifically, the method must declare the following:

    * Public access
    * A void return value
    * A View as the only parameter (it is the View object that was clicked)


Next, you’ll fill in this method to read the contents of the text field and deliver that text to another activity.

-----
### Build an Intent

An Intent is an object that provides runtime binding between separate components, such as two activities.
The Intent represents an app’s "intent to do something." 
You can use intents for a wide variety of tasks, but in this lesson, your intent starts another activity.

In MainActivity.java, add the startActivity() code, as shown here:

    /** Called when the user taps the Send button */
    public void startActivity(View view) {
        Intent intent = new Intent(this, DisplayMessageActivity.class);
        EditText editText = (EditText) findViewById(R.id.editTextUser);
        String message = editText.getText().toString();
        intent.putExtra("MESSAGE", message);
        startActivity(intent);
    }

Android Studio will again encounter Cannot resolve symbol errors, so press Alt + Enter (or Option + Return on Mac)
to import all the neccesary packages.

    An error remains for DisplayMessageActivity, but that's okay; you'll fix that in the next section.

Here's what's going on in startActivity():

    * The Intent constructor takes two parameters:
        - A Context as its first parameter (this is used because the Activity class is a subclass of Context)
        - The Class of the app component to which the system should deliver the Intent 
          (in this case, the activity that should be started).

    * The putExtra() method adds the EditText's value to the intent. An Intent can carry data types as key-value pairs called extras. 
       Your key is a string "MESSAGE". But it's a good practice to define keys for intent extras using your app's package name as a prefix. This ensures the keys are unique, in case your app interacts with other apps. You can search about this in internet.

    * The startActivity() method starts an instance of the DisplayMessageActivity specified by the Intent. Now you need to create that class.

-----
### Create the second activity

1- In the Project window, right-click the app folder and select New > Activity > Empty Activity.

2- In the Configure Activity window, enter "DisplayMessageActivity" for Activity Name and click Finish 
(leave all other properties set to the defaults).

Android Studio automatically does three things:

    * Creates the DisplayMessageActivity.java file.

    * Creates the corresponding activity_display_message.xml layout file.

    * Adds the required <activity> element in AndroidManifest.xml.

If you run the app and tap the button on the first activity, the second activity starts but is empty. This is because the second activity uses the empty layout provided by the template.

-----
### Display the message

Add a textView with id: textViewUser2 to the new activity as you learned in previous lessons.

Now you will modify the second activity to display the message that was passed by the first activity.

1- In DisplayMessageActivity.java, add the following code to the onCreate() method:

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_message);
        
        // Get the Intent that started this activity and extract the string
        Intent intent = getIntent();
        String message = intent.getStringExtra("MESSAGE");

        // Capture the layout's TextView and set the string as its text
        TextView textView = (TextView) findViewById(R.id.textViewUser2);
        textView.setText(message);
    }

2- Press Alt + Enter (or Option + Return on Mac) to import missing classes.

-----
### Add up navigation

Each screen in your app that is not the main entrance (all screens that are not the "home" screen) 
should provide navigation so the user can return to the logical parent screen in the app hierarchy 
by tapping the Up button in the app bar.

All you need to do is declare which activity is the logical parent in the AndroidManifest.xml file. 
So open the file at app > Manifests > AndroidManifest.xml, locate the <activity> tag 
for DisplayMessageActivity and replace it with the following:

    <activity android:name=".DisplayMessageActivity"
            android:parentActivityName=".MainActivity" >
        <!-- The meta-data tag is required if you support API level 15 and lower -->
        <meta-data
            android:name="android.support.PARENT_ACTIVITY"
            android:value=".MainActivity" />
    </activity>

The Android system now automatically adds the Up button in the app bar.

With all this, you should be able to open a new activity.

----------------------------------------------------------------------
To know more about what we did in here, you can check this links:
    [EditText](https://goo.gl/3JSnAR)
    [Button](https://goo.gl/nx4zVL)
    [Intent](https://goo.gl/5Zj7C9)


To complete this exercise run 'androidbasics verify this' inside the downloaded project directory and let's verify this exercise.




