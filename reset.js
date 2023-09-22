const fs = require('fs');
const path = require('path');

fs.readdirSync('./').forEach(file => {
    const ext = path.extname(file);

    if (['.txt', '.md'].includes(ext)) {
        const parts = file.split('_');
        const filename = parts[parts.length - 1];
        
        // Rename
        fs.renameSync(file, filename);

        // Log it to the console
        console.log(`${file} > ${filename}`);
    } else {
        console.log(`Skipping ${file}`);
    }
});
