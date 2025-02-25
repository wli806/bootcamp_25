import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux'
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
import TextField from '@mui/material/TextField';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import UploadIcon from '@mui/icons-material/Upload';
import { IconButton } from '@mui/material';

import {apiPost, apiPut, apiDelete} from '../Service'
import {setMessage} from '../store/reducers/messageSlice'

const getComparator = (order, orderBy) => {
  return (a, b) => {
    if (b[orderBy] === a[orderBy]) {
      return 0;
    } else if (a[orderBy] == null || a[orderBy] === "") {
      return 1;
    } else if (b[orderBy] == null || b[orderBy] === "") {
      return -1;
    } else if (orderBy === "price") {
      if (order === "asc") {
        return parseInt(a[orderBy], 10) < parseInt(b[orderBy], 10) ? -1 : 1
      } else {
        return parseInt(b[orderBy], 10) > parseInt(a[orderBy], 10) ? 1 : -1
      }
    } else if (order === "asc" && orderBy !== "price") {
      return a[orderBy].toUpperCase() < b[orderBy].toUpperCase() ? -1 : 1;
    } else {
      return a[orderBy].toUpperCase() < b[orderBy].toUpperCase() ? 1 : -1;
    }
  }
}

const headCells = [
  {
    id: 'title',
    numeric: false,
    label: 'Title',
  },
  {
    id: 'description',
    numeric: true,
    label: 'Description',
  },
  {
    id: 'price',
    numeric: true,
    label: 'Price($)',
  },
  {
    id: 'image',
    numeric: false,
    label: 'Product Image',
    disableSorting: true,
  },
  {
    id: 'action',
    numeric: false,
    label: 'Action',
    disableSorting: true, 
  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
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
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {!headCell.disableSorting ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}>
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
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable({searchInput, isAddRow, setIsAddRow, fetchData}) {
  const [order, setOrder] = React.useState();
  const [orderBy, setOrderBy] = React.useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const allProductsData = useSelector(state => state.products.data);  // 获取redux中products数据
  const [data, setData] = React.useState([]);
  const [newTitle, setNewTitle] = React.useState('');
  const [newDesc, setNewDesc] = React.useState('');
  const [newPrice, setNewPrice] = React.useState('');
  const [edit, setEdit] = React.useState('');
  const [tableCellEdit, setTableCellEdit] = React.useState({});
  const [previewImg, setPreviewImg] = React.useState(''); // 用于返显
  const [selectedFile, setSelectedFile] = React.useState(''); // 用于文件上传
  const dispatch = useDispatch();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  React.useEffect(()=>{
    if (searchInput === ''){
      if(allProductsData.length > 0){
        setData(JSON.parse(JSON.stringify(allProductsData)));
      } else {
        setData([])
      }
    } else {
      let result = allProductsData.filter(item => {
        return item.title.indexOf(searchInput) > -1 || item.description.indexOf(searchInput) > -1;
      });
      setData(result);
    }
  }, [allProductsData, searchInput])

  React.useEffect(()=>{
    if(!selectedFile){
      setPreviewImg('');
      return;
    }
    let objectUrl = URL.createObjectURL(selectedFile);
    console.log('=====objectUrl======', objectUrl);
    setPreviewImg(objectUrl);
  }, [selectedFile])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const cancelAddRow = () => {
    setNewTitle('');
    setNewDesc('');
    setNewPrice('');
    setSelectedFile('');
    setPreviewImg('');
    setIsAddRow(false)
  }

  const handleSaveNew = ()=>{
    
    let formData = new FormData();
    formData.append('title', newTitle);
    formData.append('description', newDesc);
    formData.append('price', newPrice);
    formData.append('is_active', 1);
    formData.append('category_id', 1);

    if(previewImg != ''){
      formData.append('product_image', selectedFile);
    }

    apiPost('products', formData).then(res => {
      if (res.status === 200){
        fetchData();
        cancelAddRow();
        setPage(0);
        dispatch(setMessage('createdNew'))
      }
    }).catch(err => {
      dispatch(setMessage('notCreatedNew'))
    })
  }

  const editHandle = (id) => {
    setEdit(id);
    let result = allProductsData.filter(item => {
      return item.id === id;
    });
    let obj = Object.assign({}, result[0]);
    setTableCellEdit(obj);
    setPreviewImg(`https://server.gradspace.org/storage/${result[0].product_image}`);
  }

  const handleChange = (e) => {
    setTableCellEdit({...tableCellEdit, [e.target.name]: e.target.value})
  }

  const handleSaveEdit = () => {
    let formData = new FormData();
    formData.append('title', tableCellEdit.title);
    formData.append('description', tableCellEdit.description);
    formData.append('price', tableCellEdit.price);
    formData.append('is_active', 1);
    formData.append('category_id', 1);
    formData.append('_method', 'PUT');

    if(previewImg.startsWith('blob')){
      formData.append('product_image', selectedFile)
    }

    apiPut(`product/${tableCellEdit.id}`, formData).then(res => {
      if(res.status === 200){
        setEdit('');
        fetchData();
        setSelectedFile('');
        setPreviewImg('');
        setPage(0);
        dispatch(setMessage('updated'))
      }else{
        dispatch(setMessage('notUpdated'))
      }
    }).catch(err => {
      dispatch(setMessage('notUpdated'))
    })
  }

  const handleDelete = (id) => {
    apiDelete(`product/${id}`).then(res => {
      dispatch(setMessage('delete-success'));
      fetchData();
      setPage(0);
    }).catch(err => {
      dispatch(setMessage('delete-unsuccess'));
    })
  }

  return (
    <Box sx={{ width: '80vw', margin: 'auto' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {
                isAddRow ? 
                  <TableRow key="unique">
                    <TableCell component="th" scope="row" padding="none">
                      <TextField id="title-text" label="" defaultValue={newTitle} helperText="" onChange={(e) => setNewTitle(e.target.value)}/>
                    </TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                      <TextField id="desc-text" label="" defaultValue={newDesc} helperText="" onChange={(e) => setNewDesc(e.target.value)}/>
                    </TableCell>
                    <TableCell align="right" sx={{width: '75px'}}>
                      <TextField id="outlined-number" label="" type="number" defaultValue={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                    </TableCell>
                    <TableCell align="right">
                      {previewImg ? 
                        <Box>
                          <Box
                            component="img"
                            sx={{
                              height: 93,
                              width: 200,
                              maxHeight: { xs: 93, md: 37 },
                              maxWidth: { xs: 200, md: 100 },
                            }}
                            src={previewImg} 
                          />
                        </Box>
                        : ''
                      }
                      <IconButton component="label" htmlFor="new-upload-file">
                        <FileUploadIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', cursor: 'pointer' }}/>
                      </IconButton>
                      <input hidden type="file" id="new-upload-file" name="product_image" accept="image/*" onChange={(e) => {
                            setSelectedFile(e.target.files[0]);
                      }}/>
                    </TableCell>
                    {/* operation button */}
                    <TableCell>
                      <Button>
                        <CheckIcon onClick={handleSaveNew} sx={{ color: 'rgba(0, 0, 0, 0.54)', cursor: 'pointer' }}/>
                      </Button>
                      <Button>
                        <CancelIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', cursor: 'pointer' }} onClick={cancelAddRow} />
                      </Button>
                    </TableCell>
                  </TableRow>
                : ''
              }

            {data.sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {
                        edit === row.id ? 
                          <TextField name="title" defaultValue={row.title} onChange={e => {handleChange(e, 'title')}}></TextField> 
                        : 
                        <div>{row.title}</div>
                      }
                    </TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {
                        edit === row.id ? 
                          <TextField name="description" defaultValue={row.description} onChange={e => {handleChange(e, 'desc')}}></TextField> 
                        : 
                        <div>{row.description}</div>
                    }
                    </TableCell>
                    <TableCell align="right">
                    {
                        edit === row.id ? 
                          <TextField name="price" type="number" defaultValue={row.price} onChange={e => {handleChange(e, 'price')}}></TextField> 
                        : 
                        <div>{row.price}</div>
                    }
                    </TableCell>
                    <TableCell align="left">
                      {
                        edit === row.id ?  
                        <>
                          <Box>
                            <Box
                              component="img"
                              sx={{
                                height: 93,
                                width: 200,
                                maxHeight: { xs: 93, md: 37 },
                                maxWidth: { xs: 200, md: 100 },
                              }}
                              src={previewImg} 
                            />
                          </Box>
                          <IconButton component="label" htmlFor="upload-file"><UploadIcon /></IconButton>
                          <input hidden type="file" id="upload-file" name="product_image" accept="image/*" onChange={(e) => {
                            setSelectedFile(e.target.files[0]);
                          }}/>
                        </>
                          : 
                          <Box>
                            <Box
                              component="img"
                              sx={{
                                height: 93,
                                width: 200,
                                maxHeight: { xs: 93, md: 37 },
                                maxWidth: { xs: 200, md: 100 },
                              }}
                              src={`https://server.gradspace.org/storage/${row.product_image}`} 
                            />
                          </Box>
                      }
                    </TableCell>
                    {/* operation button */}
                    <TableCell>
                      <Button>
                        {
                          edit === row.id ? 
                          <CheckIcon onClick={handleSaveEdit} sx={{ color: 'rgba(0, 0, 0, 0.54)', cursor: 'pointer' }}/>
                          :
                          <EditIcon onClick={()=> editHandle(row.id)}/>
                        }
                      </Button>
                      <Button>
                        <DeleteIcon onClick={() => handleDelete(row.id)}/>
                      </Button>
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
