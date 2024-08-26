import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import Empty from './Empty';

interface CertifiedListProps {
  certifiedData: string[]
  onDelete: (index: number) => void
}

const CertifiedList: React.FC<CertifiedListProps> = ({ onDelete, certifiedData }) => {
  return (
    <List disablePadding>
      {certifiedData.length ? certifiedData.map((data, index) => (
        <ListItem
          key={data}
          sx={{ py: 1, px: 0 }}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            sx={{ mr: 2, wordBreak: 'break-all', textOverflow: 'ellipsis' }}
            primary={data}
            secondary={<React.Fragment />}
          />
        </ListItem>
      )) : <Empty />}
    </List>
  );
}

export default CertifiedList;