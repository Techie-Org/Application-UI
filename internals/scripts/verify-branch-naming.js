const shelljs = require('shelljs');

const validator = /^(feature|bugfix|epic)\/[a-z0-9._-]+$/;

const branch = shelljs.exec('git rev-parse --abbrev-ref HEAD',{ silent: true}).stdout.trim();
const isValid = validator.test(branch);

console.log('Validating current branch name:', branch);

if (!isValid) {
    const error = 'Branch names shoud start with feature/ bugfix/ or epic/ be lower case and can contain number or ._-';
    console.log('\n>\n>');
    console.log(`> ${error}`);
    console.log('>\n>\n>\n');
    throw error;
}