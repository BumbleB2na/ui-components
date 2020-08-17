const fs = require('fs'); // Or `import fs from "fs";` with ESM
const { argv } = require('yargs');
const path = argv.path;
const { exec } = require('child_process');

if (fs.existsSync(path)) {
  const { exec } = require('child_process');
  const script = `../../../node_modules/.bin/npm-deploy-git-tag --token ${process.env.NPM_TOKEN} --access public --tag next`;
  console.log(script);
  exec(script, { cwd: path }, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  return;
}

console.log(`${path} not executed`);
