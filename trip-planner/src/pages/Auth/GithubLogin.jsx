import React, { useEffect, useState } from "react";
import classes from "./GithubLogin.module.css";

const CLIENT_ID = "ab85253e8cdea5a7ef2b";

const GithubLogin = () => {
  const [rerender, setRerender] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    //http://127.0.0.1:5173/success?code=44363eb6ca6050afe5e9
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);

    // local storage
    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
            }
          });
      }
      getAccessToken();
    }
  }, []);

  async function getUserData() {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }

  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  }
  return (
    <div className={classes["githubLogin-outerbox"]}>
      <div className={classes["githubLogin-innerbox"]}>
        <p> Login with Github</p>
        {localStorage.getItem("accessToken") ? (
          <>
            <h1>Welcome</h1>
            <button
              className={classes["actionBtn"]}
              onClick={() => {
                localStorage.removeItem("accessToken");
                setRerender(!rerender);
              }}
            >
              Log out
            </button>
            <h3> Get User Data from Github</h3>
            <button className={classes["actionBtn"]} onClick={getUserData}>
              Get Data
            </button>
            {userData.length !== 0 ? (
              <>
                <h4>Hey there {userData.login}</h4>
                <ul>
                  <li>
                    {userData.avatar_url ? (
                      <img
                        width="100px"
                        height="100px"
                        src={userData.avatar_url}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </li>
                  <li>
                    <a href={userData.html_url} style={{ color: "white" }}>
                      Link to the user Github profile
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <> </>
            )}
          </>
        ) : (
          <>
            <h3>User is not logged in</h3>
            <button onClick={loginWithGithub}>Login </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GithubLogin;
