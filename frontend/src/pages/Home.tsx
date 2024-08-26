import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActionArea, CardContent, PaletteMode } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';

import useCertified from '../hooks/useCertified';

import AddForm from '../components/AddForm';
import ToggleTheme from '../components/ToggleTheme';
import CertifiedLogList from '../components/CertifiedLogList';
import CertifiedList from '../components/CertifiedList';

const Home: React.FC = () => {
  const { loading, certifiedData, certifiedLogData, deleteCertifiedData, createCertifiedData } = useCertified();
  const [display, setDisplay] = React.useState<'log' | 'state'>('state')
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            display: { md: 'flex' },
            flexDirection: 'column',
            order: { xs: 2, lg: 1 },
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 8 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ 
            width: '100%', 
            mb: { xs: 4, md: 0 }, 
            flexDirection: { xs: 'column', md: 'row' }, 
            display: 'flex', 
            gap: 2 }}
          >
            <Card
              raised={display === 'state'}
              sx={{
                maxWidth: { sm: '100%', md: '50%' },
                flexGrow: 1,
                outline: '1px solid',
                outlineColor:
                  display === 'state' ? 'primary.main' : 'divider',
                backgroundColor:
                  display === 'state' ? 'background.default' : '',
              }}
            >
              <CardActionArea onClick={() => setDisplay('state')}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon color="primary" fontSize="small" />
                  <Typography fontWeight="medium">Certified list</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              raised={display === 'log'}
              sx={{
                maxWidth: { sm: '100%', md: '50%' },
                flexGrow: 1,
                outline: '1px solid',
                outlineColor:
                  display === 'log' ? 'primary.main' : 'divider',
                backgroundColor:
                  display === 'log' ? 'background.default' : '',
              }}
            >
              <CardActionArea onClick={() => setDisplay('log')}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HistoryIcon color="primary" fontSize="small" />
                  <Typography fontWeight="medium">Certified log</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {display === 'state' ?
              <React.Fragment>
                <PersonIcon sx={{ color: 'text.secondary', fontSize: 35 }} />
                <Typography variant="h4">Certified List</Typography>
              </React.Fragment>
              :
              <React.Fragment>
                <HistoryIcon sx={{ color: 'text.secondary', fontSize: 35 }} />
                <Typography variant="h4">Certified Log</Typography>
              </React.Fragment>
            }
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              overflow: 'auto',
              maxHeight: '68dvh'
            }}
          >
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
              : display === 'state' ? <CertifiedList certifiedData={certifiedData} onDelete={deleteCertifiedData} />
                : <CertifiedLogList logData={certifiedLogData} />}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: { xs: 1, lg: 2 },
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 8 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              height: 150,
            }}
          >
            <ToggleTheme mode={mode} onToggle={toggleColorMode} />
          </Box>
          <AddForm onAdd={createCertifiedData} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;