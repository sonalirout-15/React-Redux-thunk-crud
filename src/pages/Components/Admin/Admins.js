import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Footer, Header } from "../../../components/admin";
import SideBar from "../../../components/admin/sidebar";
import { deleteAdmin, loadAdmin } from "../../../Redux/action";


const Admins = () => {
 const dispatch = useDispatch();
 const history = useHistory()
  const admin  = useSelector(state => state.admin.rows)
  console.log('admin¬¬¬¬¬', admin);

 useEffect(() => {
  dispatch(loadAdmin())
 }, [])

 const handleDelete = (id) => {
  if(window.confirm('Are you sure wanted to delete the user ?')){
    dispatch(deleteAdmin(id))
  }
 }

  return (
    <>
      <Header />
      <SideBar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Admins</h1>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-16 col-16 col-sm-22">
              <div className="card">
                <div className="card-header">
                  <h4>Admin Details</h4>
                  <div className="card-header-action">
                    <Link className="btn btn-primary" to='/addAdmin'>
                      + New
                    </Link>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile No</th>
                          <th>Gender</th>
                          <th>Address</th>
                          <th>Image</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admin && admin.map((item) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>{item.gender}</td>
                          <td>{item.address}</td>
                          <td><img src={item.image} style={{height:"82px"}}></img></td>
                          <td>{item.status}</td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                              onClick={() => history.push(`/editAdmin/${item.id}`)}
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>{" "}
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="fas fa-trash"></i>
                            </a>{" "}
                            {/* <a
                              className="btn btn-info btn-action"
                              data-toggle="tooltip"
                              title="View"
                            >
                              <i className="fas fa-eye"></i>
                            </a> */}
                          </td>
                        </tr>
                        ))}

                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}


export default Admins;