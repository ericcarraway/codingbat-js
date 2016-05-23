#### Setup

* `cd` to `../coderbyte/`

* Install dependencies listed in `bower.json`
```
$ bower install
```

`../coderbyte/bower_components/` should now contain
* Chai http://chaijs.com/
* Mocha https://mochajs.org/


#### Running Tests

To run tests in the browser using `../coderbyte/index.html`
* `cd` to `../coderbyte/` and serve the directory
```
$ live-server
```

This command runs a simple development http server with live reload capability
https://www.npmjs.com/package/live-server

* Open a browser to http://127.0.0.1:8080/

---
#### Changelog

2016-05-22
* minimum viable testing setup using mocha + chai
