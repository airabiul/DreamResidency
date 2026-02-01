import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();


const Loging = () => {
 const [showPassword, setShowPassword] = useState(false);
 const [registerError, setRegisterError] = useState('');
 const [success, setSuccess] = useState('');
         const handlaGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
          (result.user)
          setUser(result.user)
          
        })
        .catch(error =>{
          ('ERROR', error);
        })
       }

  const [user, setUser] = useState(null);


  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // console.log('login location page', location);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        // console.log(email, password);

        // reset
        setSuccess('');
         setRegisterError('');

        signIn(email, password)
        .then(result =>{
          (result.user);
          setSuccess('Login Success');
          // navigate after login
          navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
          (error.user);
          setRegisterError('Use Correct email & password');
        })

    }
  return (
    <div>
      <div className="hero bg-base-200 mt-5">
        <div className="">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold mb-3">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered mb-3" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

               <div className="relative">
                 <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                <span onClick={()=> setShowPassword(!showPassword)} className="absolute top-3 right-4 cursor-pointer">{showPassword ? "Hide" : "Show" }</span>
               </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover mt-5">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>  
            </form>
              <div className="form-control  m-5">
                <button onClick={handlaGoogleLogin} className="btn btn-primary">Login with google</button>
              </div>
              {
              registerError && <p className="text-red-700 font-medium text-center">Use Correct email & password</p>
            }
            {
              success && <p className="text-green-700 font-medium text-center" >Login Success fully</p>
            }

            <p className="m-5">Don,t Have an account? <Link to='/registerpage'><button className="font-semibold text-blue-600">Register Please!</button></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loging;
