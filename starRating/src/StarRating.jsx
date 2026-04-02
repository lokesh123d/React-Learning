import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const StarRating = ({ starLeng }) => {
  const [currentRating, setcurrentRating] = useState(1);
  const [starArr, setstarArr] = useState(new Array(starLeng).fill(""));
  return (
    <div>
      <h1>Star Rating</h1>
      {starArr.map((str, index) => {
        if (currentRating >= index + 1) {
          return (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#f2d233" }}
              key={index}
              className="str-icon"
              onClick={(e) =>
                currentRating == 1 && index + 1 == 1
                  ? setcurrentRating(0)
                  : setcurrentRating(index + 1)
              }
            />
          );
        } else {
          return (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "gray" }}
              key={index}
              className="str-icon"
              onClick={(e) =>
                currentRating == 1 && index + 1 == 1
                  ? setcurrentRating(0)
                  : setcurrentRating(index + 1)
              }
            />
          );
        }
      })}
      <h3>
        Review :{currentRating}/{starLeng}
      </h3>{" "}
    </div>
  );
};

export default StarRating;
