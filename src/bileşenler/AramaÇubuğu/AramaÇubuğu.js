// MUÜ için bu dosyayı değiştirmenize gerek yok
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./AramaÇubuğu.css";

const AramaÇubuğu = (props) => {
  const { search } = props;
  // const [search, setSearch] = useState("");

  // const searchHandler = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          value={search}
          //onChange={searchHandler}
          placeholder="Arama"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default AramaÇubuğu;
