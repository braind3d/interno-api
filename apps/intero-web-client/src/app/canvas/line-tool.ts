export class LineTool {
  canvasElement: HTMLElement;
  ctx: CanvasRenderingContext2D;
  startLinePosition = { x: 0, y: 0 };
  endLinePosition = { x: 0, y: 0 };
  isDrawingLine = false;

  constructor(canvasElement: HTMLElement, ctx: CanvasRenderingContext2D) {
    this.canvasElement = canvasElement;
    this.ctx = ctx;
  }

  drawLine = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.startLinePosition.x, this.startLinePosition.y);
    this.ctx.lineTo(this.endLinePosition.x, this.endLinePosition.y);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  };

  getClientOffset = (event: any) => {
    const { pageX, pageY } = event.touches ? event.touches[0] : event;
    if (this.canvasElement === null) {
      throw new Error('Canvas is not present');
    }
    const x = pageX - this.canvasElement.offsetLeft;
    const y = pageY - this.canvasElement.offsetTop;

    return {
      x,
      y,
    };
  };

  mouseDownListener = (event: any) => {
    this.startLinePosition = this.getClientOffset(event);
    this.isDrawingLine = true;
  };

  mouseMoveListener = (event: any) => {
    if (!this.isDrawingLine) return;

    this.endLinePosition = this.getClientOffset(event);
    this.clearCanvas();

    this.drawLine();
  };

  mouseUpListener = (event: any) => {
    this.isDrawingLine = false;
  };

  clearCanvas = () => {
    if (this.canvasElement === null) {
      throw new Error('Canvas is not present');
    }
    console.log('this', this);
    this.ctx.clearRect(0, 0, 842, 595);
  };
}
