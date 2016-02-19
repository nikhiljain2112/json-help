# json-help
   javascript functions for different json related operation which are not build in

# methods

var jsonHelp = require('json-help');

- json merge -->> merges to json objects

 ```javascript

 jsonHelp.merge({}, json1 , json2);

 ```

- get all keys in json

 ```javascript

 jsonHelp.getKeys(jsonObj);

 ```

- convert json to array

 ```javascript

 jsonHelp.toArray(jsonObj);

 ```

- validate the json

 ```javascript

 jsonHelp.validate(jsonObj);

 ```