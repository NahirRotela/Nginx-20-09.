const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Esta es la aplicación web2');
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Aplicación web2 escuchando en el puerto ${port}`);
});
