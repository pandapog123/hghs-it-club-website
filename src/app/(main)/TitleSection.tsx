"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TitleSection() {
  const titles = [
    "Learn Cyber Security.",
    "Compete For Our Club.",
    "Practice Your Skills.",
  ];
  let [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  let [titleIncreasing, setTitleIncreasing] = useState(false);
  let [currentText, setCurrentText] = useState(titles[currentTitleIndex]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentText((prevText) => {
          if (!titleIncreasing) {
            return prevText.split("").slice(0, -1).join("");
          } else {
            return titles[currentTitleIndex]
              .split("", prevText.length + 1)
              .join("");
          }
        });
      }, 100);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [titleIncreasing]);

  useEffect(() => {
    if (currentText.length == 0) {
      setTitleIncreasing(true);
      setCurrentTitleIndex((prev) => {
        if (prev + 1 == titles.length) {
          return 0;
        }

        return prev + 1;
      });
    } else if (currentText.length == titles[currentTitleIndex].length) {
      setTitleIncreasing(false);
    }
  }, [currentText]);

  return (
    <section className="p-16 flex flex-col gap-12 bg-radial-[at_90%_10%] to-75% from-primary/30 to-primary/0 circle offset">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-black max-w-3xl leading-28">
          <pre className="whitespace-pre-line h-56 typing-effect">
            {currentText}
          </pre>
        </h1>

        <h2 className="text-gray-400 text-xl max-w-2xl leading-8 font-semibold">
          Our club offers a variety of learning and competitive opportunities
          for our members. Consider contacting an officer or apply right here
          for our club!
        </h2>
      </div>

      <div className="flex gap-4">
        <Link
          href="/apply"
          className="text-xl font-semibold px-10 py-4 bg-primary hover:bg-primary-hover rounded transition-all"
        >
          Apply
        </Link>

        <Link
          href="/account/login"
          className="text-xl font-semibold px-10 py-4 bg-gray-800 text-gray-200 hover:bg-gray-700 rounded transition-all"
        >
          Sign in
        </Link>
      </div>

      <Link
        href="/practice"
        className="flex content-center justify-center gap-2 rounded-full bg-gray-900 px-2 py-2 pr-4 w-fit text-gray-400 hover:bg-gray-800 transition-all"
      >
        <div className="rounded-full bg-primary/15 text-primary px-4 py-1 w-fit text-xs font-bold">
          NEW
        </div>
        <p className="self-center text-sm font-semibold h-min">
          Practice Free Real-World Cybersecurity Scenarios
        </p>
      </Link>
    </section>
  );
}
