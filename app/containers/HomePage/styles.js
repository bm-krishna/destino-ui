import { makeStyles } from '@material-ui/core';
import loginbg from '../../images/loginbanner.jpg';
export const styleGenerator = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    width: '100%',
    minWidth: 280,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    minHeight: 70,
    alignItems: 'center',
  },
  container: {
    margin: '14% auto',
  },
  loginButton: {
    margin: theme.spacing(2),
  },
  root: {
    backgroundImage: `url(${loginbg})`,
    backgroundSize: 'cover',
    display: 'flex',
  },
}));
