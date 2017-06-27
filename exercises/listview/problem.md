# ListView

Welcome to a new Android School Basics exercise
Developed by Yellowme.

----------------------------------------------------------------------
Let's make an activity with countries names.
Make the app have 2 different activities, a MainActivity that will contain a button to start a new activity (Menu).
This activity has to have a textView with 20 countries names, and when we click in one of them, you will see a toast
with the name of the country.

    CONDITIONS: Activity: MainActivity with {
                    Button with   id: 'button'
                 }

                Activity: Menu with {
                    ListView with   id: 'listViewCountries'
                }

                String resources {
                    Type: 'String-array'  Name: 'countries'   value: 20 different countries
                }

----------------------------------------------------------------------

## Hints

The new of this exercise, is that you'll have to use a listView, set an onClicklister to their elements
and use a string-array. But don't worry, it's easier than you think :D .

1- The first is to create a new Activity called 'Menu'. You already now how.

2- Now, Modify the menu layout. In /res/layout/activity_menu.xml, delete the TextView of the layout
and put a ListView (In the pallete, Containers section) to display the countries.
    Note: Don't forget to set the ID of the listView with 'listViewUser'


3- Add strings that are necessary for the menu. In /res/values/strings.xml, add a string
array in the <resources> body. Put your 20 favorite countries.
The description of the string array is as follows:

    <string-array name="countries">
        <item>México</item>
        <item>India</item>
        <item>Bélgica</item>
        <item>Alemania</item>
        <item>Wakanda</item>
    </string-array>

4- Something awesome of the listView, is that you can define the layout of the elements of the menu list.
This means that you can create a very nice listView. But in this exercise, we'll keep it simple.
Create a new file list_item.xml in/res/layout. Just right click over the layout folder and click in
new > Layout resource file. In the 'New resource file' windows, set the name of the layout with 'list_item'.
Change the root element for TextView. and let the other options with the default. And click OK.
This file actually creates a TextView for the items in the list.

    Note: You can change your textView properties to look like you want.
    This textView will repeat for each element of the textView.


5- The next, is to set an arrayAdapter to the listView to see the string array.
To do it, you just need to add this code to the onCreate() of the Menu class:
    
    // Get the reference to the ListView item in the main.xml layout
    ListView menuList = (ListView) findViewById(R.id.ListView_menu);

    // Create an array of strings and populate it with the items from the
    // string array declared in strings.xml
    String[] items = getResources().getStringArray(R.array.menu_items);

    // Create an array adapter to create the menu with the list items being
    // laid out as per list_item.xml and the item names from the items[]
    // array created above
    ArrayAdapter<String> adapt = new ArrayAdapter<String>(this,R.layout.list_item, items);
    menuList.setAdapter(adapt);

If you run your app now (i know you already configure your button to start the menu activity)
you'll see a list with all the countries, VERY GOOD :D .


6- All left is to set the onClick() for each item of the listView and generate a toast with the country name.
Just add this code to the onCreate() of the Menu class.
    // make the menu items actionable by declaring an onclick listener for
    // each of them.
    // Use "Toast" to display the name of the menu item for a short period
    // on the screen in a message box
    menuList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
        public void onItemClick(AdapterView<?> parent, View itemClicked, int position, long id) {

            // When clicked, show a toast with the TextView text
            Toast.makeText(getApplicationContext(), ((TextView) itemClicked).getText(), Toast.LENGTH_SHORT).show();
        }
    });


At this point, you should have your activity working properly.

----------------------------------------------------------------------
To know more about what we did in here, you can check this links:
    [ListView](https://goo.gl/uhdfst)
    [String Resources](https://goo.gl/xJTHQo)
    [ArrayAdapter](https://goo.gl/4dnYtS)


To complete this exercise run 'androidbasics verify this' inside the downloaded project directory and let's verify this exercise.




