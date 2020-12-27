import React, { useEffect, useState } from "react";

export default () => {
  // const [loginId, setLoginId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    console.log("userinfo: ", userInfo)
    const getLoginId = localStorage.getItem("loginID");
    const getInfoAPI = async() =>{

      await fetch("https://demo4757926.mockable.io/user_info")
        .then((res) => res.json())
        .then((data) => {
          const filterId = data.filter((item) => item.id === getLoginId);
          setUserInfo(filterId);
      
        });
    }
    getInfoAPI();
    console.log("LoginID::", getLoginId);
  }, []);

  return <h1>hello</h1>;
};
