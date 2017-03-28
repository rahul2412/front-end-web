var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.speed = this.bugSpeed();
    this.sprite = 'images/enemy-bug.png';
};




var topSpeed = 350;
var lowSpeed = 70;


Enemy.prototype.update = function(dt) {
    if (this.x < 450) {
        this.x = this.x + this.speed * dt;
    } else {
        this.x = -90;
        this.speed = this.bugSpeed();
    }
};

Enemy.prototype.bugSpeed = function() {
    return Math.ceil(Math.random() * (topSpeed) + lowSpeed);
};
var allEnemies = [
    new Enemy(0, 40),
    new Enemy(100, 40),
    new Enemy(0, 130),
    new Enemy(0, 220),
];




Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


var Player = function(x, y) {
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
};

var player = new Player(200, 400);


var lives = 3;

Player.prototype.update = function() {
    for (var i = 0; i < allEnemies.length; i++) {

        if ((this.x > allEnemies[i].x - 75) && (this.x < allEnemies[i].x + 75) && (this.y == allEnemies[i].y)) {
            lives = lives - 1;
            $('#lives').text("Lives- " + lives);
            this.reset();
        }

    }

};

Player.prototype.reset = function() {
    if (lives === 0) {
        document.write("you lose");
    }
    this.x = 200;
    this.y = 400;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var score = 0;
var win = 5;
Player.prototype.handleInput = function(key) {
    if (key == 'left') {
        if (this.x > 0) {
            this.x = this.x - 100;
        }
    }
    if (key == 'up') {
        if (this.y > 40) {
            this.y = this.y - 90;
        } else {
            score = score + 1;


            $('#score').text("Score- " + score);
            if (score == win) {
                document.write("you win");
            }

            this.reset();
        }

    }
    if (key == 'right') {
        if (this.x < 400) {
            this.x = this.x + 100;
        }
    }
    if (key == 'down') {
        if (this.y < 400) {
            this.y = this.y + 90;
        }
    }
};




document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});