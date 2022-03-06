# UFOs
## Overview of Project: 
The purpose of this project was to create an attractive, interactive website using html, css, bootstrap, and javascript that showcases all UFO sightings available in an easy-to-read data table. Visitors of the website can filter the data in the table to find specific sightings based on certain parameters. 

## Results
![ufo table by Date, city, state, country, and shape](https://github.com/alexdallman1029/UFOs/blob/main/static/images/website-style.png)<br>

Data in the UFO Sightings table can be filtered by date, city, state, and shape only, or any combination of these parameters. If you leave the input box blank, data for that parameter will not filtered, and it will include all data available for that parameter. A blank table means no searches come up for those parameters

To filter the data in the UFO sightings data table, proceed in the following way:
* If you want to filter by date, enter into the date input box the date "MM/DD/YYYY" format. If not, do not enter anything into the box.
* If you want to filter by city, enter into the city input box the city name. If not, do not enter anything into the box.
* If you want to filter by state, enter into the state input box the two-letter state abbreviation. If not, do not enter anything into the box.
* If you want to filter by shape of UFO object in the sky, enter into the shape input box the shape (e.g., circle, triangle, square). If not, do not enter anything into the box. 

Figure 1: Search by Date Only<br>
![ufo table by date only](https://github.com/alexdallman1029/UFOs/blob/main/static/images/date-only.png)<br><br>
Figure 2: Search by Date and City<br>
![ufo table by date and city](https://github.com/alexdallman1029/UFOs/blob/main/static/images/by-date-and-city.png)<br><br>
Figure 3: Search by Date, City, and State<br>
![ufo table by date, city, and state](https://github.com/alexdallman1029/UFOs/blob/main/static/images/state.png)<br><br>
Figure 3: Search by Date, City, State, and Country<br>
![ufo table by date, city, state, and country](https://github.com/alexdallman1029/UFOs/blob/main/static/images/country.png)<br><br>
Figure 5: Search by Date, City, State, and Shape<br>
![ufo table by Date, city, state, country, and shape](https://github.com/alexdallman1029/UFOs/blob/main/static/images/shape.png)<br>

## Summary
One drawback of this webpage was that if you tried to enter into the input box a capitalized spelling of a city, state, or country, it would not return any data in the table. I fixed this by adding .tolowercase() to the end of let elementValue = changedElement.property("value").toLowerCase(); in the updateFilters() function. 

The characters are being transfereed over as unicodes (for commas, etc.). You would need a function to change unicode characters back to their proper demarcation.

You cannot search by duration. You could add another list item to the index.html file to fix this. 

Also, to the best of my knowledge, the data.js file is static and therefore does not update automatically to receive new UFO data. I would suggest adding an API to the script so it updates the data.js file automatically. 


