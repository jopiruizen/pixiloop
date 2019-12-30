
import pixiloop from '../../pixiloop/';
import * as models from './models';

class GameController {

    init(container) {
        pixiloop.init({
            pixiSettings:  {
                width: 400,
                height: 300,
                backgroundColor: 0xFF9900,
                resolution: window.devicePixelRatio || 1,
            },
            models,
        });
        container.appendChild(pixiloop.app.view);
        pixiloop.start();
    }
}

export default new GameController();