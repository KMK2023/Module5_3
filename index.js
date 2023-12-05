//  Create a calaultor route

// To import the express package
const express = require("express");

// To create the main calculator route
const calcRoutes = require("./routes/calcRoutes");

// To creaate a new app (we can create as many apps as required)
const app = express();
//Createa a new port (here using 3000)
const port = 3000;

// Include this code whenever there is a public page
app.use("/", express.static("public"));

// //app.get binds the app to that particular route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// Now making a MAPPING TO THE CALCULATOR ROutre by combing the app & calculator route created earlier
app.use("/calc", calcRoutes);

// Check if the particular app is running on the port-
app.listen(port, () => {
  console.log(`To confirm that app is now listening on port ${port}`);
});
