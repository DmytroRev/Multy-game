import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import circle_icon from "../../img/circle.png";
import cross_icon from "../../img/cross.png";
import "./TicTacToe.css";
import { Link } from "react-router-dom";
import AiOrUser from "./AiOrUser/AiOrUser";
import ComputerPlayer from "./ComputerPlayer/ComputerPlayer";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [gameMode, setGameMode] = useState("");
  let [difficulty, setDifficulty] = useState("easy");
  let [firstMove, setFirstMove] = useState("player");
  let [crossWins, setCrossWins] = useState(0);
  let [circleWins, setCircleWins] = useState(0);

  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  const backToPage = useRef(location.state ?? "/");
  const box_array = useMemo(
    () => [box1, box2, box3, box4, box5, box6, box7, box8, box9],
    []
  );
  const checkWin = useCallback(() => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  }, []);
  useEffect(() => {
    if (gameMode === "computer" && count % 2 === 1 && !lock) {
      const timeoutId = setTimeout(() => {
        const move = ComputerPlayer(data, difficulty);
        if (move !== null) {
          const box = box_array[move];
          box.current.innerHTML = `<img src='${circle_icon}'/>`;
          data[move] = "o";
          setCount((prevCount) => prevCount + 1);
          checkWin();
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [gameMode, count, difficulty, box_array, checkWin, lock]);

  useEffect(() => {
    if (gameMode === "computer" && firstMove === "computer" && count === 0) {
      const timeoutId = setTimeout(() => {
        const move = ComputerPlayer(data, difficulty);
        if (move !== null) {
          const box = box_array[move];
          box.current.innerHTML = `<img src='${circle_icon}'/>`;
          data[move] = "o";
          setCount(0);
          checkWin();
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [gameMode, count, difficulty, box_array, checkWin, firstMove]);
  const toggle = (e, num) => {
    if (lock || (gameMode === "computer" && count % 2 === 1)) {
      return;
    }

    if (data[num] !== "") {
      return;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'/>`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'/>`;
      data[num] = "o";
    }

    setCount((prevCount) => prevCount + 1);
    checkWin();
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congrulatulations: <img src='${cross_icon}'/> wins`;
      setCrossWins((prevCount) => prevCount + 1);
    } else {
      setCircleWins((prevCount) => prevCount + 1);
      titleRef.current.innerHTML = `Congrulatulations: <img src='${circle_icon}'/> wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    titleRef.current.innerHTML = "Tic Tac Toe in <span>React</span>";

    box_array.forEach((box) => {
      if (box.current) {
        box.current.innerHTML = "";
      }
    });
  };

  return (
    <div className="container">
      <button type="button" className="back hover">
        <Link to={backToPage.current} className="link">
          Back
        </Link>
      </button>
      <h1 className="title visually-hidden" ref={titleRef}>
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div>
        <AiOrUser
          gameMode={gameMode}
          setGameMode={setGameMode}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          firstMove={firstMove}
          setFirstMove={setFirstMove}
        />
      </div>

      <div className="board">
        <div className="container-for-count cross">
          <img src={cross_icon} className="img-cross-contain" />
          <span className="line"></span>
          <p className="count">{crossWins}</p>
        </div>
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
        <div className="container-for-count circle">
          <img src={circle_icon} className="img-cross-contain" />
          <span className="line"></span>
          <p className="count">{circleWins}</p>
        </div>
      </div>

      <button
        className="reset hover"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default TicTacToe;
