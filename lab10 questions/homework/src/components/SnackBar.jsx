import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import {setMessage} from '../store/reducers/messageSlice'

const messageData = [
  {
    id: 'success',
    txt: 'You are successfully logged in',
    time: 4000,
    label: 'login'
  },
  {
    id: 'error',
    txt: 'You have entered an invalid username or password',
    time: 2000,
    label: 'Request failed with status code 401'
  },
  {
    id: 'error',
    txt: 'You are now logged out',
    time: 2000,
    label: 'logOut'
  },
  {
    id: 'error',
    txt: 'Login session expired',
    time: 2000,
    label: 'timeOut'
  },
  {
    id: 'success',
    txt: 'Deleted Success',
    time: 2000,
    label: 'delete-success'
  },
  {
    id: 'error',
    txt: 'Deleted Unsuccess',
    time: 2000,
    label: 'delete-unsuccess'
  },
  {
    id: 'success',
    txt: 'Export Success',
    time: 2000,
    label: 'export-success'
  },
  {
    id: 'success',
    txt: 'Import Success',
    time: 2000,
    label: 'import-success'
  },
  {
    id: 'success',
    txt: 'New Product Added',
    time: 2000,
    label: 'createdNew'
  },
  {
    id: 'error',
    txt: 'An error occurred. Failed to add new product',
    time: 2000,
    label: 'notCreatedNew'
  },
  {
    id: 'success',
    txt: 'Product change was successful',
    time: 2000,
    label: 'updated'
  },
  {
    id: 'error',
    txt: 'An error occurred. Failed to update product',
    time: 2000,
    label: 'notUpdated'
  },
]

const SnackBar = () => {
  const message = useSelector(state => state.message.content)
  const [openMsg, setOpenMsg] = useState(false)
  const [msg, setMsg] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    if(message){
      setOpenMsg(true)
      let result = messageData.find((e) => e.label === message);
      if(result){
        setMsg(result);
        dispatch(setMessage(''))
      }
    }
  }, [message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenMsg(false)
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      {msg &&
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={openMsg} autoHideDuration={msg.time} onClose={() => handleClose()}>
            <Alert onClose={() => handleClose()} severity={msg.id} sx={{ width: '100%' }}>
              {msg.txt}
            </Alert>
          </Snackbar>
        </Stack >}
    </>
  )
}

export default SnackBar