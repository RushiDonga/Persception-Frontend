import React from "react";
import { useState } from "react";
import { questions } from "../../data/faq";
import SingleQuestion from "./SingleQuestion";

export default function FrequentlyAskedQuestions() {
  const [faq] = useState(questions);

  return (
    <section className="w-full mx-auto py-10 lg:px-40 bg-gray-900">
      <h1 className="py-6 px-4 bg-gray-900 text-center text-white font-bold text-xl sm:text-2xl md:text-4xl">
        Frequently asked <span className="text-primary">Questions</span>
      </h1>

      <section className="grid grid-cols-1 px-2 sm:px-10">
        {faq.map((question, index) => (
          <SingleQuestion {...question} key={index} />
        ))}
      </section>
    </section>
  );
}
