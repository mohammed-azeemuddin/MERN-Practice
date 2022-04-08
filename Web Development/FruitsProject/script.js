const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")
run()

async function run(){
  const user = await User.create({
    name: "Kyle",
    age: 26,
    email: "abc@test.com",
    hobbies: ["gym","bowling"],
    address: {
      street: "Main St"
    },
   })
  await user.save()
  console.log(user);
}
