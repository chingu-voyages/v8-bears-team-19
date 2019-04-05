const { spawn } = require('child_process');
let currentProcess = 0;
let initialBranch = null;
const getBranchesProcess = spawn('git', ['branch']);
getBranchesProcess.stdout.setEncoding('utf8');
const getInitialBranch = async () => await new Promise((resolve, reject) => {
  getBranchesProcess.stdout.on('data', (branches) => {
    branches = branches.split("\n");
    if (!branches.some(branch => {
      // we find the current branch
      if (branch.slice(0, 2) === "* ") {
        resolve(branch.slice(2));
        return true;
      }
      return false;
    })) {
      reject();
    }
  });
});

const PROCESS_LIST = [
  // Build
  ['node', ['scripts/build.js']],
  // Create TempHerokuDeploy branch and checkout
  ['git', ['checkout', '-b', 'TempHeroku']],
  ['git', ['add', 'src/backend/*']],
  // // Commit backend folder changes to the new folder
  ['git', ['commit', '-m', "\"Deployment\""]],
  // Push branch to heroku master git  push --prefix src/backend heroku master
  ['git', ['subtree', 'split', '--prefix', 'src/backend', '-b', 'TempHerokuDeploy']],
  ['git', ['push', '-f', 'heroku', 'TempHerokuDeploy:master']],
  (branch) => ['git', ['checkout', branch]],
  ['git', ['branch', '-D', 'TempHerokuDeploy']],
  ['git', ['branch', '-D', 'TempHeroku']]
];
const PROCESS_NAMES = [
  'build',
  'new TempHeroku branch',
  'add changes',
  'commit changes',
  'create branch TempHerokuDeploy with subtree',
  'push to heroku',
  'checkout to initial branch',
  'delete TempHerokuDeploy branch',
  'delete TempHeroku branch'
];

const launchProcess = (process_, displayName) => {
  const process = spawn(process_[0], process_[1]);
  const firstCapitalName = displayName[0].toUpperCase() + displayName.slice(1);

  process.stdout.setEncoding('utf8');
  process.stdout.on('data', (chunk) => {
    console.log(chunk);
  });

  return new Promise((resolve, reject) => {
    process.on('close', (code) => {
      console.log(`${firstCapitalName} process exited with code ${code}`);
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  
    process.on('error', (err) => {
      console.log(`Error in ${displayName} process: ${err}`);
      reject();
    });
  });
};

console.log("The deploying script will:");
console.log("- Build the frontend in src/backend/build");
console.log("- Commit the backend folder in a new branch called \"TempHerokuDeploy\"");
console.log("- Push the branch to Heroku");
console.log("- Checkout to your initial branch");
console.log("- And delete the \"TempHerokuDeploy\" branch");

const startDeployment = async () => {
  let error = null;
  try {
    initialBranch = await getInitialBranch();
  } catch (err) {
    console.error("Can't get current git branch, ", err);
    return;
  }

  while (currentProcess < PROCESS_LIST.length) {
    try {
      console.log("");
      console.log(`Starting ${PROCESS_NAMES[currentProcess]}...`);
      console.log("");
      if (typeof(PROCESS_LIST[currentProcess]) === "function") {
        await launchProcess(PROCESS_LIST[currentProcess](initialBranch), PROCESS_NAMES[currentProcess]);
      } else {
        await launchProcess(PROCESS_LIST[currentProcess], PROCESS_NAMES[currentProcess]);
      }
      currentProcess++;
    } catch (err) {
      error = err;
      break;
    }
  }

  if (!error) {
    console.log("Deployment succesful!");
  } else {
    console.error("Deployment failed: ", error);
  }
};

startDeployment();

/*
npm run build
git add src/backend
git commit -m ""
git subtree push --prefix src/backend heroku master
*/