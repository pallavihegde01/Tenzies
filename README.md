# 🎲 Tenzies Game 

An interactive implementation of the classic **Tenzies dice game** built using **React.js**.  
The game challenges players to roll dice until all dice show the same value, allowing them to hold selected dice between rolls.

---

## 🚀 Features

- 🎲 **Dice Rolling Logic**
  - Roll 10 dice with random values (1–6)
  - Hold individual dice to lock their value

- 🏆 **Win Detection**
  - Automatically detects when all dice are held and have the same value
  - Displays a win message and celebratory confetti animation

- 🔢 **Roll Counter**
  - Tracks the number of rolls taken to win the game

- ⏱️ **Game Timer**
  - Tracks the total time taken to complete a game
  - Timer resets on starting a new game

- 🥇 **Best Score Tracking**
  - Stores the best performance (least rolls & time) using `localStorage`
  - Persists data across browser refreshes

- 🎨 **Responsive UI**
  - Clean and responsive layout styled using Tailwind CSS
  - Optimized for both desktop and mobile screens

---

## 🛠️ Tech Stack

- **React** (Functional Components, Hooks)
- **Tailwind CSS** (Styling)
- **react-confetti** (Win animation)
- **Browser localStorage** (Persistent best score)

---

## 🧠 Game Logic Overview

1. Dice are generated with random values between 1 and 6.
2. Players can hold dice to prevent them from changing during rolls.
3. Each roll increments the roll counter.
4. A timer runs while the game is active.
5. The game is won when:
   - All dice are held
   - All dice have the same value
6. Best score is updated if the current game performs better than previous records.

---


