workflow "Publish packages and starters" {
  resolves = [
    "yarn:publish:ci",
    "site:alias",
  ]
  on = "push"
}

action "master" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "starters:publish" {
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
  args = "publish:ci"
  secrets = ["NPM_AUTH_TOKEN"]
  needs = ["starters:publish"]
}

action "site:publish" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  needs = ["master"]
  secrets = ["ZEIT_TOKEN"]
  args = "--public --no-clipboard > $HOME/ZEIT.txt"
}

action "site:alias" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  args = "alias"
  secrets = ["ZEIT_TOKEN"]
  needs = ["site:publish"]
}
