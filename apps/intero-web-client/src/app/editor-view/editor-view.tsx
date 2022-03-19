import styles from './editor-view.module.scss';
import { BiPencil } from "react-icons/bi";
import { GiStraightPipe } from "react-icons/gi";
import { FiCircle } from "react-icons/fi";
import { BsEraser } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import { AiFillPrinter, AiOutlineBoxPlot } from "react-icons/ai";
import { MdDownload } from "react-icons/md";

/* eslint-disable-next-line */
export interface EditorViewProps {}

export function EditorView(props: EditorViewProps) {

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
            <button className={styles['btn']}>
              <BiPencil />
            </button>
            <button className={styles['btn']}>
              <GiStraightPipe />
            </button>
            <button className={styles['btn']}>
              <FiCircle />
            </button>
            <button className={styles['btn']}>
              <BsEraser />
            </button>
            <button className={styles['btn']}>
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

        <canvas className={styles['canvas']} id="drawCanvas">
        </canvas>
      </div>
    </div>
  );
}

export default EditorView;
