
import { Directions, KeyActions , PlatformEdge } from '../../../../constants';
import { TileType } from '../../../platform/models/tiles';

function moveRight(hero, platform) {
    hero.x += hero.stepSize; 
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

function fall(hero, platform) {
    hero.verticalSpeed += hero.gravity;
    hero.y += hero.verticalSpeed;
    
    const mapX = Math.floor((hero.x) / platform.unitSize) + platform.stageVisibility.startX;
    const mapY = Math.floor((hero.y + hero.height) / platform.unitSize);
    
    if( mapY < platform.stage.length) {
        console.log("MapY: " , mapY , " Map X: ", mapX );
        const tileBelow = platform.stage[mapY][mapX];
        if (tileBelow.type === TileType.WALL) {
            console.log(" Will Stop at MapY: " , mapY );
            console.log(tileBelow);
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
       fall(hero, platform)
       if (hero.atGround) deleteAction(keyPress,'74');
    }

}