import express, { Request, Response } from "express"

const app = express();
const port = 3000;

app.get("/", function (req: Request, res: Response) {
    res.status(200).json({
        message: "Requisição com post"
    });
});

//inserção de dados
app.post("/", function (req: Request, res: Responde){
    res.status(200).json({
        message: "Requisição com post"
    });
});

//atualizações de dados
app.patch("/")
app.listen(port, function() {
    console.log('Servidor rodando')
})