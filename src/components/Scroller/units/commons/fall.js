import { TileType } from '../platform/models/tiles';

import { isWall, hasGroundBelow } from './validations';

function shouldFall(hero, platform, direction ) {
    if (hero.isJumping || hero.atGround === false) return;
    let  mapY = Math.floor((hero.y + hero.height) / platform.unitSize);
    let mapX = Math.floor( hero.x / platform.unitSize) + platform.stageVisibility.startX;
    
    const tileLeft = platform.stage[mapY][mapX];
    const tileRight = platform.stage[mapY][mapX +1 ];
    if ( isWall(tileLeft) ||  isWall(tileRight) ) {
        console.log("SHOULD FALL NOW>>>");
        hero.verticalSpeed = 0;
        hero.atGround = false;
    }
 
}

function stopFallStraight(hero, platform) {

}

function stopFallLeft(hero, platform) {

}

function stopFallRight(hero, platform) {

}
 

export function fall (hero, platform, direction) {
    hero.verticalSpeed += hero.gravity;
    hero.y += hero.verticalSpeed;

    const xPos = hero.x / platform.unitSize;
    const mapX = Math.floor(xPos) + platform.stageVisibility.startX;
    const mapY = Math.floor((hero.y + hero.height) / platform.unitSize);
    
    if( mapY < platform.stage.length) {
        const tileRight = platform.stage[mapY][mapX];
        if ( hasGroundBelow( platform.stage, mapX, mapX + 1 , mapY) ) {
            hero.atGround = true;
            hero.jumping = false;
            hero.y = tileRight.y - hero.height;
            hero.verticalSpeed = 0;
        }

    } else if(  mapY > platform.stage.length) {
        //fall out of the screen...
        hero.verticalSpeed = 0;
        hero.atGround = true;
    }
}

