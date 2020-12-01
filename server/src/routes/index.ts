import {Router} from 'express';
import test from './test';

export default () => {
    const app = Router();
    test(app);

    return app;
};