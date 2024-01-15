import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const FetchSection = () => {
  const [search, setSearch] = useState("");
  const [api, setApi] = useState([]);
  const [property, setProperty] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <section className="fetchSection">
      <div className="fetchSection__container">
        <div className="fetchSection__container__title">
          <span>OUR CASE STUDY</span>
          <h2>We work with global brands</h2>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <button
            onClick={() =>
              setProperty({ choosenproperty: "title", asc: false })
            }
          >
            a-Z
          </button>
          <button
            onClick={() => setProperty({ choosenproperty: "title", asc: true })}
          >
            Z-a
          </button>
          <button onClick={() => setProperty(null)}>Default</button>
        </div>
        <div className="fetchSection__container__allCard">
          {api
              .filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) => {
                if (property && property.asc === false) {
                  return a[property.choosenproperty].toLowerCase() >
                    b[property.choosenproperty].toLowerCase()
                    ? 1
                    : b[property.choosenproperty].toLowerCase() >
                      a[property.choosenproperty].toLowerCase()
                    ? -1
                    : 0;
                } else if (property && property.asc === true) {
                  return a[property.choosenproperty].toLowerCase() <
                    b[property.choosenproperty].toLowerCase()
                    ? 1
                    : b[property.choosenproperty].toLowerCase() <
                      a[property.choosenproperty].toLowerCase()
                    ? -1
                    : 0;
                }
                else{
                  return 0
                }
              })
              .map((x) => {
                return (
                  <div
                    key={x._id}
                    className="fetchSection__container__allCard__card"
                  >
                    <img src={x.img} alt="" />
                    <div className="fetchSection__container__allCard__card__content">
                      <div className="fetchSection__container__allCard__card__content__title">
                        {x.title}
                      </div>
                      <div className="fetchSection__container__allCard__card__content__text">
                        {x.text}
                      </div>
                      <Link to={`/DetailPage/${x._id}`}>
                        <button>Detail</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
