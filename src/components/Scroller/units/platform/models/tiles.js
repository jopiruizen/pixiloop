import { TextureNames } from '../../../textures';

export const Tiles1 = [
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],

    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,1,1,1,  1,0,0,0,0,  0,0,0,0,1, 1,1,1,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],

    [ 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,1,1,  1,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0 ],
    [ 1,1,0,0,0,  0,1,1,0,0, 0,0,0,0,0,  0,0,1,1,1,  1,1,1,0,0, 0,0,0,0,0, 0,0,1,1,0, 0,0,0,1,1 ],
    [ 1,1,0,0,0,  0,1,1,0,0, 0,0,0,0,0,  0,1,1,1,1,  1,1,1,1,0, 0,0,0,0,0, 0,0,1,1,0, 0,0,0,1,1 ],    
    [ 1,1,1,1,1,  1,1,1,1,1, 1,1,1,1,1,  1,1,1,1,1,  1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1 ], 
];


export const TileType = {
    BG: 0,
    WALL: 1, /* Hero can step on it, will bump on it and cannot go through */
    FLOOR_ONLY: 2, /* HERO CAN STEP ON IT BUT CAN JUMP ON IT */
    OBJECT: 3,
    SLIPPERY_WALL: 11,
    SLIPPERY_FLOOR_ONLY: 12,
};

export const TileProperties = [
     /* Tile = 0 */ 
    { type: TileType.BG, texture: TextureNames.TILE },
     /* Tile = 1 */ 
    { type: TileType.WALL, texture: TextureNames.ROADBLOCK },
]

export function makeTile(i , visible ) {
    return { ...TileProperties[i], visible };
}