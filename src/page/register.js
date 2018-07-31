import React, { Component } from "react";
import { registerAPI } from "../actions";
import {connect} from "react-redux";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        txtFullname: '',
        txtAddress: '',
        txtEmail: '',
        txtPhone: '',
        txtPassword: '',
        txtRePassword: '',
        check: false,
        check1: false
       
    }
}
onChange = (e) => {
  var target = e.target;
  var name = target.name;
  var value =  target.value;
  this.setState({
      [name]: value
  })
}
onSave = (e) => {
  e.preventDefault();
  var {txtAddress,txtEmail,txtFullname,txtPassword,txtPhone,txtRePassword} = this.state;
  var user = {
    name:txtFullname,
    address:txtAddress,
    email: txtEmail,
    phone: txtPhone,
    password:txtPassword,
  }
  if(txtPassword === txtRePassword){
    this.props.onRegister(user);
    this.setState({
        id: '',
        txtFullname: '',
        txtAddress: '',
        txtEmail: '',
        txtPhone: '',
        txtPassword: '',
        txtRePassword: '',
        check1: true
       
    
    })
  }else{
    this.setState({
      check: true
    })
  }
  
}
  render() {
    var {txtAddress,txtEmail,txtFullname,txtPassword,txtPhone,txtRePassword,check,check1} = this.state;
    return (
      <div>
        <div className="inner-header">
          <div className="container">
            <div className="pull-left">
              <h6 className="inner-title">Đăng kí</h6>
            </div>
            <div className="pull-right">
              <div className="beta-breadcrumb">
                <a href="index.html">Home</a> / <span>Đăng kí</span>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="container">
          <div id="content">

            <form onSubmit={this.onSave} className="beta-form-checkout">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  <h4>Đăng kí</h4>
                  <div className="space20">&nbsp;</div>


                  <div className="form-block">
                    <label >Email address*</label>
                    <input type="email" id="email" required name="txtEmail" value={txtEmail} onChange={this.onChange}/>
                  </div>

                  <div className="form-block">
                    <label >Fullname*</label>
                    <input type="text" id="your_last_name" required name="txtFullname" value={txtFullname} onChange={this.onChange}/>
                  </div>

                  <div className="form-block">
                    <label >Address*</label>
                    <input type="text" id="adress" required name="txtAddress" value={txtAddress} onChange={this.onChange}/>
                  </div>


                  <div className="form-block">
                    <label >Phone*</label>
                    <input type="text" id="phone" required name="txtPhone" value={txtPhone} onChange={this.onChange}/>
                  </div>
                  <div className="form-block">
                    <label>Password*</label>
                    <input type="password" required name="txtPassword" value={txtPassword} onChange={this.onChange}/>
                  </div>
                  <div className="form-block">
                    <label >Re password*</label>
                    <input type="password" id="repassword" required name="txtRePassword" value={txtRePassword} onChange={this.onChange}/>
                  </div>
                  <div className="form-block">
                  {check1 ? <span>{check1 === true ?"Ban da dang ki thanh cong":""} </span>:<span>{check === true ?"Ban nhap password chua khop":""} </span>}
                    
                    
                  </div>
                  <div className="form-block">
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    onRegister: (user) => {
      dispatch(registerAPI(user));
    }
  }
}
export default connect(null,mapDispatchToProps) (Register);