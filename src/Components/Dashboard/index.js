import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import UserCard from "./UserCard";
export function Dashboard() {
  // const [loginId, setLoginId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getLoginId = localStorage.getItem("loginID");
    async function getInfoAPI() {
      await fetch("https://demo4757926.mockable.io/user_info")
        .then((res) => res.json())
        .then((data) => {
          const filterId = data.filter((item) => item.id === getLoginId);
          // console.log("filter Id", filterId)
          setUserInfo(filterId);
        });
    }
    getInfoAPI();
    console.log("LoginID::", getLoginId);
  }, []);

  return (
    <div>
      <NavBar />
      <UserCard userINFO={userInfo}/>
    </div>
  );
}
