const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/agar254/wonder-woman',
    tempLocation: '/Users/ss/Desktop/ww2/tmp',
    ignoreFiles: ['util/config.js'],
    executeOnComplete: '/Users/ss/Desktop/ww/s.js',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();
