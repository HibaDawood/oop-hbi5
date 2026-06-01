# 💬 OOP Chat Simulator

A TypeScript/Node.js CLI application that simulates a dynamic conversation environment using Object-Oriented Programming (OOP) concepts.

---

## ✨ Features

* **Interactive Choices:** Users can choose to talk to themselves, interact with a student, or exit the application.
* **Dynamic Student Creation:** Checks if a student exists in the system; if not, instantiates a new `Student` object and stores it in real-time.
* **State Management:** Keeps a running array of all active student profiles using a central `Person` class.
* **Colorful Interface:** Styled prompts using `inquirer` and terminal text feedback with `chalk`.

---

## 🛠️ Tech Stack

* **Language:** TypeScript / Node.js
* **Libraries:** `inquirer` (CLI input management), `chalk` (Terminal coloring)

Markdown
---

## 🚀 How to Run & Use

1. Clone or download this repository to your local computer.
2. Open your terminal in the project folder and install the dependencies:
   ```bash
   npm install
3. Run the application using the following command:

```bash
npx tsc && node index.js
