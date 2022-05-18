import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

export default function CheckboxList() {

  const data = [
    { id: 0, checked: false, icon: <People />, label: 'Authentication' },
    { id: 1, checked: false, icon: <Dns />, label: 'Database' },
    { id: 2, checked: false, icon: <PermMedia />, label: 'Storage' },
    { id: 3, checked: false, icon: <Public />, label: 'Hosting' },
  ];

  const handleToggle = (item) => () => {
    if (item.checked == true) {
      item.checked = false;
    } else {
      item.checked = true;
    }
  };

  return (
    <List dense sx={{
      width: '100%',
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
      '& ul': { padding: 0 },
    }}
      subheader={<li />}
    >
      {[1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`Day ${sectionId}`}</ListSubheader>
            {data.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value.id}`;
              return (
                <ListItem
                  key={value.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {value.icon}
                    </ListItemIcon>
                    <ListItemText primary={`${value.label}`} secondary={`descrição da tarefa ${value.label}`} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </ul>
        </li>
      ))}
    </List>
  );
}
