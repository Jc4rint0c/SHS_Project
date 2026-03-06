/**
 * @extends {Ghost}
 * The Pinky Class
 */
class Pinky extends Ghost {

    /**
     * The Pinky constructor
     * @param {Canvas}  canvas
     * @param {?number} dots
     */
    constructor(canvas, dots) {
        super();

        this.paths = {
            inPen: [
                { dir: { x: 0, y: -1 }, disty: 252, next: 1 },
                { dir: { x: 0, y: 1 }, disty: 270, next: 0 }
            ],
            exitPen: [
                { dir: { x: 0, y: -1 }, disty: 207, next: null }
            ],
            enterPen: [
                { dir: { x: -1, y: 0 }, distx: 252, next: 1 },
                { dir: { x: 0, y: 1 }, disty: 261, next: null }
            ]
        };

        this.id = 1;
        this.x = 243;
        this.y = 261;
        this.scatter = { x: 2, y: -3 };
        this.inPen = true;
        this.color = Pinky.color;

        this.init(canvas, dots);
        this.x = 252;           // pen center x (overrides init's getTileCenter(13)=243)
        this.tileCenter.x = 252;
        this.setPath("inPen");
    }

    /**
     * Returns the Ghost's name
     * @return {string}
     */
    static get name() {
        return "Pinky";
    }

    /**
     * Returns the Ghost's color
     * @return {string}
     */
    static get color() {
        return "rgb(255, 153, 153)";
    }



    /**
     * Pinky's target is always 4 tiles ahead of the Blob
     * @param {Blob} blob
     * @return {{x: number, y: number}}
     */
    chase(blob) {
        let targetx = blob.getTile().x + 4 * blob.getDir().x,
            targety = blob.getTile().y + 4 * blob.getDir().y;

        // Recreating bug where Up = Up+Left
        if (blob.getDir().y === -1) {
            targetx -= 4;
        }
        return { x: targetx, y: targety };
    }
}
