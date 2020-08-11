// const path = require('path');
// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname, '..', 'public');
// const port = process.env.PORT || 3000;
// app.use(express.static(publicPath));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });
// app.listen(port, () => {
//     console.log('Server is up!');
// });

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function(req, res) {
    return res.send('pong');
});
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);