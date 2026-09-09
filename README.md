# English Janala

English Janala is a responsive vocabulary-learning web app for Bengali speakers. It loads lessons and words from the Programming Hero API and provides meanings, pronunciation, examples, synonyms, and text-to-speech playback.

**Live:** [achibhossengit.github.io/english-janala](https://achibhossengit.github.io/english-janala/)

## Features

- Simple name and password login with logout support
- Vocabulary lessons loaded from an API
- Lesson-specific vocabulary cards with Bangla meanings and pronunciations
- Detailed word modal with examples and synonyms
- English text-to-speech playback
- Loading indicators and empty-lesson messages
- Smooth navigation between learning and FAQ sections
- Responsive layout
- JavaScript FAQ accordion

## Technologies

- HTML5
- Tailwind CSS
- DaisyUI
- Vanilla JavaScript
- Font Awesome
- Web Speech API

## Run Locally

1. Clone or download this repository.
2. Open `index.html` in a browser.

For the best experience, serve the project with a local development server such as VS Code Live Server.

## Usage

1. Enter any name.
2. Enter the password `1234`.
3. Select a lesson.
4. Click a word card to view its details.
5. Click the speaker icon to hear the word.
6. Click **Logout** to return to the welcome screen.

## API

The app uses the [Programming Hero Open API](https://openapi.programming-hero.com/) to retrieve lesson and vocabulary data.

- `GET /api/levels/all` — retrieve all lesson levels
- `GET /api/level/:level` — retrieve words for a lesson
- `GET /api/word/:id` — retrieve details for one word

## Project Structure

```text
English Janala/
├── assets/
├── js/
│   ├── displayData.js
│   ├── index.js
│   ├── loadData.js
│   └── textToVoice.js
├── index.html
└── README.md
```
