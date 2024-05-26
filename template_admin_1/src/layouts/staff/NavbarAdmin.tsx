import { Link } from "react-router-dom";
import logo from "../../../public/assets/img/menu/logo/1.png";
import icon from "../../../public/assets/img/menu-icon/2.svg";

export default function NavbarAdmin() {
  return (
    <nav className="sidebar">
      <div className="logo d-flex justify-content-between">
        <Link to={"/admin/account/manager"}>
          <img src={logo} />
        </Link>
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close"></i>
        </div>
      </div>
      <ul id="sidebar_menu">
        <li className="mm-active">
          <Link to={"/admin/account/manager"} aria-expanded="false">
            <img src={icon} />
            <span>Quản lý giám đốc</span>
          </Link>
        </li>
        <li>
          <Link to={"/admin/account/staff"} aria-expanded="false">
            <img src={icon} />
            <span>Quản lý nhân viên</span>
          </Link>
        </li>
        <li>
          <Link to={"/admin/account/user"} aria-expanded="false">
            <img src={icon} />
            <span>Quản lý người dùng</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
