define(["sugar-web/activity/activity",
        "ractive",
        "tween",
        "text!./computer-xo.svg"],
function (activity, Ractive, TWEEN, template) {

    var ractive;

    require(['domReady!'], function (doc) {

        activity.setup();

        xoIcon = new Ractive({
            el: 'svg-container',
            template: template,
            data: {
                'width': '300',
                'height': '300',
                'stroke_color': '#0ff'
            }
        });

        // template can be filled in the initialization above, or
        // after that with 'set':
        xoIcon.set('fill_color', "#ff0");

        // for debugging reasons
        window.xoIcon = xoIcon;

        animate();
        render();
    });

    function animate() {
        var initialCol = {r: 255, g: 255, b: 255};
        var targetCol = {r: 0, g: 255, b: 255};
        var tweenColor = new TWEEN.Tween(initialCol).to(targetCol, 1000);
        tweenColor.onUpdate(function () {
            xoIcon.set('fill_color',
                       "rgb(" +
                       parseInt(this.r) + ', ' +
                       parseInt(this.g) + ', ' +
                       parseInt(this.b) + ')');
        });
        tweenColor.easing(TWEEN.Easing.Quadratic.InOut).repeat(Infinity).
            delay(500).yoyo(true);
        tweenColor.start();

        var initialCol = {r: 100, g: 100, b: 100};
        var targetCol = {r: 255, g: 0, b: 255};
        var tweenColor = new TWEEN.Tween(initialCol).to(targetCol, 1000);
        tweenColor.onUpdate(function () {
            xoIcon.set('stroke_color',
                       "rgb(" +
                       parseInt(this.r) + ', ' +
                       parseInt(this.g) + ', ' +
                       parseInt(this.b) + ')');
        });
        tweenColor.easing(TWEEN.Easing.Quadratic.InOut).repeat(Infinity).
            delay(500).yoyo(true);
        tweenColor.start();
    }

    // for debugging reasons
    window.animate = animate;

    function render() {
        requestAnimationFrame(render);
        TWEEN.update();
    }
});
