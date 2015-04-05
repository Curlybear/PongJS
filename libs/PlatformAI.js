"use strict";

// position: Point containing the top left corner position
var PlatformAI = function(position, width, height, ball, speed) {
    Platform.call(this, position, width, height);
    this.ball = ball;
    this.speed = speed;
};

extend(PlatformAI, Platform, {
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
    , handleCollision: function(ball, direction) {
        // Set the velocity rotation based on where the ball hit the platform
        var halfPlatform = this.width / 2;
        var platformCenter = this.getLeftX() + halfPlatform;
        var distance = Math.abs(ball.position.x - platformCenter);

        // Limit the rotation to 0.7 %
        var percent = Math.min(0.7, distance / halfPlatform);
        var rotation = 3 * half_pi;
        if(ball.position.x < platformCenter) {
            rotation -= percent * half_pi;
        } else {
            rotation += percent * half_pi;
        }
        ball.velocity = ball.velocity.setRotation(-rotation);
    }
});
