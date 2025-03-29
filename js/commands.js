import executor from "./executors.js";

export default [
  {
    name: ["search", "s"],
    description: "Searches DuckDuckGo for the given query",
    execute: executor.search,
  },
  {
    name: ["ls"],
    description: "Lists available shortcuts",
    execute: executor.ls,
  },
  {
    name: ["help"],
    description: "Lists available commands",
    execute: executor.help,
  },
  {
    name: ["clear"],
    description: "Clears the output history",
    execute: executor.clear,
  },
  {
    name: ["date"],
    description: "Shows current date, time, and weather",
    execute: executor.date,
  },
  {
    name: ["fortune"],
    description: "Drops a random tech quote or witty one-liner",
    execute: executor.fortune,
  },
  {
    name: ["neofetch"],
    description: "Displays system info like a Linux fetch script",
    execute: executor.neofetch,
  }  
];
