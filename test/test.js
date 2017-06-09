const assert = require('assert');
const app = require('../index.js');

assert("Hello World!", app("Hello {0}!", ["World"]));
assert("1 messages", app("{0} messages", [1]));
assert("You're a IDIOT if you think that WINDOWS is instable", app("You're a {0} if you think that {1} is instable", ["IDIOT", "WINDOWS"]));
assert("You're a IDIOT if you think that WINDOWS is instable", app("You're a {1} if you think that {0} is instable", ["WINDOWS", "IDIOT"]));