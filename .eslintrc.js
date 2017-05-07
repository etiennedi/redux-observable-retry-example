module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype",
    ],
    "env": {
        "browser": true,
        "jest": true,
        "jasmine": true,
    },
    "rules": {
      "react/jsx-max-props-per-line" : ["error", { "maximum": 1 }],
      "import/no-extraneous-dependencies": 0,
    }
};
