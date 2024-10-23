const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Hoặc chỉ định cụ thể tên miền thay vì '*'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/gold-price', async (req, res) => {
  try {
    const response = await axios.get('http://api.btmc.vn/api/BTMCAPI/getpricebtmc?key=3kd8ub1llcg9t45hnoh8hmn7t5kc2v');
    const goldPrice = response.data;
    res.json({ goldPrice });    
  } catch (error) {
    res.status(500).json({ message: 'Error to get API gold price.' });
  }
});

app.listen(port, () => {
  console.log(`Gold Price Service is running on http://localhost:${port}`);
});
