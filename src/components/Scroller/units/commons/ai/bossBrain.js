import { MoveCode , getActionSet } from '../../boss/models/states';
import { Directions } from '../../../constants';

export const ActionCode = { ...MoveCode };

export function randomRange (min, max) {
    const actualMax = max + 1;
    const rand = Math.floor( Math.random() * (actualMax - min)) + min; 
    //console.log("Random Generated...: ", rand);
    return rand;
}

export function selectRange () {
    return randomRange(0,9);
}

function standBy() {
    return {
        standByCount: 0,
        standByLength: randomRange(20,80), 
    }
}

function walk() {
    return {
        totalSteps: randomRange(1,7), 
        stepCount: 0,
        unitSteps: 0,
        direction: (randomRange(0,1) === 1) ? Directions.LEFT : Directions.RIGHT,
    }
}

function jump() {
    return {
        jumpPower: randomRange(10,30),
        direction: (randomRange(0,1) === 1) ? Directions.LEFT : Directions.RIGHT,
    }
}

function attack() {
    return {
        attackCount: 0,
        cycle: randomRange(1,5), 
    }
}

function jumpAttack() {
    return {
        attackCount: 0,
        cycle: randomRange(1,3),
    }
}

const aiPropsFuncs =  {
    [MoveCode.WAIT]: standBy,
    [MoveCode.WALK]: walk,
    [MoveCode.JUMP]: jump,
    [MoveCode.ATTACK]: attack,
    [MoveCode.JUMP_ATTACK]: jumpAttack,
};

export function think(boss) {

    if (!boss.onStandBy) {
        boss.onStandBy = true;
        return {
            type: MoveCode.WAIT,
            completed: false,
            ...standBy(),
        }   
    }
   
    const actions = getActionSet(boss);
    const index = selectRange();
    const action = actions[index];
    const paramFunc = aiPropsFuncs[action];
    const aiVariations = (paramFunc && typeof paramFunc === 'function') ? paramFunc(): {};
    boss.onStandBy = false;
    const result = {
        type: action,
        completed: false,
        ...aiVariations,
    };
    return result;
}
