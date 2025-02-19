import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import Box from '@mui/material/Box';
import EnhancedTable from './Table';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('light', {
        color: '#00000',
    }),
    boxShadow: 'none',
    cursor: 'pointer',
}));

export default function OffsetGrid() {
    let [tableData, setTableData] = useState([]);

    const addRow = () => {
        const newRow = Array(tableData[0].length).fill('');
        const newTableData = [...tableData, newRow];
        setTableData(newTableData);
      };

    return (
        <Box>
            <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
                    <Item onClick={addRow}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            Add New
                            <AddIcon />
                        </Box>
                    </Item>
                </Grid>
                <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
                    <Item>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            Export Excel
                            <DownloadIcon />
                        </Box>
                    </Item>
                </Grid>
                <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
                    <Item>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            Upload Excel
                            <UploadIcon />
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}