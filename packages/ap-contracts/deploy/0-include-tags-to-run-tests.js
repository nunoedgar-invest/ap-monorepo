// does nothing except for tags (and dependencies) declaration
module.exports = async () => await Promise.resolve();
module.exports.tags = ["u-tests", "e2e-tests"]
module.exports.dependencies = ["_env", "_env-tests", "_package", "_deployment", "_init", "_init-tests"];
