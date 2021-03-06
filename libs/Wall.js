"use strict";

var Wall = function(position, hasWidth, hasHeight) {
    Entity.call(this, position);
    SolidEntity.call(this);
    this.hasWidth = hasWidth;
    this.hasHeight = hasHeight;
}

extend(Wall, SolidEntity, {
    getLeftX: function() {
        return this.position.x;
    }
    , getRightX: function() {
        return this.position.x + (this.hasWidth ? w : 0);
    }
    , getTopY: function() {
        return this.position.y;
    }
    , getBottomY: function() {
        return this.position.y + (this.hasHeight ? h : 0);
    }
    , handleCollision: function(ball, direction) {
        // TODO Don't just reverse the velocity. Bounce against the wall!
        // -------
        //   /\
        //  /  o
        // /
        switch(direction) {
            case Direction.Up:
                ball.velocity.y = Math.abs(ball.velocity.y);
                break;
            case Direction.Down:
                ball.velocity.y = -Math.abs(ball.velocity.y);
                break;
            case Direction.Left:
                ball.velocity.x = Math.abs(ball.velocity.x);
                break;
            case Direction.Right:
                ball.velocity.x = -Math.abs(ball.velocity.x);
                break;
        }
    }
    , containerWidthChanged: function(width) {
        if(this.position.x) {
            this.position.x = width;
        }
    }
    , containerHeightChanged: function(height) {
        if(this.position.y) {
            this.position.y = height;
        }
    }
});
