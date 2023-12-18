export default function (
    /** @type {import('plop').NodePlopAPI} */
    plop
) {

    plop.setGenerator('Component', {
        description: 'Clear ui component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: "src/components/{{kebabCase name}}",
                base: `plop-templates/component/`,
                templateFiles: 'plop-templates/component/*',
            },
        ]
    });

    plop.setGenerator('Hook', {
        description: 'Hook template',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Hook name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: "src/hook/{{kebabCase name}}",
                base: `plop-templates/hook/`,
                templateFiles: 'plop-templates/hook/*',
            },
        ]
    });

    plop.setGenerator('Util', {
        description: 'Util template',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Util name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: "src/utils/{{kebabCase name}}",
                base: `plop-templates/util/`,
                templateFiles: 'plop-templates/util/*',
            },
        ]
    });

};