# Yellow World!

Welcome to a new Android School Basics lesson
Developed by Yellowme.

This lesson shows you how to add and modify a textview in the Android project and how to run your app.

--------------------
## Let's play with the layout editor!
--------------------

    Note: This lesson expects you are using Android Studio 2.3 or higher and you've followed the previous lesson 
          to open the Android project.

* To get started, set up your workspace as follows:

1- In Android Studio's Project window, open app > res > layout > activity_main.xml.

2- To make more room for the Layout Editor, hide the Project window by selecting View > Tool Windows > Project (or click Project  
on the left side of Android Studio).

3- If your editor shows the XML source, click the Design tab at the bottom of the window.

4- In the 'Palette' tab look for the Widgets and drag a 'Plain TextView' in the screen, wherever you want.

5- In the left side, you can see the 'properties' tab. There you can edit all the properties of your element, for example, the 
background color, the id, the text, and more.

6- Change your textView 'id' to 'textViewUser'

7- Normally, you would use 'Hello World', but we're gonna do it a little different. Change your textView 'text' to 'Yellow World!'

8- You can change the properties of your textView, maybe you can put a bigger size? , try with the 'textSize' properties and put 
a value of '50sp', or try to change the propertie you want, excepting the id and the text (That's what we're going to evaluate :D).
To see what are all the properties read the 'View' class documentation (https://goo.gl/7c5Spn)

    Note: The sp (Scale-independent Pixels) is the best way to put the text size, because it is scaled by the user's font size preference.

9- Now we have our first Yellow world in android.

--------------------
## Let's run the app
--------------------

### Run on a real device

Set up your device as follows:

1- Connect your device to your development machine with a USB cable. If you're developing on Windows, you might need to install 
the appropriate USB driver for your device. For help installing drivers, see the OEM USB Drivers document.

2- Enable USB debugging on your device by going to Settings > Developer options.

    Note: On Android 4.2 and newer, Developer options is hidden by default. To make it available, go to Settings > About phone 
    and tap Build number seven times. Return to the previous screen to find Developer options.

Run the app from Android Studio as follows:

1- In Android Studio, click the app module in the Project window and then select Run > Run (or click Run  in the toolbar).

2- In the Select Deployment Target window, select your device, and click OK.

Android Studio installs the app on your connected device and starts it.

That's "Yellow World!" running on your device! To start developing, continue to the next lesson.



----------------------
### Run on an emulator

    Note: Before you run your app on an emulator, you need to create an Android Virtual Device (AVD) definition. An AVD definition specifies 
    the characteristics of an Android phone, tablet, Android Wear, or Android TV device that you want to simulate in the Android Emulator.

* Create an AVD Definition as follows:

1- Launch the Android Virtual Device Manager by selecting Tools > Android > AVD Manager, or by clicking the AVD Manager icon  in the toolbar.

2- In the Your Virtual Devices screen, click Create Virtual Device.

3- In the Select Hardware screen, select a phone device, such as Pixel, and then click Next.

4- In the System Image screen, click Download for one of the recommended system images. Agree to the terms to complete the download.

5- After the download is complete, select the system image from the list and click Next.

6- On the next screen, leave all the configuration settings as they are and click Finish.

7- Back in the Your Virtual Devices screen, select the device you just created and click Launch this AVD in the emulator  .

    While the emulator starts up, close the Android Virtual Device Manager window and return to your project so you can run the app:

1- Once the emulator is booted up, click the app module in the Project window and then select Run > Run (or click Run  in the toolbar).

2- In the Select Deployment Target window, select the emulator and click OK.

    Android Studio installs the app on the emulator and starts it.


That's "Yellow World!" running on the emulator! To start developing, continue to the next lesson.

    Note: In this lesson we showed you how to use the design tab, but you can also use the text tab and write all the elements with
    his properties to build in a faster way the interface.

    To complete this exercise run 'androidbasics verify this' inside the downloaded project directory and let's verify this exercise.


