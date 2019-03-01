# Inkglass API

The Inkglass API was built using Node.js, Express, and MongoDB. It uses document references to communicate between two collections: users and entries.
_Will likely change to embedded documents in the near future._

## Schema Model Examples

### Users

```js
{
  username: "darkwillow", //required
  name: "Willow Rosenberg",
  email: "willow@sunnynet.com", //required
  birthday: { 1982-10-13T00:00:00.000Z }, //created with new Date("<YYYY-MM-DD>")
  astro: "Libra"
}
```

### Entries

```js
{
  user: 5c772cc023103d //required, references user collection
  dateCreated: { 2019-03-01T17:12:29.603Z }, //required, created with new Date()
  dateModified { 2019-03-04T17:15:31.513Z }, //required, created with new Date()
  title: "",
  mood: "", //required
  horoscope: "",
  tarot: 13, //number corresponds to card in standard suit order; e.g. 13 = Death, 31 = Nine of Wands
  reflections: "" //aka notes, the written part of an entry
}
```

## Endpoints

### /users

`/create`
	Adds a new user to the database and returns

`/all`
	Returns a list of all users.

`/:userid`
	When passed a user id to params, returns the user

`/:userid/update`
	Updates the user associated with a given user id when passed a valid request body and returns a message when successful:

`/:userid/delete`
	Deletes the user associated with a given user id


### /entries

`/:userid/create`
	Adds a new entry associated with the given user id

`/:userid/all`
	Returns all entries associated with the give user id

`/:userid/:entryid`
	Returns a single entry belonging to the user

`/:userid/:entryid/update`
	Updates a single entry and returns a message when successful:

`/:userid/:entryid/delete`
	Deletes the entry associated with a given entry id and returns a message when successful: