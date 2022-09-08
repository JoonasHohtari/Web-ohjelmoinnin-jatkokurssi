// 3.1
/*
const greet = () => console.log("Hello there!");

const sum = (a, b, c) => {
  return a + b + c;
};

greet();
sum(1, 2, 3);

// 3.2
const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
  let longName = "";
  for (var i = 0; i < names.length; i++) {
    if (names[i].length > longName.length) {
      longName = names[i];
    }
  }
  return longName.length;
}

console.log(longestName(names));

// 3.3

let x = Math.random();

if (x <= 0.5) {
  console.log("Good morning!");
} else {
  console.log("Good Evening!");
}

// 3.4

const randNum = (min, max) => {
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  x % 2 == 0 ? console.log("Parillinen") : console.log("Pariton");
  return x;
};

console.log(randNum(101, 102));

// 3.5

a = [1, "apple", 14, "boat", 5, "sata", 7, "kenkä", 9];
b = ["Baggio", "Zidane", "Litmanen", "Pele", "Maradona", "Messi"];
c = ["yks", "kaks", "kolme"];
d = [1, 2];
const randArray = (a) => {
  let i = a.length;
  i = Math.floor(Math.random() * i);
  console.log(a[i]);
};
randArray(a);
randArray(b);
randArray(c);
randArray(d);



// 3.6

const southamericans = ["Pele", "Maradona", "Messi"];
const europeans = ["Baggio", "Zidane", "Litmanen"];
const footballers1 = [...southamericans, ...europeans];
const footballers2 = [].concat(southamericans).concat(europeans);
console.log(footballers1);
console.log(footballers2);

  //  3.7


[x, y] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
[x, y, z] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
[a, b, c, d, ...newArray] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(newArray);


// 3.8

const person1 = {
  name: "Vilja",
  lastName: "Pelto",
};

const person2 = {
  name: "Miina",
  lastName: "Kenttä",
};

const people = [];
people.push(person1, person2);
console.log(people[1]);

people.map((person) => console.log("Good evening, " + person.name + "!"));

// 3.9

const names = ["Vivian", "Jaakko", "Maija"];
const people = names.map((name) => {
  return {
    name: name,
    lastName: "Taavitsainen",
    age: 25,
  };
});
console.log(people[0], people[1], people[2]);
*/

// 3.10

const fetchData = async () => {
  console.log("Start fetching...");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("Data received!");
};

console.log("Let's get some data from the internet!");
fetchData().then(function (value) {
  console.log("Let's use the data we fetched!");
});
