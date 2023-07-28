import { useDispatch } from "react-redux";
import classes from './Auth.module.css';
import { authActions } from "../Store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth.auth);

  const logInHandler = (event) => {
    event.preventDefault()
    dispatch(authActions.login());
  };
 

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
