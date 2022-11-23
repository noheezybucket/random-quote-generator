import React, { useState } from "react";

import twitter from "../assets/twitter.png";
import tumblr from "../assets/tumblr.png";
import quote_left from "../assets/quote.png";

import quotes from "../data/quotes";

import "../styles/QuoteBox.css";

const QuoteBox = () => {
  const [quote, setQuote] = useState(0);

  const newQuote = (max) => {
    const random = Math.floor(Math.random() * max);
    console.log(random);
    return setQuote(random);
  };

  return (
    <div id="quote-box">
      <div id="text">
        <img src={quote_left} id="quote-left" alt="quote" />{" "}
        {quotes[quote].quote}
      </div>
      <div id="author">- {quotes[quote].author}</div>
      <div className="flex-box">
        <div className="share-box">
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            <img src={tumblr} alt="tumblr" />
          </a>
        </div>
        <button onClick={() => newQuote(7)} id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
