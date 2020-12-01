import expressLoader from './express';
import postgreSQLLoader from './postgreSQL';

export default ({expressApp}) => {
    const dbClient = {}
    // const dbClient = postgreSQLLoader(); //DB 사용할 때 쓰기
    console.log("DB loaded and connected");

    expressLoader({app:expressApp});
    console.log("Express loaded!");

    return {db: dbClient};
}