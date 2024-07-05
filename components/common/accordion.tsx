"use client";
import React, { FunctionComponent, useState, useEffect } from "react";

interface Props {
  isOpen?: boolean;
  title: string;
  content: string;
}

const Accordion: FunctionComponent<Props> = ({
  isOpen = false,
  title,
  content,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(isOpen);
  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    if (accordionOpen) {
      setRenderContent(true);
    } else {
      const timeout = setTimeout(() => {
        setRenderContent(false);
      }, 300); // matches the duration of the fade-out animation
      return () => clearTimeout(timeout);
    }
  }, [accordionOpen]);

  return (
    <div className="bg-gray-200 p-4 mb-4 rounded-2xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="font-light text-lg text-left">{title}</span>
        <svg
          className="fill-gray-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      {renderContent && (
        <div
          style={{ height: accordionOpen ? "auto" : "0", overflow: "hidden" }}
          className="transition-all duration-300 ease-in-out"
        >
          <div
            className={`opacity-${
              accordionOpen ? "100" : "0"
            } transition-opacity duration-300 ease-in-out pt-4`}
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      )}
    </div>
  );
};

export { Accordion };
