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
          <img
            src={quote_left}
            style={{
              fill: `${color}`,
              transition: "0.4s ease-in-out",
            }}
            id="quote-left"
            alt="quote"
          />{" "}
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
              style={{
                backgroundColor: `${color}`,
                transition: "0.4s ease-in-out",
              }}
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="twitter.com/intent/tweet"
              id="tweet-quote"
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
