import React, { Fragment, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useErrorHandler } from "react-error-boundary";

function Users() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [, setEachUser] = useState();

  const pages = 4;
  const handleError = useErrorHandler();

  const onClickHandler = () => {
    setActiveLink(0);
    setLoading(true);

    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((response) => {
        console.log(response.data.results);
        const eachUser = response.data.results[page];
        setData(response.data.results);
        setEachUser(response.data.results[page]);
        setUserData([eachUser]);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      })
      .catch((error) => {
        handleError(error);
        console.log(error);
        setLoading(true);
      });
  };

  const icons = [
    "fas fa-user fa-3x",
    "fas fa-envelope fa-3x",
    "fas fa-calendar-alt fa-3x",
    "fas fa-map-marker fa-3x",
    "fas fa-phone fa-3x",
    "fas fa-lock fa-3x",
  ];

  const PhraseGenerator = ({ user }) => {
    const phrases = [
      `Hi, My name is ${user.name.title} ${user.name.first} ${user.name.last} `,
      `My email address is ${user.email}`,
      `I was born on ${user.dob.date.slice(0, 10)}`,
      `My country is ${user.location.country}`,
      `My phone number is ${user.phone}`,
      `My password is ${user.login.password}`,
    ];
    return (
      <div>
        <p className="phrase">{phrases[activeLink]}</p>
      </div>
    );
  };

  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <Nav />
      <section className="users-container">
        <button className="getBtn" id="getUsers" onClick={onClickHandler}>
          {activeUser ? "Get Another 5 Users" : "Get 5 Users"}
        </button>

        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <div className="app-user">
            {userData.map((user, index) => {
              return (
                <div className="list" key={index}>
                  <Fragment>
                    <img src={user.picture.large} alt="userPicture" />
                    <PhraseGenerator user={user} />
                    <div className="app-icons">
                      {icons.map((icon, index) => {
                        return (
                          <i
                            className={icon}
                            key={index}
                            onMouseEnter={() => activeLinkHandler(index)}
                            iconsize={10}
                            style={
                              activeLink === index
                                ? { color: "steelblue" }
                                : { color: "lightslategray" }
                            }
                          ></i>
                        );
                      })}
                    </div>
                  </Fragment>

                  <div className="center">
                    <div className="pagination">
                      <button
                        disabled={page <= 0}
                        aria-disabled={page <= 0}
                        onClick={() => {
                          setPage((prev) => prev - 1);
                          setUserData([data[page]]);
                        }}
                      >
                        PREV
                      </button>
                      <button
                        disabled={page >= pages}
                        aria-disabled={page >= pages}
                        onClick={() => {
                          setPage((prev) => prev + 1);
                          setUserData([data[page]]);
                        }}
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Users;
