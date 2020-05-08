class Observer {
  update(message) {
    console.log(message);
  }
}

class Subject {
  observers = new Set<Observer>();

  subscribe(observer) {
    this.observers.add(observer);
  }

  notify(message) {
    this.observers.forEach((observer) => {
      observer.update(message);
    });
  }
}


const subject = new Subject();

subject.subscribe(new Observer());
subject.subscribe(new Observer());

subject.notify('Hello world!');

// Hello world!
// Hello world!
