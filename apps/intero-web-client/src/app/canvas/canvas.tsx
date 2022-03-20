import { useCallback, useEffect, useRef, useState } from 'react';
import { Tool } from '../editor-view/editor-view';
import styles from './canvas.module.scss';
import { LineTool } from './line-tool';
import { PencilTool } from './pencil-tool';

/* eslint-disable-next-line */
export interface CanvasProps {
  tool: Tool,
}

export function Canvas(props: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvasElement: HTMLElement | null;
  let ctx : any = null;
  const position = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) {
      throw new Error('Canvas is not present');
    }
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
 
    // get context of the canvas
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 842, 595);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    canvasElement = document.getElementById('drawCanvas');

    console.log('-----', canvasElement);
    if (canvasElement === null) {
      throw new Error('Canvas is not present');
    }

    const lineTool = new LineTool(canvasElement, ctx);
    const pencilTool = new PencilTool(canvasElement, ctx);

    switch (props.tool) {
      case Tool.LineTool:
        if (canvasElement) {
          canvasElement.removeEventListener('mousedown', pencilTool.mouseDownListener);
          canvasElement.removeEventListener('mousemove', pencilTool.mouseMoveListener);
          canvasElement.removeEventListener('mouseup', pencilTool.mouseUpListener);
          canvasElement.addEventListener('mousedown', lineTool.mouseDownListener);
          canvasElement.addEventListener('mousemove', lineTool.mouseMoveListener);
          canvasElement.addEventListener('mouseup', lineTool.mouseUpListener);
        }
        break;
      
      case Tool.PencilTool:
        if (canvasElement) {
          canvasElement.removeEventListener('mousedown', lineTool.mouseDownListener);
          canvasElement.removeEventListener('mousemove', lineTool.mouseMoveListener);
          canvasElement.removeEventListener('mouseup', lineTool.mouseUpListener);
          canvasElement.addEventListener('mousemove', pencilTool.mouseMoveListener);
          canvasElement.addEventListener('mousedown', pencilTool.mouseDownListener);
          canvasElement.addEventListener('mouseup', pencilTool.mouseUpListener);
        }
        break;
    
      default:
        break;

      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tool]);  
  

  return (
    <div className={styles['container']}>
        <canvas ref={canvasRef} className={styles['canvas']} id="drawCanvas">
        </canvas>
    </div>
  );
}

export default Canvas;
