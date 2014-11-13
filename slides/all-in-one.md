# ECMASCript 6: Exploit the future

JavaScript evolves, but not as fast as we want sometimes.

# ECMAScript 5 adoption

ECMAScript 5 was published in December 2009, but gained all-browser support in March 2011.

Mostly it introduced many extra methods to existing Object, String, Array objects and small addition to syntax:

```
var rectangle = {
    width: 12.0,
    height: 4.0,
    get square() { return this.width * this.height; }
};

rectangle.square; // 48
```

# ECMAScript 6 development

ES6 introduces many extras into language syntax, drastically new ways to interact with objects.

Drafts of ES.next have been published periodically since July 2011, but the target release date is still far away - June 2015.

And... when you can play with those fancy things, but cannot not actually use them
without adding to the build transpilers (ES6-to-ES5 compilers) or manually turning on
experimental flags in browsers — you just get a bit disappointed and decide just to wait a bit.

But this autumn draft was approved and it's less than year till new syntax becomes generally available.

So if you like me were sceptical whether to learn or not - let's explore it today together to get ready.

# Map, Set

How many times you wrote the code like that?

```
var map = {};

elements.forEach(function (el) {
    map[el.id] = {
        width: el.offsetWidth,
        height: el.offsetHeight
    };
});

map["s2"].width; // 200
map["s2"].height; // 300
```

Or just to see existence:

```
    if (map.hasOwnProperty("s2")) {
        console.log('exists in our map');
    }
```

Now you have 2 new types, that are designed to store (key;value) pairs and are 25% faster:

```
var map = new Map();
map.set("foo", "bar");
map.get("foo"); // bar
map.size; // 3
map.has("foo"); // true
map.clear();
map.has("foo"); // false

var set = new Set(["a", "b", "a", "c", "b"]);
set.size; // 3
set.delete("a");
set.size; // 2
set.has("b"); // true
set.add("a").add("d");
set.size; // 4
```
