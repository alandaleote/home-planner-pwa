import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ImageIcon from '@mui/icons-material/Image';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function MyList() {

  const handleClickList = (index) => {
    return index;
  };

  const handleClickMore = () => {
    return;
  }

  const data = [
    { id: 0, icon: <ShoppingCartIcon />, label: 'Lista de Compras' },
    { id: 1, icon: <FlightTakeoffIcon />, label: 'Mala para Viagem' },
    { id: 2, icon: <BeachAccessIcon />, label: 'Lista de Ferias' },
    { id: 3, icon: <ImageIcon />, label: 'Lista de Fotos' },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton onClick={handleClickMore}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <ListItemButton
              onClick={handleClickList(item.id)}
            >
              <ListItemAvatar>
                <Avatar>
                  {item.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
