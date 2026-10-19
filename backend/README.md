# Yashoda Trust Backend

Node.js / Express API (MongoDB via Mongoose) for admin auth, internships, and donations (Razorpay).

## What was fixed for deployment

- Removed the MongoDB connection string that was hardcoded in `index.js` — it now comes from `MONGO_URI` in `.env`, same as the other secrets.
- Added a `start` script (`node index.js`) and a `build` script — most hosts (Render, Railway, cPanel/Plesk Node apps, PM2, Hostinger) run these automatically. Since this is a backend-only API with no compile step, `npm run build` (`build.js`) just creates placeholder `public/`, `dist/`, and `build/` folders with a static landing page — some hosting panels check for a build "output directory" (a check meant for frontend frameworks) and fail deployment if none exists.
- Added `body-parser` to `package.json` — the code requires it directly but it was missing from `dependencies`.
- Server now binds to `0.0.0.0` and falls back to port `8080` if `PORT` isn't set, so it works behind a host's reverse proxy.
- Removed the stray `index.tar` (a duplicate backup of the project) so it isn't uploaded.

## Deploy

1. Upload everything **except** `node_modules` (there isn't one here — the host will build it).
2. On the server, run:
   ```
   npm install --production
   npm start
   ```
   (Some hosts, like cPanel's "Setup Node.js App" or Render/Railway, run `npm install` and `npm start` automatically once you set the entry point to `index.js` and point Node at this folder.)
3. Make sure the `.env` file is present on the server (upload it, or paste its contents into the host's "Environment Variables" panel — same effect).

## ⚠️ Rotate your secrets before going live

This project's `.env` (and the old hardcoded Mongo URI) contains **live, working credentials**:
MongoDB Atlas password, a live Razorpay key/secret, an email account password, and JWT signing secrets.

Since this zip has now passed through your machine, this chat, and likely earlier through git history / other shares, treat all of these as **no longer private**:

- MongoDB Atlas: change the database user's password (Atlas → Database Access).
- Razorpay: regenerate the live API key/secret (Razorpay dashboard → Settings → API Keys).
- Email: change `support@yashodaect.org`'s password, update `EMAIL_PASS`.
- `JWT_SECRET_KEY` / `TEAM_SECRET_KEY`: replace with new random strings (this invalidates existing admin login tokens, which is fine).

Do this **after** confirming the deploy works, then update `.env` on the server with the new values (and never commit `.env` to a public repo — the `.gitignore` here already excludes `node_modules` but not `.env`; consider adding it).
