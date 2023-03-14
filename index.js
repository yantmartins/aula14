const express = require('express')

const app = express()
app.use(express.json())

const DB_ESTUDANTES = [
    {
        nome: 'Carlos',
        materia: 'Back end',
        turma: 't-20',
        cpf: '00000000000',

        nome: "Yan",
        materia: "DevOps",
        turma: "t42",
        cpf: "04236857162"
    }
]
const DB_PROFESSORES = [
    {
        nome: 'Carlos',
        materia: 'front end',
        turma: 't-20',
        cpf: '12345678910',
    }
]
app.get('/professores', (req, res)=> {
    return res.json(DB_PROFESSORES)

})

app.get("/professores/:cpf", (req, res) => {
    const professor = DB_PROFESSORES.find(e => e.cpf == req.params.cpf)
    return res.json(professor)
})
app.put("/professores/:cpf" , (req, res) => {
    for (let index = 0; index < DB_PROFESSORES.length; index++) {
        const professor = DB_PROFESSORES[index];
        if(professor.cpf == req.params.cpf) {
            const professorAtualizado = {
                nome: req.body.nome,
                materia: req.body.materia,
                turma: req.body.turma,
                cpf: req.params.cpf
            }
            DB_PROFESSORES[index] = professorAtualizado
            return res.status(200).send("Atualizado com sucesso")
        }        
    }
    return res.status(404).send("Não encontrado")
} )
app.post('/professores', (req, res) => {
    const data = req.body
    const jaExistente = DB_PROFESSORES.some(professor => professor.cpf == data.cpf)

    if (jaExistente) {
        return res.status(400).send("Professor já está cadastrado!!! (some)")
    }
    DB_PROFESSORES.push(dados)
    return res.send("Professor criado")

})

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

app.put("/estudantes/:cpf", (req, res) => {
    for (let index = 0; index < DB_ESTUDANTES.length; index++) {
        const estudante = DB_ESTUDANTES[index];
        if(estudante.cpf == req.params.cpf) {
            const estudanteAtualizado = {
                nome: req.body.nome,
                materia: req.body.materia,
                turma: req.body.turma,
                cpf: req.params.cpf
            }
            DB_ESTUDANTES[index] = estudanteAtualizado
            return res.status(200).send("Atualizado com sucesso")
        }        
    }
    return res.status(404).send("Não encontrado")
})

app.post('/estudantes', (req, res) => {
    const dados = req.body
    const jaExiste = DB_ESTUDANTES.some(estudante => estudante.cpf == dados.cpf)
    
    
    if (jaExiste) {
        return res.status(400).send("Estudante já está cadastrado!!! (some)")
    }
})

app.delete("/estudantes/:cpf" , (req, res) => {
    for (let index = 0; index < DB_ESTUDANTES.length; index++) {
        const estudante = DB_ESTUDANTES[index];
        if(estudante && estudante.cpf == req.params.cpf) {
            DB_ESTUDANTES[index] = undefined
            return res.status(200).send("Estudante deletado!!!")
        }
        }
    return res.status(400).send("Estudante não encontrado")
})

app.listen(3000, () => {
    console.log('Api rodando')
})