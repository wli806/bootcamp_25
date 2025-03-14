import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';

const getComparator = (order, orderBy) => {
    return (a, b) => {
        if (b[orderBy] === a[orderBy]) {
            return 0;
        } else if (a[orderBy] == null || a[orderBy] === "") {
            return 1;
        } else if (b[orderBy] == null || b[orderBy] === "") {
            return -1;
        } else if (orderBy === "price") {
            return order === "asc"
                ? parseInt(a[orderBy], 10) - parseInt(b[orderBy], 10)
                : parseInt(b[orderBy], 10) - parseInt(a[orderBy], 10);
        } else {
            return order === "asc"
                ? a[orderBy].toUpperCase() < b[orderBy].toUpperCase() ? -1 : 1
                : a[orderBy].toUpperCase() < b[orderBy].toUpperCase() ? 1 : -1;
        }
    };
};

const headCells = [
    { id: 'title', numeric: false, label: 'Title' },
    { id: 'description', numeric: true, label: 'Description' },
    { id: 'price', numeric: true, label: 'Price($)' },
    { id: 'image', numeric: false, label: 'Product Image', disableSorting: true },
    { id: 'action', numeric: false, label: 'Action', disableSorting: true }
];

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {!headCell.disableSorting ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default function EnhancedTable({ data }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Paper sx={{ maxWidth: '90%', mx: 'auto', mb: 2, p: 2, boxShadow: 2, borderRadius: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                        <TableBody>
                            {data.sort(getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row" id={labelId} padding="normal">
                                                {row.title}
                                            </TableCell>
                                            <TableCell align="right" sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                                                {row.description}
                                            </TableCell>
                                            <TableCell align="right">${row.price}</TableCell>
                                            <TableCell align="left">
                                                {row.product_image && (
                                                    <Box>
                                                        <Box
                                                            component="img"
                                                            sx={{ height: 93, width: 200, maxHeight: { xs: 93, md: 37 }, maxWidth: { xs: 200, md: 100 } }}
                                                            src={`https://server.gradspace.org/storage/${row.product_image}`}
                                                        />
                                                    </Box>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Button color="black"><EditIcon /></Button>
                                                <Button color="black"><DeleteIcon /></Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
