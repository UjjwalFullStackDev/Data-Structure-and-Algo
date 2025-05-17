import Stack from "./Stack.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const stack = new Stack();

let exit = false;

while (!exit) {
  console.log(`
Please select one of the options below:
    1. Add a new domain
    2. Check current domain
    3. Go back to previous domain
    4. Check all open domains
    5. Exit
    `);

  const userChoice = prompt("Enter your choice (1-4): ");
  const userChoiceNumber = parseInt(userChoice);
  console.log(`You selected option: ${userChoiceNumber}`);

  switch (userChoiceNumber) {
    case 1: {
      const domainName = prompt("Enter your domain name: ");
      stack.push(domainName);
      console.log(`"${domainName}" is now open.`);
      break;
    }

    case 2: {
      const currentDomain = stack.peek();
      if (currentDomain) {
        console.log(`Current domain: "${currentDomain}"`);
      } else {
        console.log("No domain currently open.");
      }
      break;
    }

    case 3: {
      const removedDomain = stack.pop();
      if (removedDomain) {
        console.log(`"${removedDomain}" has been closed.`);
        const newTopDomain = stack.peek();
        if (newTopDomain) {
          console.log(`You went back to "${newTopDomain}".`);
        } else {
          console.log("No domains left in history.");
        }
      } else {
        console.log("No domain to go back from.");
      }
      break;
    }
    case 4: {
      const allDomains = stack.size();
      if (allDomains) {
        console.log(`"${allDomains}" domains are currently opened.`);
      } else {
        console.log("You don't have any domain opened right now");
      }
      break;
    }

    case 5:
      console.log("Exiting...");
      exit = true;
      break;

    default:
      console.log("Invalid choice. Please enter a number between 1 and 4.");
  }

  console.log("");
}
