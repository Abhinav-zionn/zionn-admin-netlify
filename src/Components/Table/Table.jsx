import React, { useEffect, useState } from "react";
import "./table.css";
// import * as api from "../axios"
import Row from "../Row/Row";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

const Tables = (props) => {


  const [cname, setCname] = useState(props.cname)
  const [cdetails, setDetails] = useState([])
  const [sloading, setSloading] = useState(true);

  // useEffect(() => {

  //   async function f() {
  //     let res = await api.getCompanyData(cname)

  //     setDetails(res.data.result2);

  //     console.log(res.data.result2);
  //   }

  //   f()
  //   setSloading(false);
  // }, [cname]);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

            <div className="container">
              <div className="row">
                <div className="heading-cp-css">{props.heading1}</div>
                <div className="">
                  <div className="">
                    <div className="container-sm  main-con">
                      <div className="row g-4">
                        <div className="col-2">
                          <div className="cell-wide cell purple-b">
                            <strong>customer name</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>current company</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>inventory</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>ownership proof</strong>
                          </div>
                        </div>
                      </div>
                      <Row
                        a="#value"
                        b="#value"
                        c="#value"
                        d="#value"
                      />
                      <Row
                        a="#value"
                        b="#value"
                        c="#value"
                        d="#value"
                      />
                      <Row
                        a="#value"
                        b="#value"
                        c="#value"
                        d="#value"
                      />
                      <Row
                        a="#value"
                        b="#value"
                        c="#value"
                        d="#value"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                  <NavLink style={{ textDecoration: 'none' }} to="/users">users<i class="bi bi-arrow-up-right"></i></NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Tables;