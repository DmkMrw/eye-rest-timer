const Timer = ({time}) => {

  let seconds = String(time % 60).padStart(2, '0');
  let minutes = String(Math.floor(time / 60)).padStart(2, '0');

  return (
    <>
      `${minutes}:${seconds}`
    </>
  );
}

export default Timer;