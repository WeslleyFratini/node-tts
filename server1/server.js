const http = requeire("http");

http
  .createServer((req, res) => {
    res.write("server");
    res.end();
  })
  .listen(4001);
