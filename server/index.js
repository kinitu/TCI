// const express = require('express');
import express from "express";
import cors from "cors";
import axios from "axios"
import bodyParser from "body-parser"

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

// Массив для хранения данных
let dataStore = [];

// Обработка POST-запросов
app.post('/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData); // Сохраняем данные в массив
  // res.status(201).json(newData); // Отправляем ответ с новыми данными
});

app.get("/data", (req, res) => {
  res.json(dataStore);
})

//Метод GET
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from server!", title: "Яблоко" });
});

//http://localhost:5000/api/data

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});