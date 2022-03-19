import styles from './editor-view.module.scss';
import { BiPencil } from "react-icons/bi";
import { GiStraightPipe } from "react-icons/gi";
import { FiCircle } from "react-icons/fi";
import { BsEraser } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import { AiFillPrinter, AiOutlineBoxPlot } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { useState } from 'react';
import Canvas from '../canvas/canvas';

/* eslint-disable-next-line */
export interface EditorViewProps {}

export enum Tool {
  PencilTool,
  LineTool,
  EclipseTool,
  EraserTool,
  MagicTool,
}

export function EditorView(props: EditorViewProps) {

  const [tool, setTool] = useState<Tool>(Tool.PencilTool);

  const downloadCanvas = () => {
    const canvas = document.getElementById('drawCanvas') as HTMLCanvasElement;
    const url = canvas?.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = url;
    link.click();
  }

  return (
    <div className={styles['container']}>

      <div className={styles['draw-area']}>
        <div className={styles['tools']}>
          <div>
            <button className={styles['btn']} onClick={() => setTool(Tool.PencilTool)} >
              <BiPencil />
            </button>
            <button className={styles['btn']} onClick={() => setTool(Tool.LineTool)} >
              <GiStraightPipe />
            </button>
            <button className={styles['btn']} onClick={() => setTool(Tool.EclipseTool)}>
              <FiCircle />
            </button>
            <button className={styles['btn']} onClick={() => setTool(Tool.EraserTool)}>
              <BsEraser />
            </button>
            <button className={styles['btn']} onClick={() => setTool(Tool.MagicTool)}>
              <IoSparklesSharp />
            </button>
            <button className={styles['btn']}>
              <AiFillPrinter />
            </button>
            <button className={styles['btn']}>
              <AiOutlineBoxPlot />
            </button>
            <button className={styles['btn']} onClick={() => downloadCanvas()}>
              <MdDownload />
            </button>
          </div>
        </div>
        <Canvas tool={tool} />
      </div>
    </div>
  );
}

export default EditorView;
