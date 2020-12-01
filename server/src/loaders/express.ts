import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import envs from '../configs/envs';
import routes from '../routes';

export default ({app}: {app:express.Application}) => {
    //Health Check endpoints
    app.get('/status', (req:express.Request, res:express.Response) => {
        res.status(200).end();
    });

    //Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());

    //Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    //Load API routs
    app.use(envs.api_prefix, routes());

    //error handlers
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
}