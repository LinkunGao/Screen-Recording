Init Project
==============


1. Create ``Vue`` project

.. code:: bash

    vue create record-project
        1. Manually select features
        2. Babel, Router, Linter / Formatter
        3. 3.x
        4. Use history mode for router? yes -> history no -> hash  choice: no
        5. ESLint + Standard config
        6. Lint on save
        7. In package.json
    
    cd record-project
    npm run serve

2. Install electron dependency

.. code:: bash

    npm i -D electron / yarn add -D electron


3. Combined with electron and vue (electron-builder)

.. code:: bash

    vue add electron-builder
    

After we add electron-builder, it will automatically create a ``background.js`` in src folder. This is the main process file for electron.

Also, in package.json, it will aotumatically add four commands.

    .. code:: json

        {
            "scripts": {

                "electron:build": "vue-cli-service electron:build",
                "electron:serve": "vue-cli-service electron:serve",
                "postinstall": "electron-builder install-app-deps",
                "postuninstall": "electron-builder install-app-deps"
            },
        }

4. Set ESLint to false (in vue.config.js): 

    .. code:: js

        const { defineConfig } = require("@vue/cli-service");
        module.exports = defineConfig({
            transpileDependencies: true,
            lintOnSave: false,
        });


5. Folder Structrue

    .. code:: bash

            .
            ├────────────App.vue
            ├────────────assets
            ├────────────background.js
            ├────────────components
            ├────────────directives
            ├────────────main.js
            ├────────────pages
            │               ├──────dashboard.vue
            │               ├──────launchPage.vue
            │               └──────suspend.vue
            ├────────────router
            │               └──────index.js
            ├────────────utils
            └────────────wins
                          ├──────ball.js
                          ├──────launch.js
                          ├──────main.js
                          └──────tray.js