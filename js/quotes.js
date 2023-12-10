const quotes = [
  {
    quote:
      "What though life conspire to cheat you, Do not sorrow or complain. Lie still on the day of pain, And the day of joy will greet you.",
    author: "Alexander Pushkin",
  },
  {
    quote:
      "Hearts live in the coming day. There's an end to passing sorrow. Suddenly all flies away, And delight returns tomorrw.",
    author: "Alexander Pushkin",
  },
  {
    quote:
      "Le silence eternel des ces espaces infinis m'effraie - The eternal silence of these infinite spaces frightens me.",
    author: "Blaise Pascal",
  },
  {
    quote:
      "We are generally the better persuaded by the reasons we discover ourselves than by those given to us by others.",
    author: "Blaise Pascal",
  },
  {
    quote:
      "The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.",
    author: "Henry Wadsworth Longfellow",
  },
  {
    quote:
      "Every man has his secret sorrows which the world knows not, and often times we call a man cold when he is only sad.",
    author: "Henry Wadsworth Longfellow",
  },
  {
    quote:
      "Time is the substance from which I am made. Time is a river which carries me along, but I am the river; it is a fire that consumes me, but I am the fire.",
    author: "Jorge Luis Borges",
  },
  {
    quote: "A man sees in the world what he carries in his heart.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "Daring ideas are like chessmen moved forward. They may be beaten, but they may start a winning game.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "Nobody ever figures out what life is all about, and it doesn't matter.",
    author: "Richard P. Feynman",
  },
  {
    quote:
      "Explore the world. Nearly everything is really interesting if you go into it deeply enough.",
    author: "Richard P. Feynman",
  },
  {
    quote:
      "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    author: "Richard P. Feynman",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
