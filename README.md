# Saakuru Gainz Bot

Saakuru Gainz Bot is a script designed to interact with the Saakuru Gainz platform, allowing users to check their profiles and claim tasks automatically.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dante4rt/saakuru-gainz-bot.git
```

2. Install dependencies:

```bash
cd saakuru-gainz-bot
npm install
```

3. Create `accounts.json` file and add your authentication tokens:

```json
[
  "Bearer xxxxxxxx",
  "Bearer yyyyyyyy"
]
```

Replace `"bearer xxxxxxxx"`, `"bearer yyyyyyyy"` etc. with your actual authentication tokens.
every auth Bearer, don't forget to remove the comma (,) at the end of the json

## Obtaining Access Token

1. Ensure you are logged into your Saakuru Gainz account.

2. Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").

3. Navigate to the "Network" tab in the developer tools.

4. Refresh the page to capture the network requests.

5. Look for a request named something like "authorize" or "login" in the list of network requests.

6. In the headers of that request, you should find a header named "Authorization" with a value starting with "Bearer". Copy this entire value as your access token.

## Usage

1. Run the script:

```bash
npm start
```

2. Follow the prompts to choose whether to check your profile or claim tasks.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
