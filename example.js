const fs = require('fs');
const path = require('path');

const currentDir = __dirname;

const parentDir = path.basename(path.dirname(currentDir));
const grandparentDir = path.basename(path.dirname(path.dirname(currentDir)));

fs.readdirSync('./').forEach(file => {
    // Create the new file name
    const new_file_name = `${grandparentDir}_${parentDir}_${file}`;
    
    const ext = path.extname(file);

    if (['.txt', '.md'].includes(ext)) {
        // Rename
        fs.renameSync(file, new_file_name);

        // Log it to the console
        console.log(`${file} > ${new_file_name}`);
    } else {
        console.log(`Skipping ${file}`);
    }
});
