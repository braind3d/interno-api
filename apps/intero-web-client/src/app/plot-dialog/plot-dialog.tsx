import styles from './plot-dialog.module.scss';
import { Button } from '@mui/material';
import { AiOutlineSend } from 'react-icons/ai';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

/* eslint-disable-next-line */
export interface PlotDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function PlotDialog(props: PlotDialogProps) {

  const { onClose, selectedValue, open } = props;  

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSubmitBtn = (event : any) => {
    event.preventDefault();
    let fourDigitCode = event.target.form[0].value + event.target.form[1].value + event.target.form[2].value + event.target.form[3].value;
    fourDigitCode = parseInt(fourDigitCode);
  }


  return (
    <Dialog
      onClose={handleClose} open={open}>

      <DialogTitle>Plot Floor Plan</DialogTitle>
      <DialogContent>        
        <DialogContentText>
          To plot the floor plan onto a piece of paper you must first connect to a plotting
          device using the 4-digit code displayed on its screen.
        </DialogContentText>
        <form>
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <DialogActions className={styles['actions']}>
            <Button variant="contained" endIcon={<AiOutlineSend />} onClick={(e) => handleSubmitBtn(e)}>
              Send
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PlotDialog;
