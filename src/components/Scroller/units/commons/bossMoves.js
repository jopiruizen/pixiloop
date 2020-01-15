

import { Directions, KeyActions , PlatformEdge } from '../../constants';

import { charMoveLeft, charMoveRight} from './walk';
import { jump } from './jump';
import { fall } from './fall';
import { think , ActionCode } from './ai/bossBrain';


function standBy({boss,platform}) {

    const { action } = boss;
    action.standByCount += 1;
    if (action.standByCount >= action.standByLength) {
        action.completed = true;
    }
}

function walk({boss, platform}) {
    const { action } = boss;
    if (action.direction === Directions.LEFT) {
        charMoveLeft(boss, platform);
    } else if ( action.direction === Directions.RIGHT) {
        charMoveRight(boss, platform);
    }
    
    action.unitSteps += boss.stepSize;
    if (action.unitSteps % platform.unitSize === 0) {
        action.unitSteps = 0;
        action.stepCount += 1;
    }

    if ( action.stepCount >= action.totalSteps) {
        console.log("walking completed...");
        action.completed = true;
    }
}


function jumpOnly({boss, platform }) {
    console.log("");
    console.log("jumpOnly()...");
    boss.action.completed = true;
}

function jumpAttack({boss, platform}) {
    console.log("");
    console.log("jumpAttack()...");
    boss.action.completed = true;
}

function attack({boss, platform}) {
    console.log("");
    console.log("attack()...");
    boss.action.completed = true;
}

const bossActions = {
    [ActionCode.WAIT]: standBy,
    [ActionCode.WALK]: walk,
    [ActionCode.JUMP]: jumpOnly,
    [ActionCode.ATTACK]: attack,
    [ActionCode.JUMP_ATTACK]: jumpAttack,
};

export function bossMoves( {boss, platform} ){
    
    if (boss.action === undefined || boss.action.completed) {
        console.log("");
        console.log("boss Think...");
        boss.action = think(boss);
        console.log("boss Action: ", boss.action);
    } 

    if (boss.action !== undefined && boss.action.completed === false) {
        const actionFunc = bossActions[boss.action.type];
        if( actionFunc && typeof actionFunc === 'function') {
            actionFunc({boss, platform});
        }
    }

    if (!boss.atGround && !boss.jumping) {
        fall(boss, platform, {})
    }
  
}
