import { React, useState, useEffect } from "react";
import "./BodyList.css";
import BodyType from "./BodyType";

import { fetchBodyType } from "../../apiCalls";

const url =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

const testBody = [
  {
    id: 1,
    imageSrc: url,
  },
  {
    id: 2,
    imageSrc: url,
  },
];

const BodyList = () => {
  const [body, setBody] = useState(testBody);
  // const handle = async () => {
  //   const res = await fetchBodyType();
  //   setBody(res.bodytypes);
  // };
  return (
    <div className="bodylist-container">
      {body.map((item) => (
        <BodyType key={item.id} bodytype={item} />
      ))}
    </div>
  );
};

export default BodyList;
