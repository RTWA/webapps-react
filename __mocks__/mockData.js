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
        { _tag: "NavTitle", name: "Nav Title" },
        { _tag: "NavItem", name: "Nav Item", to: "/test", icon: "[\"fas\", \"star\"]" },
        {
            _tag: "NavItem", name: "NavItem Coloured", to: "/settings/test", icon: "[\"fas\", \"star\"]", color: "red", badge: {
                color: 'green',
                text: 'badge',
                pill: true,
                className: 'ml-auto',
            }
        },
        {
            _tag: "NavDropdown", name: "Nav Dropdown", icon: "[\"fas\", \"star\"]", _children: [
                { _tag: "NavChild", name: "Nav Child", to: "/child" }
            ]
        },
        {
            _tag: "NavDropdown", name: "NavDropdown Coloured", icon: "[\"fas\", \"star\"]", color: 'blue', _children: [
                { _tag: "NavChild", name: "NavChild Coloured", icon: "[\"fas\", \"star\"]", color: 'orange', to: "/child", badge: {
                    color: 'green',
                    text: 'childbadge',
                    pill: true,
                    className: 'ml-auto',
                } }
            ], badge: {
                color: 'green',
                text: 'dropbadge',
                pill: true,
                className: 'ml-auto',
            }
        }
    ],
    routes: [
        { path: "/test", name: "Test", component: "Dashboard" },
        { path: "/child", name: "Child", component: "Dashboard" }
    ],
    sidebar: {
        color_mode: 'light',
    }
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