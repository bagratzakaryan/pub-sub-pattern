// 1. create event
var eventbus = PubSub.create();

// 2. subscribe to publisher
eventbus("foo").subscribe((o) => console.log(o));
eventbus("foo").subscribe((o) => console.log(o));
eventbus("foo").subscribe((o) => console.log(o));
eventbus("foo").subscribe((o) => console.log(o));
eventbus("foo").subscribe((o) => console.log(o));

// 3. publish to a subscriber
eventbus.publish("foo", "bar");
