// This is a backend-only Express API — there's nothing to compile.
// Some hosting panels (Hostinger's Node.js app deploy included) check for a
// build "output directory" after running `npm run build`, a check meant for
// frontend frameworks (React, Vite, etc). This script satisfies that check
// by creating a small placeholder page in the common output directory names,
// so the deploy proceeds to `npm start`, which is what actually runs the API.

const fs = require('fs');
const path = require('path');

const placeholderHtml = `<!DOCTYPE html>
<html>
  <head><title>Yashoda Trust API</title></head>
  <body>
    <h1>Yashoda Trust backend</h1>
    <p>This is an API server, not a static site. See index.js / npm start.</p>
  </body>
</html>
`;

const outputDirs = ['public', 'dist', 'build'];

for (const dir of outputDirs) {
  const dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), placeholderHtml);
}

console.log(`Created placeholder output directories: ${outputDirs.join(', ')}`);
