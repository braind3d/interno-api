import { useEffect, useRef, useState } from 'react';
import { Tool } from '../editor-view/editor-view';
import styles from './canvas.module.scss';
import { LineTool } from './line-tool';

/* eslint-disable-next-line */
export interface CanvasProps {
  tool: Tool,
}

export function Canvas(props: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvasElement: HTMLElement | null;
  let ctx : any = null;
 
  useEffect(() => {
    const canvasEle = canvasRef.current;
    if (canvasEle === null) {
      throw new Error('Canvas is not present');
    }
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
 
    // get context of the canvas
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 842, 595);

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    canvasElement = document.getElementById('drawCanvas');
    if (canvasElement === null) {
      throw new Error('Canvas is not present');
    }
    const lineTool = new LineTool(canvasElement, ctx)

    switch (props.tool) {
      case Tool.LineTool:
        if (canvasElement) {
          canvasElement.addEventListener('mousedown', lineTool.mouseDownListener);
          canvasElement.addEventListener('mousemove', lineTool.mouseMoveListener);
          canvasElement.addEventListener('mouseup', lineTool.mouseUpListener);
          
          canvasElement.addEventListener('touchstart', lineTool.mouseDownListener);
          canvasElement.addEventListener('touchmove', lineTool.mouseMoveListener);
          canvasElement.addEventListener('touchend', lineTool.mouseUpListener);
        }
        break;
    
      default:
        break;
    }
  }, [props.tool]);  
  
  
  

  return (
    <div className={styles['container']}>
        <canvas ref={canvasRef} className={styles['canvas']} id="drawCanvas">
        </canvas>
    </div>
  );
}

export default Canvas;
