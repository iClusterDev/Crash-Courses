const express = require("express");
const schema = require("./schema.js");
const expressGraphQL = require("express-graphql");

const app = express();

app.use("/graphql", expressGraphQL({ schema: schema, graphiql: true }));

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
