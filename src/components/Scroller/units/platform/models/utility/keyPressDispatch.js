import { 
    KeyCodeTypes, 
    KeyTypes, 
    KeyCodeDirections,  
    KeyActions,
} from '../../../../constants';


function pushKeyAction(kState, keyCode){
    let keyAction = kState.actions[keyCode.toString()]; 
    if ( keyAction === undefined || keyAction === null) {
        kState.actions[keyCode.toString()] = {  
            type: KeyActions[keyCode.toString()],
            actionDone: false,
            keyUp: false,
        };
    }
}

function popKeyAction( kState, keyCode) {
    let keyAction = kState.actions[keyCode.toString()];
    if ( keyAction !== undefined ) {
        keyAction.keyUp = true;
        if( keyAction.actionDone === true ) {
           delete kState.actions[keyCode.toString()];
        }
    }
}

/*
 * The following function will register and unregister key presses and will be validate during the game loop cycle.
 */ 

export function pushKeyPresses (state, { keyCode }) {
    let kState = state['keyPress'];
    let keyType = KeyCodeTypes[keyCode.toString()];
    if( keyType === KeyTypes.DIRECTIONAL) {
        if (kState.direction === -1) {
            kState.direction = KeyCodeDirections[keyCode.toString()];
        }
    } else if( keyType === KeyTypes.ACTION) {
        pushKeyAction(kState, keyCode);
    }
}

export function popKeyPresses ( state, { keyCode }) {
    let kState = state['keyPress'];
    let keyType = KeyCodeTypes[keyCode.toString()];
    if( keyType === KeyTypes.DIRECTIONAL) {
        kState.oldDirection = kState.direction;
        kState.direction = -1;
    } else if( keyType === KeyTypes.ACTION) {
       popKeyAction(kState,keyCode);
    }
}