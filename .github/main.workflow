workflow "Publish starter" {
  on = "push"
  resolves = ["push-subdirectories"]
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
