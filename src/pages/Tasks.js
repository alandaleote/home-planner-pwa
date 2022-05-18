import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import CheckboxList from '../components/CheckboxList';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  minHeight: 300,
  bgcolor: 'background.paper',
  borderRadius: 20,
  boxShadow: 14,
  p: 4,
};

export default function Tasks() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        minHeight: 500,
      }}
    >
      <CheckboxList />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={boxStyle}>
          <AddIcon />
          Adicionar Nova Tarefa
        </Box>
      </Modal>
    </Box>

  );
}
