"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineDraw = void 0;
class LineDraw {
    constructor(start, end) {
        this.boardLimits = {
            x: 16,
            y: 11
        };
        this.startPoint = start;
        this.endPoint = end;
        this.validatePoints();
        this.drawLine();
    }
    drawLine() {
        // implemented by Bresenham's line algorithm Converted to Code
        let x1 = this.startPoint.x;
        let y1 = this.startPoint.y;
        let x2 = this.endPoint.x;
        let y2 = this.endPoint.y;
        let dx = Math.abs(x2 - x1);
        console.log("dx: " + dx);
        let dy = Math.abs(y2 - y1);
        console.log("dy: " + dy);
        let sx = (x1 < x2) ? 1 : -1;
        console.log("sx: " + sx);
        let sy = (y1 < y2) ? 1 : -1;
        console.log("sy: " + sy);
        let err = dx - dy;
        console.log("err: " + err);
        while (true) {
            console.log(`(${x1}, ${y1})`);
            if ((x1 === x2) && (y1 === y2))
                break;
            let e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }
    }
    validatePoints() {
        if (this.startPoint.x < 0 || this.startPoint.x > this.boardLimits.x) {
            throw new Error(`Invalid starting point of X input`);
        }
        if (this.startPoint.y < 0 || this.startPoint.y > this.boardLimits.y) {
            throw new Error("Invalid starting point of Y input");
        }
        if (this.endPoint.x < 0 || this.endPoint.x > this.boardLimits.x) {
            throw new Error(`Invalid end point of X input`);
        }
        if (this.endPoint.y < 0 || this.endPoint.y > this.boardLimits.y) {
            throw new Error("Invalid end point of Y input");
        }
    }
}
exports.LineDraw = LineDraw;