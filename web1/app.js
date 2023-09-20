const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Esta es la aplicación web1');
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Aplicación web1 escuchando en el puerto ${port}`);
});
