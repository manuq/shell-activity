requirejs.config({
    baseUrl: "lib",
    paths: {
        activity: "../js"
    },
    shim: {
        'three': {
            exports: 'THREE'
        },
        'CSS3DRenderer': {
            deps: ['three'],
            exports: 'THREE.CSS3DRenderer'
        },
        'tween': {
            exports: 'TWEEN'
        }
    }
});

requirejs(["activity/activity"]);
