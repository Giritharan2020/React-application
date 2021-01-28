import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
// import { Redirect } from 'react-router-dom';


const Login=(props)=>{

const paperStyle={padding :20, height:'68vh', width:300, margin:"0 auto"}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}

// const [state, setState] = useState(0); 

const [error, setError]=useState();

// if (redirect){
//   return <Redirect to = "/grid"/>
// }


const initialValues={
  email:'',
  password:'',
  remember:false
}
const validationSchema=Yup.object().shape({
  email: Yup
  .string()
  .label("Email")
  .email()
  .required(),
  password: Yup
  .string()
  .label("Password")
  .required()
  .min(2, "Seems a bit short...")
  . max(10,"We prefer insecure system, try a shorter password.")
})

const onSubmit=(values,vprops)=>{
  console.log(values)
  setTimeout(()=>{
    vprops.resetForm()
    vprops.setSubmitting(false)
  },2000)
  console.log(vprops)
  axios({
    method: 'POST',
    url: 'http://localhost:5000/login',
    headers: {
        'Content-Type': 'application/json',
            },
    data: values,
})
    .then(response => {
      console.log('response',response);
      if(response.data === 'login sucessfully.'){
         console.log(response);
         setError();
         props.history.replace('/grid');
      } else{
        //  alert(response.data);
        setError(response.data);
      }     
        })      
    .catch(error => console.log(error))
}



return(
  <Grid>
      <Paper  style={paperStyle}>
       <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2> 
       </Grid>
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
           {(formikprops)=>(
             <Form>
                <Field as={TextField} label='Email' name="email" 
                placeholder='Enter email' fullWidth required
                helperText={<ErrorMessage name="email"/>}/>
                  <Field as={TextField} label='Password'name="password"
                   placeholder='Enter password' type='password' fullWidth required
                   helperText={<ErrorMessage name="password"/>}/>
                  
                  <Field as={FormControlLabel}
                  name='remember'
                    control={
                      <Checkbox
                          color="primary"
                      />
                    }
                    label="Remember me"
                    />
                    <Typography color="error">
                      {error}
                    </Typography>
          <Button  type='Submit'   variant="contained" color="primary" disable={formikprops.isSubmitting}
          style={btnstyle} fullWidth>{formikprops.isSubmitting?"Loading":"Sign in"}</Button>
                   
             </Form>
           )}
         </Formik>
                 <Typography>
         <Link href="#">
            Forgot password ?
          </Link>
        </Typography>
        <Typography> Do you have an account ?
         <Link href={"/register"}>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}
export default Login

