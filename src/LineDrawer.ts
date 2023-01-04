interface Input {
	x: number,
	y: number
}

export class LineDraw {
	private startPoint: Input;
	private endPoint: Input;
	private boardLimits = {
		x: 16,
		y: 11 
	}

	constructor(start: Input, end: Input) {
		this.startPoint = start;
		this.endPoint = end;
		this.validatePoints();
		this.drawLine();
	}
	
	drawLine(): void {
		// implemented by Bresenham's line algorithm Converted to Code
		let x1 = this.startPoint.x;
		let y1 = this.startPoint.y;
		let x2 = this.endPoint.x;
		let y2 = this.endPoint.y;
		
		let dx = Math.abs(x2 - x1);
		let dy = Math.abs(y2 - y1);
		let sx = (x1 < x2) ? 1 : -1;
		let sy = (y1 < y2) ? 1 : -1;
		let err = dx - dy;
		
		while (true) {
			console.log(`(${x1}, ${y1})`);
			
			if ((x1 === x2) && (y1 === y2)) break;
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

	validatePoints(): void {
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
