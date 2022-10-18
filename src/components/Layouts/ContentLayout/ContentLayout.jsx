import { Outlet } from "react-router-dom";

const ContentLayout = (props) => {
  return <main className="content-layout">{props.children}</main>;
};

export default ContentLayout;
