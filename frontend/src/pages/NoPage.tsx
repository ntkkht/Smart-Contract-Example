import { Box, Typography } from '@mui/material'

const NoPage: React.FC = () => {
  return (
    <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            404 Not found
        </Typography>
    </Box>
    )
}

export default NoPage
