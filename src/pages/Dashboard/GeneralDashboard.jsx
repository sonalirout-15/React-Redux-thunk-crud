import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "../../components/admin";
import SideBar from "../../components/admin/sidebar";

const GeneralDashboard = () => {


  return (
    <>
      <Header />
      <SideBar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="far fa-user"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Admin</h4>
                  </div>
                  <div className="card-body">10</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger">
                  <i className="fas fa-th-large"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Categories</h4>
                  </div>
                  <div className="card-body">20</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-warning">
                  <i className="fa fa-list-alt"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Subcategories</h4>
                  </div>
                  <div className="card-body">40</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Metters</h4>
                  </div>
                  <div className="card-body">7</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-print"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Post</h4>
                  </div>
                  <div className="card-body">6</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-poll"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Campaning</h4>
                  </div>
                  <div className="card-body">10</div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-user"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Online Users</h4>
                  </div>
                  <div className="card-body">47</div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GeneralDashboard;
