// Imports

const { express, handlebars, bodyParser, path, admin, getFirestore, serviceAccount } = require("./imports.js")

// Express Instance

    const app = express()

// View Engine Config

    app.use(express.static('public'))

    app.engine('handlebars', handlebars({ 
        defaultLayout: 'main',

        helpers: {
            formatarData: function(data) {
                var partes = data.split('-');
                return partes[2] + '/' + partes[1] + '/' + partes[0];
            }
        }
    }))

    app.set('view engine', 'handlebars')

    app.set('views', path.join(__dirname, '../views'))

    app.use(express.static(path.join(__dirname, '../public')))

// Body Parser Config

    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())

// Firebase Config

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })

    // Firestore Instance

        const db = getFirestore()

// Module Export
    
    module.exports = { app, db }
