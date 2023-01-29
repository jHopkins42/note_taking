const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);