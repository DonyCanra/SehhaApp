import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setGlobalLoading } from "../../redux/slices/globalSlice"; // Import action Redux
import Icons from "../../utils/icons/IconHeader";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setGlobalLoading(true));

    setTimeout(() => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("user");

      toast.success("Logout Successfully!", { duration: 1500 });

      dispatch(setGlobalLoading(false));
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="dropdown-item d-flex" onClick={handleLogout} style={{ cursor: "pointer" }}>
      {Icons?.Logout ? <Icons.Logout /> : <span>🔄</span>} {/* Fallback jika undefined */}
      <div className="fs-13">Sign Out</div>
    </div>
  );
};

export default Logout;
