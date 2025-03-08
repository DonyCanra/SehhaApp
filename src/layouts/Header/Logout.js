import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Icons from "../../utils/icons/IconHeader";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus auth data dari localStorage & sessionStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");

    // Tampilkan notifikasi logout
    toast.success("Logout Successfully!", { duration: 1500 });

    // Tunggu sebentar sebelum redirect
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="dropdown-item d-flex" onClick={handleLogout} style={{ cursor: "pointer" }}>
      {Icons?.Logout ? <Icons.Logout /> : <span>🔄</span>} {/* Fallback jika undefined */}
      <div className="fs-13">Sign Out</div>
    </div>
  );
};

export default Logout;
