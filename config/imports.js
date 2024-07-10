// Import Config

    // Import Express
        const express = require('express')

    // Import Handlebars
        const handlebars = require('express-handlebars').engine

    // Import Body Parser
        const bodyParser = require('body-parser')

    // Import Path
        const path = require('path')

    // Import Firebase Admin
        const admin = require('firebase-admin')

    // Import Firebase Firestore
        const { getFirestore } = require('firebase-admin/firestore')

    // Import Firebase Service Account
        const serviceAccount = require('./serviceAccountKey.json')

// Module Exports

    module.exports = {
        express,
        handlebars,
        bodyParser,
        path,
        admin,
        getFirestore,
        serviceAccount
    }