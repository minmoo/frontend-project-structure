import {Client} from 'pg';
import envs from '../configs/envs';

export default () => {
    const dbClient = new Client({
        user: envs.db_conf.db_user,
        host: envs.db_conf.db_host,
        database: envs.db_conf.db_nm,
        password: envs.db_conf.db_pwd,
        port: envs.db_conf.db_port
    })
    dbClient.connect();

    return dbClient;
}