interface Line {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export class PencilTool {
  canvasElement: HTMLElement;
  ctx: CanvasRenderingContext2D;
  startLinePosition = { x: 0, y: 0 };
  endLinePosition = { x: 0, y: 0 };
  isDrawingLine = false;
  current = {
    x: 0,
    y: 0,
    color: 'black',
  };

  constructor(canvasElement: HTMLElement, ctx: CanvasRenderingContext2D) {
    this.canvasElement = canvasElement;
    this.ctx = ctx;
  }

  drawLine = (line: Line) => {
    this.ctx.beginPath();
    this.ctx.moveTo(line.startX, line.startY);
    this.ctx.lineTo(line.endX, line.endY);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  };

  mouseDownListener = (event: any) => {
    this.isDrawingLine = true;

    this.current.x = event.pageX - (this.canvasElement?.offsetLeft ?? 0);
    this.current.y = event.pageY - (this.canvasElement?.offsetTop ?? 0);
  };

  mouseMoveListener = (event: any) => {
    if (!this.isDrawingLine) return;

    this.drawLine({
      startX: this.current.x,
      startY: this.current.y,
      endX: event.pageX - (this.canvasElement?.offsetLeft ?? 0),
      endY: event.pageY - (this.canvasElement?.offsetTop ?? 0),
    });

    this.current.x = event.pageX - (this.canvasElement?.offsetLeft ?? 0);
    this.current.y = event.pageY - (this.canvasElement?.offsetTop ?? 0);
  };

  mouseUpListener = (event: any) => {
    this.isDrawingLine = false;
    this.drawLine({
      startX: this.current.x,
      startY: this.current.y,
      endX: event.pageX - (this.canvasElement?.offsetLeft ?? 0),
      endY: event.pageY - (this.canvasElement?.offsetTop ?? 0),
    });
  };
}
