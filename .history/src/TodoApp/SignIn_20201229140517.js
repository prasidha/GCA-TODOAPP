import React ,{ useState }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 4),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const[email,setEmail] = useState()
  const[password,setPassword] =useState()
  const[error,setError] =useState('')
  const[loading,setLoading]=useState(false)
  const history =useHistory()
   


  const loginUser = () => {
      auth.signInWithEmailAndPassword(email,password)
      .then( res => 
             history.push('/todo')
      )
        .catch(error =>
          alert(error)
        )
        
  }

  const registerUser = () => {
    if(email==="" && password===""){
        setError("email feild or password should not be empty")
  }

  try{
      setError("")
      setLoading(true)
      auth.createUserWithEmailAndPassword(email,password)
      history.push("/todo")

  }
  catch{
          setError("failed to create user")
  }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {error && <Alert severity="error">{error}</Alert>}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
         
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            className={classes.submit}
            onClick={loginUser}
            disable={loading}
          >
            Sign In
          </Button>

          <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          onClick={registerUser}
          disable={loading}
        >
          Sign up
        </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}