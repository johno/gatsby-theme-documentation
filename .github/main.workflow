workflow "Publish packages and starters" {
  resolves = [
    "master",
    "yarn:publish:ci",
  ]
  on = "push"
}

action "master" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "push-subdirectories" {
  uses = "johno/actions-push-subdirectories@master"
  needs = ["master"]
  args = "examples johno"
  secrets = [
    "GITHUB_TOKEN",
    "API_TOKEN_GITHUB",
  ]
}

action "yarn:publish:ci" {
  uses = "johno/actions-yarn@master"
  needs = ["push-subdirectories"]
  runs = "publish:ci"
  secrets = ["NPM_AUTH_TOKEN"]
}
