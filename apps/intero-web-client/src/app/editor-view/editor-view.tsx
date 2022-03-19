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
import PlotDialog from '../plot-dialog/plot-dialog';
import FloorDialog from '../floor-dialog/floor-dialog';

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
  const [openPlotDialog, setOpenPlotDialog] = useState(false);
  const [selectedPlotDialogValue, setSelectedPlotDialogValue] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [selectedFloorDialogValue, setSelectedFloorDialogValue] = useState<any>([]);

  const handlePlotDialogOpen = () => {
    setOpenPlotDialog(true);
  };

  const handlePlotDialogClose = (value: string) => {
    setOpenPlotDialog(false);
    setSelectedPlotDialogValue(value);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedFloorDialogValue(value);
  };


  const downloadCanvas = () => {
    const canvas = document.getElementById('drawCanvas') as HTMLCanvasElement;
    const url = canvas?.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = url;
    link.click();
  }

  const printCanvas = () => {
    window.print();
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
            <button className={styles['btn']} onClick={() => handleDialogOpen()}>
              <IoSparklesSharp />
            </button>
            <button className={styles['btn']} onClick={() => printCanvas()}>
              <AiFillPrinter />
            </button>
            <button className={styles['btn']} onClick={() => handlePlotDialogOpen()}>
              <AiOutlineBoxPlot />
            </button>
            <button className={styles['btn']} onClick={() => downloadCanvas()}>
              <MdDownload />
            </button>
          </div>
        </div>
        <Canvas tool={tool} />
        <PlotDialog 
          selectedValue={selectedPlotDialogValue}
          open={openPlotDialog}
          onClose={handlePlotDialogClose} />
        <FloorDialog 
          selectedValue={selectedFloorDialogValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}

export default EditorView;
