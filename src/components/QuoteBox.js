import React, { useState } from "react";

import twitter from "../assets/twitter.png";
import tumblr from "../assets/tumblr.png";
import quote_left from "../assets/quote.svg";

import quotes from "../data/quotes";
import colors from "../data/colors";

import "../styles/QuoteBox.css";

const QuoteBox = () => {
  const [quote, setQuote] = useState(0);
  const [color, setColor] = useState(
    `#${colors[Math.floor(Math.random() * 3)]}`
  );
  console.log(color);

  const newQuote = (max, max2) => {
    const randomQuote = Math.floor(Math.random() * max);
    const randomColor = Math.floor(Math.random() * max2);

    setQuote(randomQuote);
    setColor(`#${colors[randomColor]}`);

    console.log(randomColor);
    console.log(color);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${color}`,
        overflow: "hidden",
        transition: "0.4s ease-in-out",
      }}
    >
      <div id="quote-box">
        <div
          id="text"
          style={{
            color: `${color}`,
            transition: "0.4s ease-in-out",
          }}
        >
          {/* <img
            src={quote_left}
            style={{
              fill: `${color}`,
              transition: "0.4s ease-in-out",
            }}
            id="quote-left"
            alt="quote"
          />{" "} */}
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 123.961 123.961"
            style={{ fill: `${color}`, transition: "ease-in-out 0.4s" }}
          >
            <g>
              <path
                d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
		C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
		H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
              />
              <path
                d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
		c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
		c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
              />
            </g>
          </svg>{" "}
          {quotes[quote].quote}
        </div>
        <div
          id="author"
          style={{
            color: `${color}`,
            transition: "0.4s ease-in-out",
          }}
        >
          - {quotes[quote].author}
        </div>
        <div className="flex-box">
          <div className="share-box">
            <a
              href="twitter.com/intent/tweet"
              id="tweet-quote"
              className="share-quote"
              style={{
                backgroundColor: `${color}`,
                transition: "0.4s ease-in-out",
              }}
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="twitter.com/intent/tweet"
              className="share-quote"
              style={{
                backgroundColor: `${color}`,
                transition: "0.4s ease-in-out",
              }}
            >
              <img src={tumblr} alt="tumblr" />
            </a>
          </div>
          <button
            style={{ backgroundColor: `${color}` }}
            onClick={() => newQuote(quotes.length, colors.length)}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
