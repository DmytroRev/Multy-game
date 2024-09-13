const RestartButton = ({ onRestart }) => {
  return (
    <button className="restartButtonTetris" onClick={onRestart}>
      Restart
    </button>
  );
};

export default RestartButton;
