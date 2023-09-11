const core = require("@actions/core");
const exec = require("@actions/exec");
// const github = require("@actions/github"); // gives oktokit client

function run() {
  // 1. get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2. upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice("hello from my custom JS action");
}

run();
