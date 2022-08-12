import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useLocation } from "react-router-dom";
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import InputField from "../../components/InputField/InputField";
import { validators } from "../../utils/Validator";
import { login } from '../../actions/userActions';
import { MainWrapper, CardWrapper, ButtonWrapper, BottomWrapper } from "./login.styles";

const LoginScreen = () => {
  document.title = "ASKAS | Login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirect = location.state ? location.state : '/';

//   useEffect(() => {
//     if (userInfo) {
//         navigate(redirect)
//     }
//   }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
  }

  const handleEmail = (email) => setEmail(email);
  const handlePassword = (password) => setPassword(password);

  return (
    <MainWrapper>
      <CardWrapper className="card">
        <div className="card-header">Secure login</div>
        <div className="card-body">
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
          <form onSubmit={submitHandler}>
            <InputField
              value={email}
              placeholder="Please enter your email address"
              type="email"
              validators={[
                { check: validators.email, message: "Please enter a valid email address" },
              ]}
              onChange={handleEmail}
              fontAwesomeIcon="fas fa-envelope"
            />
            <InputField
              value={password}
              placeholder="Please enter your password"
              type="password"
              validators={[{ check: validators.required, message: "This field is required", }]}
              onChange={handlePassword}
              fontAwesomeIcon="fas fa-key"
            />
            <div className="text-right">
              <ButtonWrapper type="submit" className="btn btn-info">
                Submit
              </ButtonWrapper>
            </div>
          </form>

          <BottomWrapper className="text-center">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
            <Link to="/forgot-password">Forgot password</Link>
          </BottomWrapper>
        </div>
      </CardWrapper>
    </MainWrapper>
  );
};

export default LoginScreen;
