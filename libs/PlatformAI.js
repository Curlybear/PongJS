"use strict";

// position: Point containing the top left corner position
var PlatformAI = function(position, width, height, ball, speed) {
    Platform.call(this, position, width, height);
    this.ball = ball;
    this.speed = speed;
};

PlatformAI.prototype = extend(new Platform(), {
    update: function(time, objects) {
        var halfPlatform = this.width / 2;
        var platformCenter = this.getLeftX() + halfPlatform;
        var distance = Math.abs(this.ball.position.x - platformCenter);

        if (platformCenter < this.ball.position.x) {
            this.move(platformCenter + distance*this.speed);
        } else {
            this.move(platformCenter - distance*this.speed);
        }
    }
    , setBall: function(ball) {
        this.ball = ball;
    }
});
