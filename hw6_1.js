const user = {
  name: "Yura",
  age: 18,
  city: "Lviv",
  displayInfo: function() {
    console.log("Name: " + this.name)
    console.log("Age: " + this.age)
    console.log("City: " + this.city)
  }
}
user.displayInfo()