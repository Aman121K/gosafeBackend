const express = require('express');
const apiRoutes = require('./routers/index')
const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});