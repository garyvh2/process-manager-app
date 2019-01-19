workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for Heroku" {
  uses = "actions/heroku@6db8f1c22ddf6967566b26d07227c10e8e93844b"
  secrets = ["GITHUB_TOKEN"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["GitHub Action for Heroku"]
}
