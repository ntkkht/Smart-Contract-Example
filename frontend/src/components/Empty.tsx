import { Box, Typography } from "@mui/material";

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

const Empty: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: { md: 0, xs: 10 } }}>
            <InboxOutlinedIcon sx={{ color: 'text.secondary', fontSize: 30 }} />
            <Typography variant='subtitle2'>No data</Typography>
        </Box>
    )
}

export default Empty;