"use strict";

// position: Point containing the top left corner position
var PlatformAI = function(position, width, height, ball) {
    Platform.call(this, position, width, height);
    this.ball = ball;
};

PlatformAI.prototype = extend(new Platform(), {
    update: function(time, objects) {
        var halfPlatform = this.width / 2;
        var platformCenter = this.getLeftX() + halfPlatform;
        var distance = Math.abs(this.ball.position.x - platformCenter);

        if (platformCenter < this.ball.position.x) {
            this.move(platformCenter + distance*0.06);
        } else {
            this.move(platformCenter - distance*0.06);
        }
    }
    , setBall: function(ball) {
        this.ball = ball;
    }
});
