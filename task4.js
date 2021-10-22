const server = require("http").Server((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );

  response.setHeader(
    "Access-Control-Allow-Headers",
    "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
  );

  if (request.url === "/result4/" && request.method === "POST") {
    const xTestHeader = request.headers["x-test"];

    response.setHeader("Content-Type", "application/json");

    request.on("data", (data) => {
      const body = data.toString();

      response.end(
        `{\"message\" : \"itmo337221\", \"x-result\" : \"${xTestHeader}\", \"x-body\" : \"${body}\"}`
      );
    });
  } else {
    response.end("");
  }
});

server.listen(4321);
