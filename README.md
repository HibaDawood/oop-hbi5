# 💬 OOP Chat Simulator
[![npm version](https://img.shields.io/npm/v/oop-hbi5.svg?style=flat-square)](https://www.npmjs.com/package/oop-hbi5)

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

### 🚀 How to Run & Use

Run this application directly in your terminal using `npx` (No installation required):

```bash
npx oop-hbi5
