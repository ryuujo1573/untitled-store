import * as Drash from "https://deno.land/x/drash@v2.7.1/mod.ts";

class HomeResource extends Drash.Resource {
  public paths = ["/"];

  public GET(_request: Drash.Request, response: Drash.Response): void {
    return response.json({
      hello: "world",
      time: new Date(),
    });
  }
}

const server = new Drash.Server({
  hostname: "localhost",
  port: 1447,
  protocol: "http",
  resources: [HomeResource],
});

server.run();

console.log(`Server running at ${server.address}.`);
