import { rest } from 'msw';
import { setupServer } from 'msw/node';

import * as mock from './mockData';

const handlers = [
    rest.post('/login', (req, res, ctx) => {
        const { username, password } = req.body;

        // Testing for valid credentials
        if (username === mock.User.username && password == mock.User.password) {
            return res(
                ctx.status(204),
            );
        } else if (username === mock.users[1].username && password == mock.users[1].password) {
            return res(
                ctx.status(422),
                ctx.json({
                    message: "The given data was invalid.",
                    errors: {
                        username: ["Your account has been disabled. Please contact your System Administrator."]
                    }
                })
            );
        } else {
            return res(
                ctx.status(422),
                ctx.json({
                    message: "The given data was invalid.",
                    errors: {
                        username: ["These credentials do not match our records."]
                    }
                })
            );
        }
    }),

    rest.get('/user', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mock.User)
        )
    }),

    rest.get('/api/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                users: mock.users
            })
        )
    }),

    rest.get('/api/users/disabled', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                users: []
            })
        )
    }),

    rest.get('/api/apps', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                apps: mock.apps
            })
        )
    }),

    rest.get('/api/online/apps/list', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                apps: mock.apps
            })
        )
    }),

    rest.get('/api/plugins', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                plugins: mock.plugins
            })
        )
    }),

    rest.get('/api/plugins/active', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                plugins: mock.plugins
            })
        )
    }),

    rest.get('/api/online/plugins/list', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                plugins: mock.plugins
            })
        )
    }),

    rest.get('/api/navigation', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mock.navigation)
        )
    }),
    
    rest.post('/api/setting', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                settings: [],
            })
        )
    }),
    
];

const server = setupServer(...handlers);

export { server, rest };
