import * as React from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import { styled } from '@mui/system';
import { Button } from '@mui/material';

const Form = styled('form')(() => ({}));

const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
}));

interface AddFormProps {
    onAdd: (name: string, lastname: string) => void
}

const AddForm: React.FC<AddFormProps> = ({ onAdd }) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('firstname') as string;
        const lastname = form.get('lastname') as string;
        if (!name || !lastname) return;
        onAdd(name, lastname);
    }

    return (
        <Form
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                height: { xs: 325, md: 275 },
                width: '100%',
                borderRadius: '20px',
                border: '1px solid ',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
            onSubmit={onSubmit}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1">Certification</Typography>
                <WorkspacePremiumIcon sx={{ color: 'text.secondary' }} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 2,
                }}
            >
                <FormGrid>
                    <FormLabel required>Firstname</FormLabel>
                    <OutlinedInput
                        name='firstname'
                        placeholder="Firstname"
                        required
                    />
                </FormGrid>
                <FormGrid>
                    <FormLabel required>Lastname</FormLabel>
                    <OutlinedInput
                        name='lastname'
                        placeholder="Lastname"
                        required
                    />
                </FormGrid>
            </Box>
            <Button type='submit' variant="outlined">Add</Button>
        </Form>
    );
}

export default AddForm