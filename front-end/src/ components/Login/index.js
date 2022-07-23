import {Grid, Button, Modal, Typography, Box} from '@mui/material';
import {useState, useEffect} from 'react';
import {useFormik} from 'formik';
import CssTextField from '../common/CssTextField';
import * as yup from 'yup';
import axios from 'axios';

const LOCALBACKEND = 'http://47.100.26.104:8080/login';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default ({
  setIsLoggedIn,
}) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const validationSchema = yup.object({
    username: yup
      .string('请输入密码')
      .required('请输入用户名'),
    password: yup
      .string('请输入密码')
      .required('请输入密码'),
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    }
  })
  const handleSubmit = values => {
    axios.post(LOCALBACKEND, values)
      .then(res => {
        const data = res?.data;
        if (data.status === 'success') {
          setIsLoggedIn(true);
        } else {
          setIsErrorModalOpen(true);
        }
      })
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CssTextField
            required
            label="用户名"
            size="small"
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Grid>
        <Grid item xs={12}>
          <CssTextField
            required
            label="密码"
            size="small"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={formik.handleSubmit} style={{width: '200px'}}>登录</Button>
        </Grid>
      </Grid>
      <Modal open={isErrorModalOpen} onClose={() => {setIsErrorModalOpen(false);}}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            错误提示
          </Typography>
          <Typography sx={{mt: 2}}>
            请输入正确的用户名密码
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}