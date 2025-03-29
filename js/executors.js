import { dateDiffInMinutes, error, getWeather, render } from "./helpers.js";
import shortcuts from "./shortcuts.js";

export default {
  search: (options) => {
    const query = options.join(" ") || null;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
    } else {
      render("No query, redirecting to Google!");
      window.location.href = "https://www.google.com";
    }
  },
  ls: () => {
    if (shortcuts) {
      let shortcutsOutput = '<div class="shortcuts-container">';
      shortcuts.forEach((s) => {
        shortcutsOutput += `<div class="shortcuts"><p class="${s.color}">~/${s.category}</p>`;
        Object.entries(s.items).forEach(([name, link]) => {
          shortcutsOutput += `<p><span class="${s.color}">> </span><a class="shortcut" href="${link}">${name}</a></p>`;
        });
        shortcutsOutput += "</div>";
      });
      render(shortcutsOutput + "</div><br />");
    } else {
      error("yellow", "No Shortcuts", "Add some with the `add` command!");
    }
  },
  help: (cmdList) => {
    let padToLen = Math.max(...cmdList.map((c) => c.name.join("|").length));
    let helpMessage = "";
    cmdList.forEach((c) => {
      let paddedCommand = c.name
        .join("|")
        .padEnd(padToLen, " ")
        .replaceAll(" ", "&nbsp;");
      helpMessage += `<p><span class="cyan">${paddedCommand}</span>&nbsp;&nbsp;&nbsp;&nbsp;${c.description}</p>`;
    });
    render(helpMessage, false);
  },
  clear: () => {
    output.innerHTML = "";
    input.focus();
  },
  fortune: () => {
    const fortunes = [
      "The best way to predict the future is to invent it.",
      "Unix is user-friendly. It's just selective about who its friends are.",
      "To err is human, to really foul things up you need a computer.",
      "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.",
      "Why do Java developers wear glasses? Because they don't see sharp.",
      "Fortune favors the bold.",
      "If at first you don't succeed; call it version 1.0.",
      "In a world without fences and walls, who needs Gates and Windows?",
      "Programming is like writing a book... except if you miss a single comma on page 126 the whole thing won’t compile.",
      "Beware of bugs in the above code; I have only proved it correct, not tried it. – Donald Knuth",
    ];
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    render(`🍀 <i>${random}</i>`);
  },
  date: () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();
    render(`
      <p style="display: flex; gap: 1rem; align-items: center;">
        <span>📅 <b>${date}</b></span>
        <span>⏰ <b>${time}</b></span>
      </p>
    `);
  },
  neofetch: () => {
    const username = "charles"; // You can make this dynamic later
    const hostname = "baymax";
    const os = navigator.platform;
    const browser = navigator.userAgent;
    const uptimeMin = Math.floor(performance.now() / 1000 / 60);
    const background = "monochrome-world.jpg"; // You can fetch this dynamically if you randomize
  
    render(`
      <pre>
  <span class="cyan">${username}</span><span class="light-gray">@</span><span class="green">${hostname}</span>
  ----------------------------
  <span class="yellow">OS</span>: ${os}
  <span class="yellow">Browser</span>: ${browser}
  <span class="yellow">Uptime</span>: ${uptimeMin} mins
  <span class="yellow">Background</span>: ${background}
  <span class="yellow">Theme</span>: Synthwave (custom)
      </pre>
    `, false);
  }  
};
