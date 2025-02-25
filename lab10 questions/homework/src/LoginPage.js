import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import {setMessage} from './store/reducers/messageSlice'

import { apiPost } from './Service'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

const LoginPage = () => {
  const [dialogOpen, setDialogOpen] = useState(true)
  const defaultUser = {
    email: '',
    password: '',
  }
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [user, setUser] = useState(defaultUser)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const authUser = user => apiPost('login', user)
  .then(res => {
    if(res.data){
      localStorage.setItem('email', res.data.user.email)
      localStorage.setItem('token', res.data.token.token)
      dispatch(setMessage('login'))
      window.location.href = '/products';
    }else{
      dispatch(setMessage('Request failed with status code 401'))
    }
  }).catch(err => {
    dispatch(setMessage('Login failed.'))
  })

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

return (
  <>
    <Box sx={{ mx: "auto", maxWidth: { xs: 1200, md: 2000 }, flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            Product Management
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{}}>
        <>
          <Box sx={{ mx: 'auto', width: 500 }}> <h3>Log in</h3></Box>
          <Box
            sx={{
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              width: 500,
              maxWidth: '100%',
            }}>
            <TextField
              inputProps={{
                autoComplete: 'new-password',
                form: {
                  autoComplete: 'off',
                },
              }}
              name='email'
              label='Email'
              id="margin-dense1"
              margin="dense"
              onChange={e => handleChange(e)}
            />
            <TextField
              inputProps={{
                autoComplete: 'new-password',
                form: {
                  autoComplete: 'off',
                },
              }}
              name='password'
              label='Password'
              type="password"
              id="margin-dense2"
              margin="dense"
              onChange={e => handleChange(e)}
            />
            <Button type='submit' onClick={() => authUser(user)}>
              Log In
            </Button>
          </Box>
          {/* 账号弹窗 */}
          <BootstrapDialog
            onClose={()=>{setDialogOpen(false)}}
            aria-labelledby="customized-dialog-title"
            open={dialogOpen}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Login Information
            </DialogTitle>
            <Button 
            aria-label="close" 
            onClick={()=>{setDialogOpen(false)}}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </Button>
            <DialogContent dividers>
              <Typography gutterBottom>
              Email:admin@gradspace.org
              </Typography>
              <Typography gutterBottom>
              Password:qwer1234  
              </Typography>
            </DialogContent>
          </BootstrapDialog>
        </>
    </Box>
   </>
  )
}

export default LoginPage