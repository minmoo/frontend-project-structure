//Set the NODE_ENV to 'dev' by default
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

const env_found = require('dotenv').config({
    path: require('path').resolve(
        process.cwd(),
        process.env.NODE_ENV == 'dev' ? 'config/env/.dev' : "config/env/.prod"
    )
});

if (env_found.error){
    throw new Error("Couldn't find env file");
}

export default{
    port: process.env.PORT || 6001,

    db_conf: {
        db_host: process.env.DB_HOST,

        db_user: process.env.DB_USER,
    
        db_nm: process.env.DB_NM,
    
        db_pwd: process.env.DB_PWD,
    
        db_port: process.env.DB_PORT || 5475
    },

    api_prefix: process.env.API_PREFIX
}