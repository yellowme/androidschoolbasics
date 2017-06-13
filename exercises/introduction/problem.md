# Introduction to android

Welcome to the Android School Basics
Developed by Yellowme.

The first two lesson is to show you the super basics of android, and the next ones, will be exercises.

This lesson shows you how to open the Android project with Android Studio, how to create our first activity and describes some of the files in the project.

--------------------
## Let's begin
--------------------

1- In Android Studio, open the base project that you downloaded:
    * Select "open an existing android studio project".
    * Select the downloaded project directory.
    * Click Next.

    * Don't update the gradle, it's important for this project particulary.

    Downloaded project data
    Application Name: "androidschool"
    Company Domain: "mx.yellowme"


    If you're curious about how the SDK versions affect your app, read Supporting Different Platform Versions (https://goo.gl/dYHfzP)


2- Create your first activity
    * First, be sure the Project window is open (select View > Tool Windows > Project)
    * Right Click on "app" folder and select new > activity > empty activity.
    * In the Customize the Activity screen, select launcher activity, the rest
      keep the default values and click Finish.

    * You have created your first activity in android!!!


3- Now take a moment to review the most important files.
    * Check that In the project tab the Android view is selected from the drop-down list at the top of that window. You can then see the following files:

    app > java > mx.yellowme.androidschool > MainActivity.java
    This is the main activity (the entry point for your app). When you build and run the app, the system launches an instance of this Activity  
    (https://goo.gl/xgtUdC) and loads its layout.
    
    app > res > layout > activity_main.xml
    This XML file defines the layout for the activity's UI. It contains a TextView(https://goo.gl/19TpGm) element with the text "Hello world!".
    
    app > manifests > AndroidManifest.xml
    The manifest(https://goo.gl/xyQwV3) file describes the fundamental characteristics of the app and defines each of its components.
    
    Gradle Scripts > build.gradle
    You'll see two files with this name: one for the project and one for the "app" module. Each module has its own build.gradle file, 
    but this project currently has just one module. You'll mostly work with the module's build.gradle file to configure how the Gradle tools 
    compile and build your app. For more information about this file, see Configure Your Build(https://goo.gl/jMDWmR).

Now just run ´androidbasics verify this´ inside the project directory on the console to mark this lesson as completed

* To run the app, continue to the next lesson, you'll create your first "Yellow world!".

