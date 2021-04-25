module.exports = {
    presets: [
        [
            "@babel/preset-env", 
            {
                // "targets": {
                //     "chrome": "68"
                // },
                "useBuiltIns": "usage",
                "corejs": {
                    "version": 3,
                    "proposals": true
                }
            }
        ],
        "@babel/preset-typescript"
    ]
}