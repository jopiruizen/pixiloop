
import { Directions, KeyActions , PlatformEdge } from '../../../../constants';
import { TileType } from '../../../platform/models/tiles';

function moveRight(hero, platform) {
    hero.x += hero.stepSize; 
    const maxPlatformWidth =  platform.stageVisibility.width * platform.unitSize;
    if( hero.x + hero.width >= maxPlatformWidth) hero.x = maxPlatformWidth - hero.width; 
    let mapX = Math.floor( hero.x / platform.unitSize);
    let middleX = Math.floor(platform.stageVisibility.width / 2)
    hero.atMiddleX = false;
    if (hero.platformEdge === PlatformEdge.RIGHT_EDGE) return;
    if (mapX >= middleX) {
        hero.platformEdge = PlatformEdge.NO;
        hero.x = middleX * platform.unitSize;
        hero.atMiddleX = true;
    }
}

function moveLeft(hero, platform) {
    hero.x -= hero.stepSize;
    if( hero.x <= 0) hero.x = 0;
    let mapX = Math.floor( hero.x / platform.unitSize);
    let middleX = Math.floor(platform.stageVisibility.width / 2);
    hero.atMiddleX = false;

    if (hero.platformEdge === PlatformEdge.LEFT_EDGE) return;

    if (mapX < middleX){
        hero.platformEdge = PlatformEdge.NO;
        hero.x = middleX * platform.unitSize;
        hero.atMiddleX = true;
    }
}

function jump( hero, platform, keyPress) {
    hero.verticalSpeed += hero.gravity;
    hero.y = hero.y + hero.verticalSpeed;
    if( hero.verticalSpeed >= 0) {
        hero.verticalSpeed = 0;
        hero.jumping = false;
        hero.atGround = false;
        keyPress.actions['74'].actionDone = true;
       //deleteAction(keyPress,'74');
    }
}

function hasGroundBelow(tile, tileLeft, tileRight, direction, xPosition, sensitivity ) {
    console.log("");
    console.log("hasGroundBelow()....");
    console.log( tileLeft )
    console.log( tile )
    console.log( tileRight )
    console.log(direction);
    console.log(xPosition)
    console.log(sensitivity);
}   

function fall(hero, platform, direction) {
    hero.verticalSpeed += hero.gravity;
    hero.y += hero.verticalSpeed;

    const xPos = (hero.x + ( hero.width/2)) / platform.unitSize;
    const stepSensitivity = (hero.x + ( hero.width/2)) % platform.unitSize;
    const mapX = Math.floor(xPos) + platform.stageVisibility.startX;
    
    const mapY = Math.floor((hero.y + hero.height) / platform.unitSize);
    
    if( mapY < platform.stage.length) {
        const tileBelow = platform.stage[mapY][mapX];
        const tileLeft = platform.stage[mapY] [mapX - 1];
        const tileRight = platform.stage[mapY][mapX + 1];
        hasGroundBelow(tileBelow, tileLeft, tileRight, direction, xPos, stepSensitivity)
        if (tileBelow.type === TileType.WALL) {
            hero.atGround = true;
            hero.jumping = false;
            hero.y = tileBelow.y - hero.height;
        }

    } else if(  mapY > platform.stage.length) {
        //fall out of the screen...
        hero.verticalSpeed = 0;
        hero.atGround = true;
    }
}

function deleteAction(keyPress, keyCode){
    if ( keyPress.actions[keyCode] && 
        keyPress.actions[keyCode].keyUp &&  
        keyPress.actions[keyCode].actionDone) {
        delete keyPress.actions[keyCode];
    }
}

export function heroOnMotion( {hero, keyPress, platform} ) {

    if( keyPress.direction === Directions.LEFT ) {
        moveLeft(hero, platform)
    } else if ( keyPress.direction === Directions.RIGHT) {
        moveRight(hero, platform);
    }

    /* Jump Key Validation */
    //console.log("For Jump?", keyPress , " Hero: ", hero.jumping);
    if (keyPress.actions['74'] !== undefined &&
        !keyPress.actions['74'].actionDone &&
        hero.jumping === false) {
        hero.verticalSpeed = -hero.jumpSpeedStart;
        hero.jumping = true;
    }

    if( hero.verticalSpeed < 0) {
        jump( hero, platform, keyPress);
    }

    if (!hero.atGround && !hero.jumping) {
       fall(hero, platform, keyPress.direction)
       if (hero.atGround) deleteAction(keyPress,'74');
    }

}