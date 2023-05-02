const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Dummy Text</title></head>');
    res.write('<body>');
    res.write('<h1>This is Dummy Text</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username">');
    res.write('<button type="submit">Send</button>');
    res.write('</form');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>List of Dummy User</title></head>');
    res.write(
      '<body><ul><li>Akhilesh</li><li>Javascript</li><li>C++</li></ul></body>'
    );
    res.write('</html>');

    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chuck) => {
      body.push(chuck);
    });

    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const username = parseBody.split('=')[1];
      console.log(username);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
};

exports.handleRequest = handleRequest;
