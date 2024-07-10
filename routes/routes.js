// Import
const {app, db} = require('../config/config.js')

// Routes config

    // Main Page
        app.get('/', (req, res) => {

            res.render('create')

        })

    // Register
        app.post('/cadastrar', (req, res) => {

            const matricula = db.collection('alunos').add({
                nome: req.body.kid_name,
                responsavel: req.body.responsible_person,
                data_Nasc: req.body.kid_birthday,
                ano_Escolar: req.body.kid_school_year
            })
            .then(() => {
                res.redirect('/listar')
            })
        })

    // List
        app.get('/listar', async (req, res) => {
        

            var dataAlunos = await db.collection('alunos').get()

            var alunos = []

            dataAlunos.forEach((doc) => {
                alunos.push({
                    id: doc.id,
                    nome: doc.get('nome'),
                    responsavel: doc.get('responsavel'),
                    data_Nasc: doc.get('data_Nasc'),
                    ano_Escolar: doc.get('ano_Escolar')
                })
            })

            res.render('read', {alunos})
        
        })

    // Edit
        app.get("/editar/:id", async function (req, res) {
            const dataAluno = await db.collection('alunos').doc(req.params.id).get();
            const aluno = {
                id: dataAluno.id,
                nome: dataAluno.get('nome'),
                responsavel: dataAluno.get('responsavel'),
                data_Nasc: dataAluno.get('data_Nasc'),
                ano_Escolar: dataAluno.get('ano_Escolar')
            };
        
            res.render("edit", { aluno });
        });

    // Update
        app.post("/atualizar", function (req, res) {
            var update = db
              .collection("alunos")
              .doc(req.body.kid_id)
              .update({
                nome: req.body.kid_name,
                responsavel: req.body.responsible_person,
                data_Nasc: req.body.kid_birthday,
                ano_Escolar: req.body.kid_school_year
              })
              .then(function () {

                res.redirect("/listar");

              });
        });

    // Delete
        app.get('/excluir/:id', (req, res) => {
    
            db.collection('alunos').doc(req.params.id).delete()
        
            res.redirect('/listar')
        })