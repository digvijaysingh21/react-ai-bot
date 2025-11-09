import { useEffect, useState } from "react";
import { checkHeading, replaceHeading } from "../helper";

const Answer = ({ ans, totalResult, index }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  console.log(index);

  useEffect(() => {
    // console.log(ans, checkHeading(ans));
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeading(ans));
    }
  }, []);

  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="pt-2 text-xl block">{answer}</span>
      ) : heading ? (
        <span className="pt-2 block text-lg text-white">{answer}</span>
      ) : (
        <span className="pl-5">{answer}</span>
      )}
    </>
  );
};

export default Answer;
