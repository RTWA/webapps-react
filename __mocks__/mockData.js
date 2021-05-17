const User = {
    id: 9999,
    username: 'test_user',
    password: 'jesting',
    name: 'Test Jest User',
    email: 'test@jest',
    active: true,
    number_of_blocks: 40,
    roles: []
};

const users = [
    User,
    {
        id: 10000,
        username: 'jest2',
        password: 'alsojesting',
        name: 'Jest Second User',
        email: 'jest@test',
        active: false,
        number_of_blocks: 0,
        roles: []
    }
]

const loginMethods = [
    {
        "title": "Internal Authentication",
        "value": "internal",
    },
    {
        "title": "Mock Single-Sign On",
        "value": "mocked",
    },
];

const groups = [
    {
        "id": 9999,
        "name": "Mocked Role",
        "guard_name": "web",
        "created_at": null,
        "updated_at": null,
        "permissions": [
            {
                "id": 9999,
                "name": "mocked.permission",
                "title": "Mocked Permission",
                "guard_name": "web",
                "created_at": null,
                "updated_at": null,
                "pivot": {
                    "role_id": 9999,
                    "permission_id": 9999
                }
            }
        ]
    }
];

const permissions = {
    admin: {
        "name": "Mocked Permissions Group",
        "permissions": [
            {
                "id": 9999,
                "name": "mocked.permission",
                "title": "Mocked Permission",
                "guard_name": "web",
                "created_at": null,
                "updated_at": null
            }
        ]
    }
};

const settings = {
    core: {
        mocked: {
            data_mocked: "true"
        },
        cms: {
            display_link: "true",
            url: "",
            name: ""
        },
    },
    mail: {
        smtp: {
            host: "",
            port: "25",
            encryption: "ssl",
            from_address: "",
            from_name: "",
            username: "",
            password: "",
        }
    },
    auth: {
        internal: {
            registrations: "true",
            default_group: "Mocked Role"
        },
        oauth2: {
            google: {
                enabled: "true",
                client_id: "",
                client_secret: "",
                default_group: "Mocked Role"
            },
            msol: {
                enabled: "false"
            }
        }
    }
};

const navigation = {
    navigation: [
        { _tag: "NavItem", name: "Test Nav", to: "/test", icon: ["fas", "star"] }
    ],
    routes: [
        { path: "/test", name: "Test", component: "Dashboard" }
    ]
};

const apps = [
    { id: 1, name: "Demo App", slug: "demoApp", icon: "[\"fas\", \"ghost\"]", version: "1.0.0", author: "WebApps", menu: [], routes: [] }
];

const plugins = [
    { id: 1, name: "Sample", slug: "Sample", icon: "[\"fas\", \"star\"]", version: "1.0.0", author: "WebApps", state: 1 },
    { id: 2, name: "Jest", slug: "Jest", icon: "[\"fas\", \"star\"]", version: "1.0.0", author: "WebApps", state: 1 }
];

export {
    User,
    users,
    loginMethods,
    groups,
    permissions,
    navigation,
    apps,
    plugins,
    settings
}