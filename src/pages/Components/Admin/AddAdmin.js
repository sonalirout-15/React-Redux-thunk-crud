import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Header } from "../../../components/admin";
import SideBar from "../../../components/admin/sidebar";
import { addAdmin } from "../../../Redux/action";


const AddAdmin = () => {
  const [state , setState] = useState({
    name :'',
    email:'',
    password:'',
    confirm_password:'',
    mobile:'',
    gender:'',
    address:'',
    image:''
  })
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const history = useHistory()
  const {name , email, password, confirm_password, mobile, gender, address, image} = state;

  const handleInputChange = (e) => {
    let {name , value} = e.target;
    setState({...state, [name]: value});
  }

  const handleFileSelect = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !password || !confirm_password || !mobile || !gender || !address || !image){
      setError('Please input all input Field');
    }else{
    const formData = new FormData()
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirm_password', confirm_password);
    formData.append('mobile', mobile);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('image', image)
    dispatch(addAdmin(formData));
    history.push('/admins');
      setError("");
    }
  }

  return (
    <>
      <Header />
      <SideBar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h4>Admin</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="section-body">
              <div className="row">
                <div className="col-18 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <center>Add Admin</center>
                      {error && <h3 style={{color : 'red'}}>{error}</h3>}
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Admin Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          name="name"
                          onChange={handleInputChange}
                        />
                      </div>
                     
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          value={email}
                          name="email"
                          onChange={handleInputChange}
                           />
                      </div>
                      <div className="form-group">
                        <label>Password Strength</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            id="password"
                            value={password}
                            name="password"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            id="confirm_password"
                            value={confirm_password}
                            name="confirm_password"
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Phone Number (US Format)</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-phone"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control phone-number"
                            id="mobile"
                            value={mobile}
                            name="mobile"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                
                      <div className="form-group">
                        <label>Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          id="gender"
                          value={gender}
                          name="gender"
                          onChange={handleInputChange}
                         />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          value={address}
                          name="address"
                          onChange={handleInputChange}
                         />
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="/accept/*"
                          id="image"
                          defaultValue={image}
                          name="image"
                          onChange={handleFileSelect}
                          />
                      </div>
                      <button type="submit" className="btn btn-primary">Add</button>{" "}
                      <Link to={'/admins'} className="btn btn-info"> Back </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default AddAdmin;