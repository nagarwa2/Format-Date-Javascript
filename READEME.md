# Format-Date-Javascript

With the help of this plugin you can format date to specified format in Javascript.

To use this plugin include format.date.js file in your web page.

'dateFormat' function takes two arguments 'date'(can be date object or valid date string) and 'format'(must be valid supported date format 
string) and return formatted value.

If no arguments are passed to function then function uses current date and default date format i.e 'MM/DD/YYYY'

Examples:
Input                                                       Output
No arguments                                                Returns current date in 'MM/DD/YYYY' format
'06/05/2017'  'MM-DD-YYYY'                                  06-05-2017
'5/4/2017, 4:32:27 PM'  'MM-DD-YYYY HH:MM:SS'               05-04-2017 16:32:27
'Sat Mar 06 2017 16:32:11 GMT-0500 (CDT)'  'd D m Y'        Tuesday 06 Mar 2017
'abc' 'abc'                                                 Invalid Date
'06/05/2017'  'abc'                                         Invalid Date Format

Screenshots:

![alt text](https://github.com/nagarwa2/Format-Date-Javascript/blob/master/1.png)

![alt text](https://github.com/nagarwa2/Format-Date-Javascript/blob/master/2.png)
