# random-insert-api

**THIS REPO IS WIP AND DOES NOT WORK** <br>

Want to insert bulk random data to your database via your API? This is the perfect solution.

## Body JSON

The body entity needs a JSON to describe what type of data needs to be inserted. An example JSON is given below:

```
{
  "id": {
    "type": "uuid"
  },
  "firstName": {
    "type": "firstname"
  },
  "lastName": {
    "type": "lastname"
  },
  "age": {
    "type": "age",
    "min": 20,
    "max": 85
  },
  "password": {
    "type": "alphanumeric",
    "min": 2,
    "max": 16
  },
  "email": {
    "type": "email"
  },
  "phoneNumber": {
    "type": "phone",
    "length": 10
  },
  "isActive": {
    "type": "boolean"
  }
}
```

In this json, the keys represents the parameter name required by the API and the value contains the type of data needed along with its attributes (if any).

### Current Supported Types and its features

<ul>
  <li>
    <code>uuid</code>
    <code>Eg: 6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b</code>
  </li>
  <li>
    <code>fullname</code>
    <code>Eg: John Doe</code>
  </li>
  <li>
    <code>firstname</code>
    <code>Eg: Don</code>
  </li>
  <li>
    <code>lastname</code>
    <code>Eg: Bradman</code>
  </li>
  <li>
    <code>number</code>
    <code>Eg: 43.88</code>
    <ul>
      <li><code>min: minimum length of the string</code></li>
      <li><code>max: maximum length of the string</code></li>
      <li><code>decimal: boolean</code></li>
      <li><code>range: 1-6 (range is required if decimal is true)</code></li>
    </ul>
  </li>
  <li>
    <code>alphanumeric</code>
    <code>Eg: h282uhh20</code>
    <ul>
      <li><code>min: minimum length of the string</code></li>
      <li><code>max: maximum length of the string</code></li>
    </ul>
  </li>
  <li>
    <code>email</code>
    <code>Eg: foo@bar.com</code>
  </li>
  <li>
    <code>phone</code>
    <code>Eg: a random phone number here</code>
    <ul>
      <li><code>length: maximum length</code></li>
    </ul>
  </li>
  <li>
    <code>gender</code>
    <code>Eg: Male/Female/Other</code>
    <ul>
      <li><code>abv: boolean - M/F</code></li>
    </ul>
  </li>
  <li>
    <code>currency</code>
    <code>Eg: USD/INR/EUR</code>
  </li>
  <li>
    <code>country</code>
    <code>Eg: IN/US/FR</code>
  </li>
</ul>
