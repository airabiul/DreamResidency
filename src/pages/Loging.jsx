import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Loging = () => {
  const {signIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error=>{
          console.log(error.user);
        })
       

    }
  return (
    <div>
      <div className="hero bg-base-200 mt-5">
        <div className="">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold mb-5">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="m-5">Don,t Have an account? <Link to='/registerpage'><button className="font-semibold text-blue-600">Register Please!</button></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loging;
