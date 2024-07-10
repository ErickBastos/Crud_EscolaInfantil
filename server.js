// Imports
    const { app } = require('./config/config.js');
    const routes = require('./routes/routes.js')

// Server Port
    const PORT = 8000;

// Server Initialization
    app.listen(PORT, () => {
        console.log(`Servidor está rodando em: http://localhost:${PORT}/`);
    });
