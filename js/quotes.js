const quotes = [
    {
        quote: "Learning without will leaves no room for the self.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "In truth, a person cares for nothing more deeply than for themselves.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "Without suffering, we cannot fully become who we are.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "Only what is discovered through one’s own thought holds true worth.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "Nothing truly changes until one comes to understand it for themselves.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "If I turned everything I enjoy today into money, I could buy the whole world and still have change.",
        author: "Jack, Me.",
    },
    {
        quote: "All I truly have the power to change is what I do, here and now.",
        author: "Jack, Me.",
    },
    {
        quote: "Easy come, Easy go.",
        author: "Proverb",
    },
    {
        quote: "Just Do It.",
        author: "Nike",
    },
    {
        quote: "Sometimes, just 1% is all it takes to change everything.",
        author: "James Clear",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;