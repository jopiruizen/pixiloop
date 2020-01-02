import * as PIXI from 'pixi.js';

const ticker = PIXI.Ticker.shared;
ticker.autoStart = false;

export const PixiLoopMode = {
    DEFAULT: 'default',
};

class PixiLoop {

    constructor() {
        this.mode = PixiLoopMode.DEFAULT;
        this.loopStarted = false;
        this.setupFunc = null;
        this.mechanics = {};
        this.state = {};
        this.displays = {};
        this.dispatch = {};
        this.stateChanges = {};
    }

    init( {pixiSettings, models}) {
        this.app = new PIXI.Application(pixiSettings);
        const keys = Object.keys(models);
        for ( let key of keys) {
            console.log("Key: ", key);
            console.log(models[key]);
            if (models[key].dispatch ) {
                this.makeDispatch(key,models[key].dispatch);
            }
            if( models[key].mechanics) this.mechanics[key] = models[key].mechanics;
            if( models[key].state) this.state[key] = models[key].state;
        }
    }

    setupGame(){
        console.log("pixiloop");
        console.log("Setup Games");
        const keys = Object.keys(this.displays);
        for(let key of keys) {
            const display = this.displays[key];
            if (display.setup && 
                typeof display.setup === 'function' 
                && this.state[key]) {
                display.setup(this.state[key]);
            }
        }
    }

    makeDispatch(context,dispatch) {
        let keys = Object.keys(dispatch);
        if( this.dispatch[context] === undefined) this.dispatch[context] = {};
        for( let key of keys) {
            const func = dispatch[key];
            this.dispatch[context][key] = ( params ) => {
               func( this.state, params );
            }
        }
       
    }

    tagChanges(changes) {
        for( let changedState of changes) {
            this.stateChanges[changedState] = true;
        }
    }

    start(){
        const self  = this;
        function gameLoop(){
            self.updateGameState();
            self.updateDisplays();
        }
        if (!this.loopStarted){
            ticker.add(gameLoop);
            ticker.start();
            this.loopStarted = true;
        }
    }

    stop() {
        ticker.stop();
    }
    
    updateGameState() {
        const keys =  Object.keys(this.mechanics);
        for( let key of keys) {
            let mKeys = Object.keys(this.mechanics[key]);
            let mechs = this.mechanics[key];
            for( let mKey of mKeys) {
                const mechObj = mechs[mKey];
                const func = mechObj.mechanicsFunction;
                if(mechObj.modes.includes(this.mode) && func && typeof func === 'function'){
                    const {
                        state,
                        changes,
                    } = func( {state: this.state, key: key} );
                    if (changes.length > 0) {
                        this.state = state;
                        this.tagChanges(changes);
                    }  
                }
            }
        }
    }

    updateDisplays(){
        const keys =  Object.keys(this.displays);
        for( let key of keys) {
            let display = this.displays[key];
            if( this.stateChanges[key] && display && display.update ) {
                display.update( { fullState: this.state, state: this.state[key], key: key });
            }
            this.stateChanges[key] = false;
        }
    }
}

const pixiloop = new PixiLoop();
export default pixiloop;

export function changeMode(mode) {
    pixiloop.mode = mode;
}

export function registerDispatch(name, func) {
    pixiloop.dispatch[name] = (params) => (func(pixiloop.state, params));
};

export function useDispatch() {
  return pixiloop.dispatch;
}

export function getGameState() {
    return pixiloop.state;
}

export function registerDisplayAndState( name, display, initialState = null) {
    pixiloop.displays[name] = display;
    if (initialState) pixiloop.state[name] = initialState;
}

export function unregisterDisplayAndState(name) {
    delete pixiloop.displays[name];
    delete pixiloop.state[name];
}