import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Typography } from '@mui/material';

import { ContractLog } from '../hooks/useCertified';
import Empty from './Empty';

interface CertifiedLogListProps {
    logData: ContractLog[]
}

const CertifiedLogList: React.FC<CertifiedLogListProps> = ({ logData }) => {
    return (
        <List disablePadding>
            {logData.length ? logData.map((data) => (
                <React.Fragment key={data.transaction.hash}>
                    <ListItem
                        sx={{ py: 1, px: 0 }}
                    >
                        <ListItemText
                            sx={{ mr: 2, wordBreak: 'break-all', textOverflow: 'ellipsis' }}
                            primary={data.value.name}
                            secondaryTypographyProps={{
                                component: 'div'
                            }}
                            secondary={<Box sx={{ ml: 1, }}>
                                <Box>
                                    <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>Event name: </Typography>
                                    <Typography variant='subtitle2'>- {data.name}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>Block hash: </Typography>
                                    <Typography variant='subtitle2'>- {data.block.hash}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>Block number: </Typography>
                                    <Typography variant='subtitle2'>- {data.block.number}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>Transaction hash: </Typography>
                                    <Typography variant='subtitle2'>- {data.transaction.hash}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>Transaction index: </Typography>
                                    <Typography variant='subtitle2'>- {data.transaction.index}</Typography>
                                </Box>
                            </Box>} />
                        <Typography variant='subtitle2'>{new Date(Number(data.value.timeStamp) * 1000).toLocaleString()}</Typography>
                    </ListItem>
                    <Divider component="li" />
                </React.Fragment>
            )) : <Empty />}
        </List>
    );
}

export default CertifiedLogList;