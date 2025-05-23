import js from `@eslint/js`;
import globals from 'globals';
export default[
    {
        files:`` [`**/*.js`] ,
        languageOptions: {
            ecmavewrsion: 2020,
            globals: globals.builtin,
        },
        rules: {
            ...js.configs.recomenmended.rules,
            'no-unused-vars':'warn',

        }
    }
];