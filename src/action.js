const core = require('@actions/core');
const github = require('@actions/github');

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

const octokit = github.getOctokit(GITHUB_TOKEN);

const { context = {} } = github;
const { pull_request } = context.payload;

(async () => { 
  await octokit.issues.createComment({
  owner: 'kyagi',
  repo: 'awesome-project',
  issue_number: pull_request.number,
  body: 'Thank you for submitting a pull request! We will try to review this as soon as we can.'
});})()
