The Challenge: The Travel Agent's Dashboard
Your Mission:
You are programming the dashboard for a new travel agency. You have a list of holiday destinations, but the data is a bit messy. Your job is to format this raw data into a clean, easy-to-read list with clear category tags so the travel agents can quickly see what type of holiday they are booking!

Your Tasks:
Create the Formatter Function: Write a function called formatDestination that accepts a single destination object as a parameter.

Add the Logic:
Inside your function, use if/else statements to check the vacationType of the destination:

If the type is "beach", return a string that starts with the tag [Beach Getaway].

If the type is "city", return a string that starts with the tag [City Break].

If the type is "nature", return a string that starts with the tag [Nature Retreat].

The final string must include the tag, a space, the location name, and the budget.

Map the Array:
Use the .map() method on the holidayDestinations array. Pass your formatDestination function into .map() to process every item.

Log the Result:
Save the result of your .map() to a new variable called formattedBrochure and console.log it.
Expected Output: If done correctly, your console should print an array that looks exactly like this:

[
    "[Beach Getaway] Maldives (£1200)",
    "[City Break] Tokyo (£800)",
    "[Nature Retreat] Swiss Alps (£1500)",
    "[Beach Getaway] Bali (£900)",
    "[City Break] New York (£1100)"
]
