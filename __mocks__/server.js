import { rest } from 'msw';
import { setupServer } from 'msw/node';

import * as mock from './mockData';

let isAuth = false;

const handlers = [
    rest.get('/sanctum/csrf_cookie', (req, res, ctx) => {
        return res(
            ctx.status(200),
        );
    }),

    rest.post('/login', (req, res, ctx) => {
        const { username, password } = req.body;

        // Testing for valid credentials
        if (username === mock.User.username && password == mock.User.password) {
            isAuth = true;
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

    rest.post('/api/logout', (req, res, ctx) => {
        if (!isAuth) {
            return res(
                ctx.status(500)
            )
        }

        isAuth = false;
        return res(
            ctx.status(200)
        )
    }),

    rest.get('/api/user', (req, res, ctx) => {
        if (isAuth) {
            return res(
                ctx.status(200),
                ctx.json(mock.User)
            )
        }
        return res(
            ctx.status(401),
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

    rest.put('/api/user/preference', (req, res, ctx) => {
        const { preference } = req.body;
        if (preference === 'not_valid') {
            return res(
                ctx.status(500)
            )
        }
        return res(
            ctx.status(200),
        )
    }),

    rest.post('/api/permission/check', (req, res, ctx) => {
        const { permission } = req.body;
        if (permission === 'fail') {
            return res(
                ctx.status(500),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                has_permission: true
            })
        )
    }),

    rest.post('/api/group/check', (req, res, ctx) => {
        const { group } = req.body;
        if (group === 'Fail') {
            return res(
                ctx.status(500),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                in_group: true
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

    rest.get('https://graph.microsoft.com/v1.0/groups', (req, res, ctx) => {
        const filter = req.url.searchParams.get('$filter');
        if (filter === "startswith(displayName, 'Error')") {
            return res(
                ctx.status(500),
            )
        }

        if (filter === "startswith(displayName, 'Nope')") {
            return res(
                ctx.status(200),
                ctx.json({
                    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#groups(id,displayName)",
                    "value": []
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#groups(id,displayName)",
                "value": [
                    {
                        "@odata.id": "#",
                        id: "000",
                        displayName: "Example Group 1"
                    },
                    {
                        "@odata.id": "#",
                        id: "001",
                        displayName: "Example Group 2"
                    }
                ]
            })
        )
    }),

];

const server = setupServer(...handlers);

export { server, rest, isAuth };
