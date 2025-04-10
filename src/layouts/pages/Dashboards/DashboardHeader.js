import React from "react";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../../../redux/slices/globalSlice";
import CustomButton from "../../../components/Button/CustomButton";
import DropdownButton from "../../../components/Button/DropdownButton";

const DashboardHeader = () => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const handleDownload = () => {
    dispatch(setGlobalLoading(true));
    setLoading(true);

    setTimeout(() => {
      dispatch(setGlobalLoading(false));
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="page-header">
      <div className="page-leftheader">
        <h4 className="page-title mb-0 text-primary">Dashboard</h4>
      </div>
      <div className="page-rightheader">
        <div className="btn-list">
          <CustomButton loading={loading} onClick={handleDownload} icon={<i className="fe fe-check" />}>
            Check Loading
          </CustomButton>
          <DropdownButton
            options={["Today", "Yesterday", "Last 7 days", "Last 30 days", "Last Month", "Last 6 months", "Last year"]}
            defaultLabel="Last 7 days"
            icon={<i className="fa fa-calendar fs-14" />}
            onSelect={(val) => console.log("Date selected:", val)}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
