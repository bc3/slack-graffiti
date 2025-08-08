# slack-graffiti

A simple Node.js/Express app that provides a Slack command to generate ASCII graffiti art using the `figlet` library.

## Features
- Slack slash command endpoint (`/slack/graffiti`)
- Converts user input into ASCII art using figlet
- Responds publicly in the Slack channel
- Uses a random font for each request, or a specified font if provided
- Each line of ASCII art is colored randomly (if your terminal supports colors)

## Requirements
- Node.js (v18+ recommended)
- npm
- A Slack workspace (for integration)

## Installation

```bash
git clone https://github.com/yourusername/slack-graffiti.git
cd slack-graffiti
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Start (Production)

```bash
npm start
```

## Usage

1. Deploy the app to a server accessible by Slack.
2. Create a Slack slash command (e.g., `/graffiti`) pointing to `https://your-server/slack/graffiti`.
3. In Slack, type:

```
/graffiti hello
```

Or specify a font:

```
/graffiti hello --font=Block
```

The bot will respond with ASCII art for the word `hello` using the specified font, or a random font if not specified.

## Example Response

```
Graffiti for *hello* (font: Block):

 _          _ _        
| |        | | |       
| |__   ___| | | ___   
| '_ \ / _ \ | |/ _ \  
| | | |  __/ | | (_) | 
|_| |_|\___|_|_|\___/  
```

## Environment Variables
- `PORT` (optional): Port to run the server (default: 3000)

## Testing with curl

You can test the endpoint locally using the following curl command:

```bash
curl -X POST http://localhost:3000/slack/graffiti \
  -H "Content-Type: application/json" \
  -d '{"text": "hello"}'
```

Or specify a font:

```bash
curl -X POST http://localhost:3000/slack/graffiti \
  -H "Content-Type: application/json" \
  -d '{"text": "hello", "font": "Block"}'
```

This will return the ASCII art for the word `hello`, with each line colored randomly (if your terminal supports colors).

## License
ISC