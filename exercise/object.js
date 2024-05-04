const person1 = {
  firstName: "Soontaree",
  lastName: "Ratchatapusit",
  age: 15,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person1.fullName());
