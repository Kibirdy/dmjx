var ar=new Array(33,34,35,36,37,38,39,40);
$("#video").hide();

$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,ar) > -1) {
          e.preventDefault();
          return false;
      }
      return true;
});



var Maze = {};
//
var $ = $;
//
var Button = {
    START_GAME : $("#start-game"),
    PLAY_NEXT : $("#play-next"),
    PLAY_AGAIN : $("#play-again"),
    PLAY_LEVEL_AGAIN : $("#play-level-again"),
    PLAY_AGAIN_GAME_OVER : $("#play-again-game-over")

};
//
var Scene = {
    SPLASH     : $(".splash"),
    MAIN       : $(".main"),
    LEVEL_COMPLETE  : $(".level-complete"),
    GAME_OVER  : $(".game-over"),
    GAME_COMPLETED  : $(".game-completed")
};
//
var Stage = {
    GAME_DIV   : $("#game"),
    CANVAS     : $("#canvas"),
    CTX        : $("#canvas")[0].getContext("2d")
};
//
Maze.level = [

        {
            "gridModel"    :
                [
                    [ 5, 5, 1, 0, 0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
                    [ 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 5, 5, 5, 1, 1, 1, 1, 1, 1 ],
                    [ 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1 ],
                    [ 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1 ],
                    [ 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 3, 1, 1, 0, 0, 0, 0, 1 ],
                    [ 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    [ 5, 5, 5, 5, 1, 1, 1, 12, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5 ]

                ]
        },
    {
        "gridModel"     :
            [
                [1,1,1,1,1,1,1,1,1,1,1,1,5,5],
                [1,6,6,0,0,1,0,0,0,0,0,1,1,1],
                [1,6,6,0,0,1,0,4,0,0,4,0,0,1],
                [1,6,6,0,0,1,4,1,1,1,1,0,0,1],
                [1,6,6,0,0,0,0,3,0,12,1,0,0,1],
                [1,6,6,0,0,1,0,1,0,0,4,0,1,1],
                [1,1,1,1,1,1,0,1,1,4,0,4,0,1],
                [5,5,17,0,4,0,0,4,0,4,0,4,0,1],
                [5,5,1,0,0,0,0,1,0,0,0,0,0,1],
                [5,5,1,1,1,1,1,1,1,1,1,1,1,1]
            ]
    },
    {
        "gridModel"     :
            [
                [5,5,5,5,5,5,5,5,1,1,1,12,1,1,1,1,5],
                [5,5,5,5,5,5,5,5,1,0,0,0,0,0,3,1,5],
                [5,5,5,5,5,5,5,5,1,0,4,1,4,0,1,1,5],
                [5,5,5,5,5,5,5,5,1,0,4,0,0,4,1,5,5],
                [5,5,5,5,5,5,5,5,1,1,4,0,4,0,1,5,5],
                [1,1,1,1,1,1,1,1,1,0,4,0,1,0,1,1,1],
                [1,6,6,6,6,0,0,1,18,0,4,0,0,4,0,0,1],
                [1,1,6,6,6,0,0,0,0,4,0,0,4,0,0,0,1],
                [1,6,6,6,6,0,0,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,5,5,5,5,5,5,5,5,5]
            ]
    },
    {
        "gridModel"     :
            [
                [5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,1],
                [5,5,5,5,5,5,5,5,5,5,5,1,0,0,6,6,6,6,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,0,0,6,6,6,6,1],
                [1,0,0,0,0,1,0,0,4,0,4,0,0,0,6,6,6,6,1],
                [1,0,4,4,4,1,4,0,0,4,0,1,0,0,6,6,6,6,1],
                [1,0,0,4,0,0,0,0,0,4,0,1,0,0,6,6,6,6,1],
                [1,0,4,4,0,1,4,0,4,0,4,1,1,1,1,1,1,1,1],
                [19,0,0,4,0,1,0,0,0,0,0,1,5,5,5,5,5,5,5],
                [1,1,0,1,1,1,1,1,1,1,1,1,5,5,5,5,5,5,5],
                [1,0,0,0,0,1,0,0,0,0,1,1,5,5,5,5,5,5,5],
                [1,0,0,0,0,0,4,0,0,3,1,1,5,5,5,5,5,5,5],
                [1,0,0,4,4,1,4,4,0,0,0,12,5,5,5,5,5,5,5],
                [1,0,0,0,0,1,0,0,0,0,1,1,5,5,5,5,5,5,5],
                [1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,5,5]
            ]
    }
];
//

//
Maze.render = function () {

    var currentMap = this.level[this.levelIndex].gridModel;

    var allRows = currentMap.length,
        allColumns = currentMap[0].length,
        img;

    this.tilemap = [];
    Stage.CTX.clearRect(0, 0, Stage.CANVAS.width(), Stage.CANVAS.height());

    for (var row = 0; row < allRows; row++) {
        var thisRow = [];

        for ( var column = 0; column < allColumns; column++) {

            var thisTileCode = currentMap[row][column];
            var thisTile = Maze.Tile(row, column, thisTileCode);
            thisRow.push(thisTile);

        }

        this.tilemap.push(thisRow);
    }
    Maze.canPlaceBomb = true;

    //

};
//
Maze.startGame = function () {
    this.showScene(Scene.MAIN);
    this.render();
    Maze.StartTimer(0);
    document.getElementById('gameStats').style.display = "block";
    document.getElementById('backGroundImg').style.display = "none";

    //Level 1
    if(this.levelIndex == 0)
    {
        Maze.shootGun = true;
        Maze.originalStartColunm = 1;
        Maze.ShootGun(7,1,18);
        //Set number of lives the avatar has
        Maze.numberOfAvatarLives = 3;
        //Show the lives in the gameStats div
        document.getElementById('numberOfLives').innerHTML = "Number of lives left: " + this.numberOfAvatarLives;
        Maze.numberOfBombs = 3;
        //Show number of bombs in gamestats
        document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;


    }
    //Level 2
    if(this.levelIndex == 1)
    {
        Maze.shootGun = true;
        Maze.originalStartColunm = 3;
        Maze.ShootGun(7,3,13);
        //Set number of lives the avatar has
        Maze.numberOfAvatarLives = 3;
        //Show the lives in the gameStats div
        document.getElementById('numberOfLives').innerHTML = "Number of lives left: " + this.numberOfAvatarLives;
        Maze.numberOfBombs = 3;
        //Show number of bombs in gamestats
        document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
    }
    //Level 3
    if(this.levelIndex == 2)
    {
        Maze.shootGun = true;
        Maze.originalStartColunm = 9;
        Maze.ShootGun(6,9,16);
        //Set number of lives the avatar has
        Maze.numberOfAvatarLives = 3;
        //Show the lives in the gameStats div
        document.getElementById('numberOfLives').innerHTML = "Number of lives left: " + this.numberOfAvatarLives;
        Maze.numberOfBombs = 3;
        //Show number of bombs in gamestats
        document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
    }
    //Level 4
    if(this.levelIndex == 3)
    {
        Maze.shootGun = true;
        Maze.originalStartColunm = 1;
        Maze.ShootGun(7,1,6);
        //Set number of lives the avatar has
        Maze.numberOfAvatarLives = 3;
        //Show the lives in the gameStats div
        document.getElementById('numberOfLives').innerHTML = "Number of lives left: " + this.numberOfAvatarLives;
        Maze.numberOfBombs = 3;
        //Show number of bombs in gamestats
        document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
    }
};
//
Maze.showScene = function (newScene){
    var current = $(".active");
    current.removeClass("active");
    newScene.addClass("active");
};
//
Maze.init = function ()
{
    this.levelIndex = 0;
    this.showScene( Scene.SPLASH);

    //Get gamescore from database
    Maze.GetGameScores();

    Button.START_GAME.click(function () {
        Maze.startGame();
    });
    Button.PLAY_AGAIN.click(function () {
        Maze.startGame();
    });
    Button.PLAY_LEVEL_AGAIN.click(function () {
        //Stop the game timer
        Maze.StartTimer(1);
        //Set number of moves to zero
        Maze.iNumberOfMoves = 0;
        document.getElementById('numberOfMoves').innerHTML = "";
        //Set iSeconds to zero
        Maze.iSeconds = 0;
        Maze.startGame();
    });
    Button.PLAY_NEXT.click(function () {
        Maze.startGame();
    });
    Button.PLAY_AGAIN_GAME_OVER.click(function ()  {
        Maze.startGame();
    });
};

//
document.addEventListener ("keydown", function(e) {

    var kc = e.keyCode,
        oldX = Maze.avatarX,
        oldY = Maze.avatarY,
        newX = oldX,
        newY = oldY;

        var boxLeft = 0;
        var boxRight = 0;
        var boxUp = 0;
        var boxDown = 0;

    if (kc === 37) {
        //console.log("left");
        newX = Maze.avatarX-1;
        boxLeft = 1;

    } else if (kc === 38) {
        //console.log("up");
        newY = Maze.avatarY-1;
        boxUp = 1;

    } else if (kc === 39) {
        //console.log("right");
        newX = Maze.avatarX+1;
        boxRight = 1;

    } else if (kc === 40) {
        //console.log("down");
        newY = Maze.avatarY+1;
        boxDown = 1;

    }
    //65  == a
    //83 == s
    //68 == d
    //87 == w
    else if (kc == 65 || kc == 83 || kc == 68 || kc == 87) {
        //alert("B");
        //
        //alert(Maze.avatarX+' , '+Maze.avatarY);
        Maze.PlaceBomb(Maze.avatarX,Maze.avatarY,kc);

    }
    else {
        // some other key, ignore it
        return;
    }

    var whereIwantToGo = Maze.tilemap[newY][newX];

    if (whereIwantToGo.walkable)
    {

            //console.log('whereIwantToGo.tileName is: ' + whereIwantToGo.tileName);
            var OldBoxX;
            var OldBoxY;
            var newBoxX;
            var newBoxY;

            if(boxLeft == 1)
            {
                OldBoxX = Maze.avatarX-1
                OldBoxY = Maze.avatarY;
                //alert('left');
                newBoxX = OldBoxX-1;
                newBoxY = OldBoxY;

            }
            if(boxUp == 1)
            {
                OldBoxX = Maze.avatarX
                OldBoxY = Maze.avatarY-1;
                //alert('up');
                newBoxY= OldBoxY-1;
                newBoxX = OldBoxX;

            }
            if(boxRight == 1)
            {
                OldBoxX = Maze.avatarX+1
                OldBoxY = Maze.avatarY;
                //alert('right');
                newBoxX= OldBoxX+1;
                newBoxY = OldBoxY;

            }
            if(boxDown == 1)
            {
                OldBoxX = Maze.avatarX;
                OldBoxY = Maze.avatarY+1;
                //alert('down');
                newBoxY = OldBoxY+1;
                newBoxX = OldBoxX;

            }

        if (whereIwantToGo.tileName == "BOX")
        {
            //Count number of moves with boxes
            Maze.CountMoves();

            var tileTypeNew = Maze.tilemap[newBoxY][newBoxX];

            //Play sound for player trying to move two boxes
            if(tileTypeNew.tileName == "BOX")
            {
                //Play sound for player tried to move two boxes
                var audioTag = document.getElementById('audiotagWallOrBox');
                audioTag.play();
            }

            var oTile = Maze.tilemap[Maze.avatarY][Maze.avatarX];

            if(oTile.tileName == "RUBBLEAVATARTILE")
            {
                //console.log('New tile is FLOOR');
                //alert('OldBoxY is: ' + OldBoxY + 'OldBoxX is: ' + OldBoxX);
                Maze.tilemap[OldBoxY][OldBoxX].setTileType("FLOOR");
                //alert('newboxX is: ' + newboxX + 'newboxY is: ' + newboxY);
                Maze.tilemap[newBoxY][newBoxX].setTileType("BOX");

                //Move avatar
                Maze.tilemap[oldY][oldX].setTileType("RUBBLETILE"); // FLOOR
                Maze.avatarX = newX;
                Maze.avatarY = newY;
                Maze.tilemap[newY][newX].setTileType("AVATAR"); // AVATAR
            }

            if(tileTypeNew.tileName == "FLOOR" && oTile.tileName != "RUBBLEAVATARTILE")
            {
                //console.log('New tile is FLOOR');
                //alert('OldBoxY is: ' + OldBoxY + 'OldBoxX is: ' + OldBoxX);
                Maze.tilemap[OldBoxY][OldBoxX].setTileType("FLOOR");
                //alert('newboxX is: ' + newboxX + 'newboxY is: ' + newboxY);
                Maze.tilemap[newBoxY][newBoxX].setTileType("BOX");

                //Move avatar
                Maze.tilemap[oldY][oldX].setTileType("FLOOR"); // FLOOR
                Maze.avatarX = newX;
                Maze.avatarY = newY;
                Maze.tilemap[newY][newX].setTileType("AVATAR"); // AVATAR
            }

            if(tileTypeNew.tileName == "WIN")
            {
                //console.log('Move BOX onto WIN tile');

                //Maze.tilemap[OldBoxY][OldBoxX].setTileType("FLOOR");
                //Move BOX
                Maze.tilemap[newBoxY][newBoxX].setTileType("BOXWIN");

                //Move avatar
                Maze.tilemap[oldY][oldX].setTileType("FLOOR"); // FLOOR
                Maze.avatarX = newX;
                Maze.avatarY = newY;
                Maze.tilemap[newY][newX].setTileType("AVATAR"); // AVATAR

                //Check to see how many BOXWIN tiles there are
                Maze.countNumberOfBOXWINtiles();
            }

            else
            {
                //Player tried to move two boxes

                return;
            }

        }

        if(whereIwantToGo.tileName == "BOXWIN")
        {
            //Count number of moves with boxes
            Maze.CountMoves();

            tileTypeNew = Maze.tilemap[newBoxY][newBoxX];
            var tileTypeOld = Maze.tilemap[oldY][oldX];
            if(tileTypeNew.tileName == "WIN" && tileTypeOld.tileName == "AVATAR")
            {
                //Move BOX
                Maze.tilemap[newBoxY][newBoxX].setTileType("BOXWIN");

                //Move avatar
                Maze.tilemap[oldY][oldX].setTileType("FLOOR"); // FLOOR
                Maze.avatarX = newX;
                Maze.avatarY = newY;
                Maze.tilemap[newY][newX].setTileType("WINAVATAR"); // AVATAR
            }

            if(tileTypeNew.tileName == "WIN" && tileTypeOld.tileName == "WINAVATAR")
            {
                //Move BOX
                Maze.tilemap[newBoxY][newBoxX].setTileType("BOXWIN");

                //Move avatar
                Maze.tilemap[oldY][oldX].setTileType("WIN"); // FLOOR
                Maze.avatarX = newX;
                Maze.avatarY = newY;
                Maze.tilemap[newY][newX].setTileType("WINAVATAR"); // AVATAR
            }
        }

        //Move avatar around inside the WIN tiles
        isWinAvatarTile = Maze.tilemap[oldY][oldX];

        if(whereIwantToGo.tileName == "RUBBLETILE" && isWinAvatarTile.tileName == "AVATAR")
        {

            //Move avatar
                Maze.tilemap[oldY][oldX].setTileType("FLOOR"); // FLOOR
                Maze.avatarX = newX;
                Maze.avatarY = newY;
                Maze.tilemap[newY][newX].setTileType("RUBBLEAVATARTILE"); // AVATAR
        }

        if(whereIwantToGo.tileName == "FLOORTILEWIN")
        {
            //Stop the gunshooting
            Maze.shootGun = false;
            clearTimeout(Maze.timer2);
            Maze.gameWin();
        }


        if (whereIwantToGo.tileName === "WIN" && isWinAvatarTile.tileName == "WINAVATAR")
        {
            //console.log('2');
            Maze.tilemap[oldY][oldX].setTileType("WIN"); // FLOOR
            Maze.avatarX = newX;
            Maze.avatarY = newY;
            Maze.tilemap[newY][newX].setTileType("WINAVATAR"); // AVATAR
            //console.log(Maze.avatarX  + "," + Maze.avatarY);
        }

        if (whereIwantToGo.tileName == "WIN" && isWinAvatarTile.tileName == "AVATAR")
        {
            //console.log('3');
            Maze.tilemap[oldY][oldX].setTileType("FLOOR"); // FLOOR
            Maze.avatarX = newX;
            Maze.avatarY = newY;
            Maze.tilemap[newY][newX].setTileType("WINAVATAR"); // AVATAR
            //console.log(Maze.avatarX  + "," + Maze.avatarY);
        }

        //alert(isWinAvatarTile.tileName);
        if (whereIwantToGo.tileName === "FLOOR" && isWinAvatarTile.tileName == "WINAVATAR")
        {
            //console.log('4');
            Maze.tilemap[oldY][oldX].setTileType("WIN"); // FLOOR
            Maze.avatarX = newX;
            Maze.avatarY = newY;
            Maze.tilemap[newY][newX].setTileType("AVATAR"); // AVATAR
            //console.log(Maze.avatarX  + "," + Maze.avatarY);
        }

        if (whereIwantToGo.tileName === "FLOOR" && isWinAvatarTile.tileName == "AVATAR")
        {
            //console.log('5');
            Maze.tilemap[oldY][oldX].setTileType("FLOOR"); // FLOOR
            Maze.avatarX = newX;
            Maze.avatarY = newY;
            Maze.tilemap[newY][newX].setTileType("AVATAR"); // AVATAR
            //console.log(Maze.avatarX  + "," + Maze.avatarY);
        }

        //Move avartar out from rubble onto floor tile
        if (whereIwantToGo.tileName === "FLOOR" && isWinAvatarTile.tileName == "RUBBLEAVATARTILE")
        {
            //console.log('5');
            Maze.tilemap[oldY][oldX].setTileType("RUBBLETILE"); // FLOOR
            Maze.avatarX = newX;
            Maze.avatarY = newY;
            Maze.tilemap[newY][newX].setTileType("AVATAR"); // AVATAR
            //console.log(Maze.avatarX  + "," + Maze.avatarY);
        }

        //Move avatar from rubble to rubble
        if (whereIwantToGo.tileName === "RUBBLETILE" && isWinAvatarTile.tileName == "RUBBLEAVATARTILE")
        {
            Maze.tilemap[oldY][oldX].setTileType("RUBBLETILE");
            Maze.avatarX = newX;
            Maze.avatarY = newY;
            Maze.tilemap[newY][newX].setTileType("RUBBLEAVATARTILE");
        }

        //Player hit WALL tile
        if (whereIwantToGo.tileName === "WALL")
        {
            //Play sound for hit wall
            var audioTag = document.getElementById('audiotagWallOrBox');
            audioTag.play()
        }


    }

//
//    else
//    {
//        alert('Sound else');
//        //Play sound for hit wall
//        var audioTag = document.getElementById('audiotagWallOrBox');
//        audioTag.play();
//    }
});
//

Maze.PlaceBomb = function (avatarX,avatarY,keyCode)
{
    if(Maze.canPlaceBomb == true)
    {

            //alert('PLace bomb');
            avatarXnew = avatarX;
            avatarYnew = avatarY;

            //65  == a
            //83 == s
            //68 == d
            //87 == w

            if(keyCode == 87)
            {
                //Up
                tileYUp = avatarYnew - 1;
                tileXUp = avatarXnew;

                oTile = Maze.tilemap[tileYUp][tileXUp];
                if(oTile.tileName == "WALL")
                {
                    if(Maze.numberOfBombs > 0)
                    {
                    //PLay beep sound
                    document.getElementById('beeps').play();
                    //alert('Tile is wall UP');
                    //Decement number of bombs
                    Maze.numberOfBombs--;
                    //Show number of bombs in gamestats
                    document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
                    //Place bomb on wall
                    Maze.tilemap[tileYUp][tileXUp].setTileType("WALLBOMB");
                    setTimeout(function(){Maze.BlowBomb(tileYUp,tileXUp)}, 3000);
                    Maze.canPlaceBomb = false;
                    }
                }
            }

            if(keyCode == 83)
            {
                //Down
                avatarXnew = avatarX;
                avatarYnew = avatarY;

                tileYDown = avatarYnew + 1;
                tileXDown = avatarXnew;

                oTile = Maze.tilemap[tileYDown][tileXDown];
                if(oTile.tileName == "WALL")
                {
                    if(Maze.numberOfBombs > 0)
                    {

                    //PLay beep sound
                    document.getElementById('beeps').play();
                    //alert('Tile is wall Down');
                    //Decement number of bombs
                    Maze.numberOfBombs--;
                    //Show number of bombs in gamestats
                    document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
                    Maze.tilemap[tileYDown][tileXDown].setTileType("WALLBOMB");
                    setTimeout(function(){Maze.BlowBomb(tileYDown,tileXDown)}, 3000);
                    Maze.canPlaceBomb = false;
                    }
                }
            }

            if(keyCode == 65)
            {
                //Left
                avatarXnew = avatarX;
                avatarYnew = avatarY;

                tileYLeft = avatarYnew;
                tileXLeft = avatarXnew - 1;

                oTile = Maze.tilemap[tileYLeft][tileXLeft];
                if(oTile.tileName == "WALL")
                {
                    if(Maze.numberOfBombs > 0)
                    {

                    //PLay beep sound
                    document.getElementById('beeps').play();
                    //alert('Tile is wall Left');
                    //Decement number of bombs
                    Maze.numberOfBombs--;
                    //Show number of bombs in gamestats
                    document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
                    Maze.tilemap[tileYLeft][tileXLeft].setTileType("WALLBOMB");
                    setTimeout(function(){Maze.BlowBomb(tileYLeft,tileXLeft)}, 3000);
                    Maze.canPlaceBomb = false;
                    }
                }
            }

            if(keyCode == 68)
            {
                //Right
                avatarXnew = avatarX;
                avatarYnew = avatarY;

                tileYRight = avatarYnew;
                tileXRight = avatarXnew + 1;

                oTile = Maze.tilemap[tileYRight][tileXRight];
                if(oTile.tileName == "WALL")
                {
                    if(Maze.numberOfBombs > 0)
                    {

                    //PLay beep sound
                    document.getElementById('beeps').play();
                    //alert('Tile is wall Right');
                    //Decement number of bombs
                    Maze.numberOfBombs--;
                    //Show number of bombs in gamestats
                    document.getElementById('numberOfBombs').innerHTML = "Number of bombs left: " + this.numberOfBombs;
                    Maze.tilemap[tileYRight][tileXRight].setTileType("WALLBOMB");
                    setTimeout(function(){Maze.BlowBomb(tileYRight,tileXRight)}, 3000);
                    Maze.canPlaceBomb = false;
                    }
                }
            }

    }
};

Maze.BlowBomb = function(tileY,tileX)
{
    //Play explosion sound
    document.getElementById('explosion').play();
    //alert('Blow at '+ tileY +','+ tileX);
    var oTile = Maze.tilemap[tileY][tileX];
    if(oTile.tileName == "WALLBOMB")
    {
        Maze.tilemap[tileY][tileX].setTileType("RUBBLETILE");
        Maze.canPlaceBomb = true;
    }

};

//
Maze.gameWin = function ()
{
    //If the are moves level to be played
    if(this.level.length > this.levelIndex+1)
    {
        //Stop the game timer
        Maze.StartTimer(1);

        //Calculate the highscore for the game
        this.calculatePoints();

        this.levelIndex++;
        this.showScene(Scene.LEVEL_COMPLETE);
    }
    //No move leves to be played end game
    else
    {
        this.showScene(Scene.GAME_COMPLETED);
        this.levelIndex = 0;
    }
};
//Game lose condition
//
Maze.GameIsOver = function ()
{
    alert('GAME OVER!');
    var element = document.getElementById('audiotagDead');
    element.play();
    //Stop the gunshooting
    Maze.shootGun = false;
    clearTimeout(Maze.timer2);
    //Stop the game timer
    Maze.StartTimer(1);
    //Set number of moves to zero
    Maze.iNumberOfMoves = 0;
    document.getElementById('numberOfMoves').innerHTML = "";

    //hide game stats
    $('#gameStats').hide();

    //Set iSeconds to zero
    Maze.iSeconds = 0;
    this.showScene(Scene.GAME_OVER);
    this.levelIndex = 0;
};

//countNumberOfBOXWINtiles
//
Maze.countNumberOfBOXWINtiles = function ()
{
    var Map = Maze.tilemap;
    var allRowsWin = Map.length,
        allColumnsWin = Map[0].length;
    var numberOfBOXWINtiles = 0;
    for (var row = 0; row < allRowsWin; row++)
    {
        for ( var column = 0; column < allColumnsWin; column++)
        {
            var thisTileName = Maze.tilemap[row][column];
            //console.log('thisTileCode is: ' + thisTileName.tileName);
            if(thisTileName.tileName == "BOXWIN")
            {
                numberOfBOXWINtiles++;
            }
        }
    }
    //Level 1
    if( this.levelIndex == 0)
    {
        if(numberOfBOXWINtiles == 1)
        {
            $("#game").hide();
            $("#video").show();
            const iframe = document.getElementById('videoFrame');

            // Create a Vimeo player instance
            const player = new Vimeo.Player(iframe);
        
            // Automatically play the video when the page loads
            player.play().then(() => {
                console.log("Video is playing!");
            }).catch(error => {
                console.error("Error playing video:", error);
            });


        }
    }
    //Level 2
    if( this.levelIndex == 1)
    {
        if(numberOfBOXWINtiles == 10)
        {
            //Open gate tile
            Maze.tilemap[4][9].setTileType("FLOORTILEWIN");
        }
    }
    //Level 3
    if( this.levelIndex == 2)
    {
        if(numberOfBOXWINtiles == 11)
        {
            //Open gate tile
            Maze.tilemap[0][11].setTileType("FLOORTILEWIN");
        }
    }
    //Level 4
    if( this.levelIndex == 0)
    {
        if(numberOfBOXWINtiles == 20)
        {
            alert('WIN');
            //Open gate tile
            Maze.tilemap[11][11].setTileType("FLOORTILEWIN");
        }
    }
};

//
Maze.iNumberOfMoves = 0;
Maze.CountMoves = function ()
{
    this.iNumberOfMoves++;
    document.getElementById('numberOfMoves').innerHTML = "Number of moves used: " + Maze.iNumberOfMoves;

}
//
Maze.calculatePoints = function ()
{
    document.getElementById('gameStats').style.display = "none";
    document.getElementById('numberOfMoves').innerHTML = "";
    document.getElementById('numberOfSeconds').innerHTML = "";

    var iStartPointScore = 1000;
    var moves = Maze.iNumberOfMoves;
    console.log('moves is: ' + moves);
    var seconds = Maze.iSeconds;
    console.log('seconds is: ' + seconds);
    var movesAndSeconds = moves + seconds;
    console.log('movesAndSeconds is: ' + movesAndSeconds);
    var finalScore = iStartPointScore - movesAndSeconds;
    document.getElementById('highscore').innerHTML = "Your score for this level is: " + finalScore;

    //Set number of moves to zero
    Maze.iNumberOfMoves = 0;
    //Set iSeconds to zero
    Maze.iSeconds = 0;
    //Save the score
    Maze.SaveGameScore(finalScore);
};
//
Maze.SaveGameScore = function(iPointScore)
{
    /*var sPlayerName = document.getElementById('sPlayerName').value;
    document.getElementById('sPlayerName').value = '';
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
 	xmlhttp = new XMLHttpRequest();

    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
           //alert('SaveScore works!');
        }
    };
    xmlhttp.open("GET","./API/api.php?sFunction=SaveScore&iPointScore="+iPointScore+"&sPlayerName="+sPlayerName,false);
    xmlhttp.send();*/
};
//
Maze.GetGameScores = function()
{
    /*var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
 	xmlhttp = new XMLHttpRequest();

    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
           //alert('xmlhttp.responseText is: ' + xmlhttp.responseText);
           var oJSON = eval('(' + xmlhttp.responseText + ')');
           //alert(oJSON);

           for(i=1; i<100; i++)
           {
                //If the JSON is undefined then break the for loop
                if(oJSON[i] == undefined)
                {
                    break;
                }
                else
                {
                    var name = oJSON[i].sPlayerName;
                    var points = oJSON[i].iPointScore;

                    document.getElementById('highscoreTable').innerHTML += '<tr><td>'+name+'</td><td>'+points+'</td></tr>';
                    document.getElementById('highscoreTable').style.display = "block";
                }
            }
        }
    };
    xmlhttp.open("GET","./API/api.php?sFunction=GetScores",false);
    xmlhttp.send();*/
};
//
Maze.iSeconds = 0;
Maze.StartTimer = function (isStopCount)
{
   if(isStopCount == 0)
   {
    var timer;
    this.startCount = function()
    {
        timer = setInterval(this.count,1000);
    }
    this.stopCount = function()
    {
        clearInterval(timer);
    }
    this.count = function()
    {
            Maze.iSeconds++;
            document.getElementById('numberOfSeconds').innerHTML = "Number of seconds used: " + Maze.iSeconds;
    }
    this.startCount();
   }
   if(isStopCount == 1)
   {
        this.stopCount();
   }
};
//
Maze.drawTile = function (img, row, column) {
    var tileX = column * Img.WIDTH + Img.OFFSET_X,
    tileY = row * Img.HEIGHT + Img.OFFSET_Y;
    Stage.CTX.clearRect(tileX, tileY, Img.WIDTH, Img.HEIGHT);
    Stage.CTX.drawImage(img, tileX, tileY);
}

//Check if avatar is hit by bullet
//
Maze.AvatarHitByBullet = function ()
{
    console.log('Avatar hit');
    //Get the sound element and play the sound
    document.getElementById('audiotag').play();
    this.numberOfAvatarLives--;
    document.getElementById('numberOfLives').innerHTML = "Number of lives left: " + this.numberOfAvatarLives;
    if(this.numberOfAvatarLives == 0)
    {
        this.GameIsOver();
    }
};

//Shoot bullet from gun
//
Maze.ShootGun = function (thisRow,thisColumn,maxNumOfColums)
{
    var originalStartColumn = Maze.originalStartColunm;
    if(thisColumn == maxNumOfColums)
    {
       //alert('Run again');
       clearTimeout(this.timer1);
       clearTimeout(this.timer2);
       thisColumn = originalStartColumn;
       if(Maze.shootGun == true)
       {
            Maze.ShootGun(thisRow,thisColumn,maxNumOfColums);
       }
       else
       {
            console.log('the gun is not shooting anymore');
       }
    }
    else
    {
        var thisRow = thisRow;
        var thisColumn = thisColumn;
        var oldTileCode;
        var typeOfBulletTileFloor = "WATERDROPTILE";
        var typeOfBulletTileWin = "WATERDROPWINTILE"
        //console.log('thisColumn is: ' + thisColumn);
        oldTileCode = Maze.tilemap[thisRow][thisColumn];
        //alert('oldTileCode.tileName ' + oldTileCode.tileName);
        if(oldTileCode.tileName == "FLOOR")
        {
                Maze.tilemap[thisRow][thisColumn].setTileType(typeOfBulletTileFloor);
                Maze.oldTileType = oldTileCode.tileName;

        }
        if(oldTileCode.tileName == "WIN")
        {
            Maze.tilemap[thisRow][thisColumn].setTileType(typeOfBulletTileWin);
            Maze.oldTileType = oldTileCode.tileName;
        }

        if(oldTileCode.tileName == "AVATAR")
        {
            //Check if game is won
            if(Maze.shootGun == true)
            {
                //Run the fuction AvatarHitByBullet
                this.AvatarHitByBullet();
            }
        }
        //Set timeout to run the change tile back again.
        Maze.timer1 = setTimeout(function(){ChangeTileBack(thisRow,thisColumn,1,maxNumOfColums)}, 120);


        function ChangeTileBack(thisRow,thisColumn,typeOfTile,maxNumOfColums)
        {
            //Level 1
            if(typeOfTile == 1)
            {
                    var typeOfBulletTile = "WATERDROPTILE";
                    var typeOfWinBulletTile = "WATERDROPWINTILE";
            }

            var isTileBullet = Maze.tilemap[thisRow][thisColumn];

            if(isTileBullet.tileName == typeOfBulletTile && Maze.oldTileType == "WATERDROPTILE")
            {
                Maze.tilemap[thisRow][thisColumn].setTileType("FLOOR");
            }

            if(isTileBullet.tileName == typeOfWinBulletTile && Maze.oldTileType == "WATERDROPWINTILE")
            {
                Maze.tilemap[thisRow][thisColumn].setTileType("WIN");
            }
            thisColumn++;
            Maze.timer2 = setTimeout(function(){Maze.ShootGun(thisRow,thisColumn,maxNumOfColums)}, 10);
        }
    }
};
//
$(document).ready( function () {
    //var element = document.getElementById('audiotagIntro');
    //element.play();
    Maze.init();
});


Maze.Tile = function(r, c, tc){

    var me = {};
    var tileNames = ["FLOOR" , "WALL", "EXIT", "AVATAR", "BOX", "BLANK", "WIN", "WINAVATAR", "BOXWIN", "SUPERSOAKER50TILE", "WATERDROPTILE", "WATERDROPWINTILE", "CLOSEDDOORTILE", "FLOORTILEWIN", "WALLBOMB", "RUBBLETILE" , "RUBBLEAVATARTILE", "SUPERSOAKER100TILE", "SUPERSOAKER2000TILE", "SUPERSOAKER5000TILE"];

    me.TileTypes = {
        FLOOR   : 0,
        WALL    : 1,
        EXIT    : 2,
        AVATAR  : 3,
        BOX     : 4,
        BLANK   : 5,
        WIN     : 6,
        WINAVATAR : 7,
        BOXWIN    : 8,
        SUPERSOAKER50TILE   : 9,
        WATERDROPTILE : 10,
        WATERDROPWINTILE : 11,
        CLOSEDDOORTILE : 12,
        FLOORTILEWIN : 13,
        WALLBOMB     : 14,
        RUBBLETILE   : 15,
        RUBBLEAVATARTILE : 16,
        SUPERSOAKER100TILE : 17,
        SUPERSOAKER2000TILE : 18,
        SUPERSOAKER5000TILE : 19
    };
//
    me.Imgs = {
        FLOOR      : $("#floor")[0],
        WALL       : $("#wall")[0],
        EXIT       : $("#blank")[0],
        AVATAR     : $("#avatar")[0],
        BOX        : $("#box")[0],
        BLANK      : $("#blank")[0],
        WIN        : $("#win")[0],
        WINAVATAR  : $("#winAvatar")[0],
        BOXWIN     : $("#boxWin")[0],
        SUPERSOAKER50TILE    : $("#superSoaker50Tile")[0],
        WATERDROPTILE    : $("#waterDropTile")[0],
        WATERDROPWINTILE : $("#waterDropWinTile")[0],
        CLOSEDDOORTILE : $("#closedDoorTile")[0],
        FLOORTILEWIN : $("#floorTileWin")[0],
        WALLBOMB      : $("#wallBomb")[0],
        RUBBLETILE    : $("#rubbleTile")[0],
        RUBBLEAVATARTILE    : $("#rubbleAvatarTile")[0],
        SUPERSOAKER100TILE : $("#superSoaker100Tile")[0],
        SUPERSOAKER2000TILE : $("#superSoaker2000Tile")[0],
        SUPERSOAKER5000TILE : $("#superSoaker5000Tile")[0],
        WIDTH      : 50,
        HEIGHT     : 50,
        OFFSET_X   : 25,
        OFFSET_Y   : 25
    };

    me.ctx = Stage.CTX;
    me.column = c;
    me.row = r;
    me.width = me.Imgs.WIDTH;
    me.height = me.Imgs.HEIGHT;
    me.x = me.column * me.width + me.Imgs.OFFSET_X;
    me.y = me.row * me.height + me.Imgs.OFFSET_Y;

    me.draw = function ()
    {
        me.ctx.clearRect(me.x, me.y, me.width, me.height);
        //Canvas function that draws an image
        me.ctx.drawImage(me.image, me.x, me.y);
    };

    me.setTileType = function(tname)
    {
        me.walkable = false;

        me.image = me.Imgs[tname];

        if(tname === "FLOOR")
        {
            me.walkable = true;
        }
        else if(tname === "AVATAR")
        {
            Maze.avatarX = c;
            Maze.avatarY = r;
        }
        else if (tname === "BOX")
        {
            me.walkable = true;
            //alert('Maze.boxX = c is: ' + Maze.boxX + 'Maze.boxY = r is: ' + Maze.boxY );
        }
        else if (tname === "BOXWIN")
        {
            me.walkable = true;
            //alert('Maze.boxX = c is: ' + Maze.boxX + 'Maze.boxY = r is: ' + Maze.boxY );
        }
        else if (tname === "WIN")
        {
            me.walkable = true;
            //alert('Maze.boxX = c is: ' + Maze.boxX + 'Maze.boxY = r is: ' + Maze.boxY );
        }
        else if (tname === "FLOORTILEWIN")
        {
            me.walkable = true;
            //alert('Maze.boxX = c is: ' + Maze.boxX + 'Maze.boxY = r is: ' + Maze.boxY );
        }
        else if (tname === "RUBBLETILE")
        {
            me.walkable = true;
            //alert('Maze.boxX = c is: ' + Maze.boxX + 'Maze.boxY = r is: ' + Maze.boxY );
        }
        //This is only set as walkable for the sound to be played
        else if (tname === "WALL")
        {
            me.walkable = true;
            //alert('Maze.boxX = c is: ' + Maze.boxX + 'Maze.boxY = r is: ' + Maze.boxY );
        }


        var tc = me.TileTypes[tname];
        me.tileType = tc;
        me.tileName = tname;
        me.draw();
    }


    me.setTileType(tileNames[tc]);

    //This function is not used
    //me.draw();

    return me;
}
