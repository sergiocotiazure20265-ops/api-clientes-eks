const express = require("express");

const app = express();

app.use(express.json());

const clientes = [
    {
        id: 1,
        nome: "Ana Paula",
        email: "ana@email.com"
    },
    {
        id: 2,
        nome: "Carlos Silva",
        email: "carlos@email.com"
    },
    {
        id: 3,
        nome: "Mariana Souza",
        email: "mariana@email.com"
    }
];

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Node.js executando no Amazon EKS",
        ambiente: "AWS",
        kubernetes: true
    });
});

app.get("/api/clientes", (req, res) => {
    res.json(clientes);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor executando na porta ${PORT}`);
});