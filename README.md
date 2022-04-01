# mongoose-flights

## Exercises

1. Use express generator to create a `mongoose-flights` project. Be sure to install the node modules after you cd into the project.

2. Create a **config/database.js** module that connects to a database named `flights`. Be sure to require the module in **server.js**.

3. Create a `Flight` Model with the following properties: (enum, look at the extra stuff in the lesson from today)

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `airline`| `String`| `enum` to include 'American', 'Delta', 'Southwest' & 'United' | n/a | 
	| `airport`| `String`| `enum` to include<br>'ATL', 'DFW', 'DEN', 'LAX' & 'SAN' | 'DEN' |
	| `flightNo`| `Number`| Required<br>Between `10` and `9999` | n/a | 
	| `departs`| `Date`| n/a | One year from date created | 

4. Implement the following User Stories:
	- AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.
	
	- AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

	- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
		- `ALL FLIGHTS`, and
		- `ADD FLIGHT`
