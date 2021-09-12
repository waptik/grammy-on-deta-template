# Grammy Bot on Deta.sh Template

This is a template to deploy a telegram bot using [grammY](https://grammy.dev) and deploy it on [Deta](https://deta.sh) using typescript

## How to use

Click the `Use this template` button to have your copy, clone the newly generated repo locally and do your changes as you see fit.

## Configuration

### Step 1. Create a Deta Account and Install Deta cli locally

- Create an account on [Deta](https://www.deta.sh/?ref=waptik).
- Install [Deta CLI](https://docs.deta.sh/docs/cli/install?ref=waptik) and the instructions found there.

### Step 2. Get your Telegram bot token and your user ID

- Create a telegram account if you don't have one. Then start a conversation with [@BotFather](https://t.me/@BotFather) and send the /newbot command. Save the token you receive somewhere safe, we'll use it later.

- To get your user ID, talk to [@GrammyOnDetaBot](https://t.me/GrammyOnDetaBot) and send the /me command. Save your user id somewhere for later.

### Step 3. Setting Up Environment Variables

Copy the `.env.example` file from this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `BOT_TOKEN` should be the bot token that you saved from step 2(required).

The resulting `.env` file should look like this:

```bash
BOT_TOKEN=...
```

- `ADMIN` should be the the user ID that you saved from step 2(not required).

The resulting `.env` file should look like this:

```bash
BOT_TOKEN=...
ADMIN=...
```

### Step 4. Run grammY in development mode

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Your bot should be up and running on [http://localhost:8080](http://localhost:8080)! If it doesn't work, post on [GitHub discussions](https://github.com/waptik/grammy-on-deta-template/discussions).

### Create a Deta.sh micros

As of now, you have yet to link your local to a micros on Deta cloud:

```bash
npm run build
deta new -n
#or
yarn build
deta new -n
```

#### Deploy Your Local Project

To deploy your local project to Deta, simply run the deploy command:

```sh
npm run deploy
#or
yarn deploy
```

This will do 3 things for you:

1. Clean your root folder of any build outputs
2. Push your environment variables to Deta
3. Deploy your app on Deta
4. Clean your root folder of any build outputs again

That's all!!!
