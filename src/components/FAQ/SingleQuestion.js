import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className=" rounded-sm bg-gray-800 mb-2">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2 onClick={() => setShowAnswer(!showAnswer)} className="cursor-pointer text-white font-bold">{question}</h2>

          <ul>
            {
                !showAnswer && <li>
                <button className="text-white" onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            }
            {
                showAnswer && <li>
                <button className="text-white" onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            }
          </ul>
        </article>

        <article className={`${showAnswer && "border-t border-gray-950 p-4"}`}>
          {showAnswer && <p className="text-white">{answer}</p>}
        </article>
      </div>
    </>
  );
}
