//Login chi Linh
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
//import "../../css/style-login.css";

const roleType = {
    factory: 'factory',
    store:'store',
    admin:'admin',
    warranty:'warranty_center'
    //thêm các role vào đây,
}

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//   }

  // setParams = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  const navigate = useNavigate();
  
  const clickLogin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", userName);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "http://localhost/web2223(1)/ProductionMove/public/api/auth/login",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        //localStorage.setItem("status", result.status);
        //thêm token vào local storage
        // các màn khác phải xét nếu chưa có token thì ra màn login
        // chị nghĩ các em làm bấm vào logout nó ra màn login là đc, dành thời gian sửa cái khác
        // alert("Thanh cong"); //ko cần dòng này
        localStorage.setItem("place_code", result.user.place_code)
        toast.success('thàng công')
        setPassword('');
        setUserName('');
        switch (result?.user?.user_role) {
            case roleType.factory:
                navigate('/thisfactory');
                console.log(result)
                break;

            case roleType.store:
              navigate('/thisstore');
              console.log(result)
              break;

            case roleType.admin:
              navigate('/admin');
              console.log(result)
              break;

            case roleType.warranty:
              navigate('/thiswarranty')
              console.log(result)
              break;
            //case //viết nốt vào đây là đc nè
            default:
              navigate('/login');
              break;
        }
        //em thêm swith case vào đây theo từng role
        // dùng useNavigate để chuyển trang
      })
      .catch((error) => {
        console.log("error", error);
        alert("Username, password are wrong");
      });
  };

    return (
      <form className ="format div-login">
        <h1>BIGCORP</h1>

        <div class="user-box" className="single-bottom comment-form">
          <label>Username:</label>
          <input type="text" name="username" onChange={(event: any) => setUserName(event.target.value)}  className="form-control"/>
        </div>
        <div class="user-box">
          <label>Username:</label>
          <input type="password" name="password" onChange={(event: any) => setPassword(event.target.value)} className="form-control"/>
        </div>
        <div>
          <button type="button" name="username" onClick={clickLogin} className="book-now-btn">
            Login
          </button>
        </div>
      </form>

     
    );
  }

  export default Login;


