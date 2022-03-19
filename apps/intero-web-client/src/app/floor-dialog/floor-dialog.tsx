import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styles from './floor-dialog.module.scss';
import { AiOutlineSend } from "react-icons/ai";
import { FiMousePointer } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";


/* eslint-disable-next-line */
export interface FloorDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function FloorDialog(props: FloorDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [hasImage, setHasImage] = useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose} open={open}>

      <DialogTitle>Floor Generation Tool</DialogTitle>
      <DialogContent>
          {
            hasImage ? <img width={650} height={400} alt='something'></img> :
            <div className={styles['whiteBox']}></div>
          }
          
          <TextField
            autoComplete='false'
            margin="dense"
            multiline
            id="description"
            label="Input room description here..."
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions className={styles['actions']}>
          <Button variant="contained" endIcon={<AiOutlineSend />}>
            Send
          </Button>
          <Button variant="contained" color="success" endIcon={<FiMousePointer />}>
            Accept
          </Button>
          <Button variant="contained" color="error" endIcon={<GiCancel />} onClick={() => handleClose()}>
            Cancel
          </Button>
        </DialogActions>
    </Dialog>
  );
}


export default FloorDialog;
