For rhumbix

simply run
# npm install
# npm start

then it will run in http://localhost:3000/


Thank you for interviewing at Rhumbix. We have two parts to our programming interview. The first part will take most of the time. Finish part 1 before you start part 2!

You may use any resources you want! Google, stackoverflow, open source code, and any developer tools you like are all fair game.

Please reach out to us if you have any questions.
Part 1
Using your prefered language and frameworks write a simple web, iOS, Command line, or Android app that does the following:
Allows a user to input a search term and then press the "GO" button
Get a GIF from the Giphy API based on the search term
Display that GIF
Use the following API to retrieve GIFs:
http://api.giphy.com/v1/gifs/search?q=[KEYWORD_HERE]&api_key=dc6zaTOxFJmzC&limit=1

In case you are curious, here is a link to the GIPHY API documentation, but you should not need it.

HINTS:
Make sure to grab the url for the actual GIF and not the url for a webpage with the GIF on it. The api returns both.
If you are making a mobile app and you are having trouble getting the GIF to animate, feel free to use a webview instead of an imageview.
“Data” in the json response is an array 
Your application should look something like this, but don’t worry about making it look pretty

Part 2
Add autocomplete to your GIF search! Use this short list as your source for the autocomplete suggestions (it is okay to hard-code this list):

about
above
across
app
apple
appreciate
bad
ball
balloon
bell
cat



Discussion questions for after the programming interview

We’ll talk over these questions on a call.

-What problems did you run into?
-Did you finish part 2? If not, how would you go about implementing this if you had more time?
-If the list for part 2 were large and dynamic and you had much more time to implement it, how would you approach it?

