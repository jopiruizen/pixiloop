import * as PIXI from 'pixi.js';
import { registerDisplayAndState, unregisterDisplayAndState } from '../../../../pixiloop';
import Textures from '../../textures';

import SnakeNode from './SnakeNode';
const SNAKE_NAMESPACE = 'snake';

class Snake extends PIXI.Container {

    constructor(){
        super();
        registerDisplayAndState(SNAKE_NAMESPACE, this);
    }
    
    destroy(options){
        unregisterDisplayAndState(SNAKE_NAMESPACE);
        super.destroy(options);
    }

    setup(state){
        this.state = state;
        this.nodes = [];
        this.removeChildren();
        this.nodeMask = new PIXI.Sprite(Textures.MASK);
        this.nodeMask.width = 600;
        this.nodeMask.height = 600;
        this.nodeMask.x = 0;
        this.nodeMask.y = 0;
        this.addChild(this.nodeMask);
        this.renderNodes();
    }

    update({state}) {
        this.state = state;
        this.renderNodes();

    }

    renderNodes(){
        const nodes = this.state.nodes;
        for( var i = 0; i < nodes.length; i++) {
            if(this.nodes[i] === null || this.nodes[i] === undefined)  {
                this.nodes[i] = new SnakeNode();
                this.nodes[i].mask = this.nodeMask;
                this.addChild(this.nodes[i]);
            }
            this.renderNode(this.nodes[i], nodes[i]);
        }
    }

    renderNode(snakeNode, node) {
        snakeNode.width = this.state.nodeSize;
        snakeNode.height = this.state.nodeSize;
        snakeNode.x = node.x;
        snakeNode.y = node.y;

    }

}

export default Snake;