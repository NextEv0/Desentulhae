module.exports = {
port: process.env.PORT,
db: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
},
jwtSecret: process.env.JWT_SECRET,
}
