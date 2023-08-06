const os = require("os");

// Get the current user's info
const user = os.userInfo()
console.log(user);

// Get the current platform
const platform = os.platform()
console.log(platform);