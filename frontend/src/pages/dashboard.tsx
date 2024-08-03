import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashUsers from "../components/DashUsers";
// import DashSidebar from "../components/DashSidebar";
import DashPosts from "../components/DashPosts";
import DashComments from "@/components/DashComments";
import DashComp from "@/components/DashComp";
import { SideBar } from "@/components/Sidebar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-fit">
        {/* Sidebar */}

        <SideBar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPosts />}
      {tab === "comments" && <DashComments />}
      {/* users */}
      {tab === "dash" && <DashComp />}
      {tab === "users" && <DashUsers />}
    </div>
  );
}
