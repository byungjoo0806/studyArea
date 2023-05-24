const config = {
    dev : {
        username : process.env.DATABASE_USERNAME,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_NAME,
        dialect : "mysql",
        define : {
            dateFormat : "YYYY-MM-DD"
        }
    }
};

module.exports = config;