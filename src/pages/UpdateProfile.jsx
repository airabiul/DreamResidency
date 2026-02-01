import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Regigter = () => {
  const navigate = useNavigate();

  const { createUser, updateUser } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    // Reset error
    setRegisterError("");
    setSuccess("");
    setPassword("");

    if (password.length < 6) {
      setPassword("You shoul Use Lest 6 Crector or Longer");
      return;
    }

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error.user);
            setRegisterError(error.message);
            setUser(user);
          });

        setSuccess("Registration Success Full !");
      })
      .catch((error) => {
        console.log(error.user);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 mt-5">
        <div className="">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold mb-5 mt-3">Update Profile!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className=" absolute top-4 right-3 hover:underline"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Update Profile !</button>
              </div>
            </form>
            {password && <p className="text-red-700 font-medium text-center">You shoul Use Lest 6 Crector or Longer</p>}
            {registerError && <p className="text-red-700 font-medium text-center">All ready in Used</p>}
            {success && <p className="text-green-700 font-medium text-center">Registration Success fully Create</p>}
            <p className="m-5">
              Already Have an account?
              <Link to="/loginpage">
                <button className="font-semibold text-blue-600">Loging Please!</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regigter;
