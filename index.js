const express = require('express')

const app = express()
app.use(express.json())

const DB_ESTUDANTES = [
    {
        nome: 'Carlos',
        materia: 'Back end',
        turma: 't-20',
        cpf: '00000000000'
    }
]


app.get('/', (req, res) => {
    return res.send('hello world')
})

app.get('/estudantes', (req, res) => {
    return res.json(DB_ESTUDANTES)
})

app.get('/estudantes/:cpf', (req, res) => {
    const estudante = DB_ESTUDANTES.find(e => e.cpf == req.params.cpf)
    return res.json(estudante)
})

app.post('/estudantes', (req, res) => {
    const dados = req.body
    console.log(req.body)
    DB_ESTUDANTES.push(dados)
    return res.send('estudante criado')
})


app.listen(3000, () => {
    console.log('Api rodando')
})