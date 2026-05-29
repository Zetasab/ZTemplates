const fs = require('fs');
const path = require('path');

const templatesDir = path.join(process.cwd(), 'public', 'templates');
const outputFile = path.join(process.cwd(), 'public', 'templates.json');

function generateTemplatesJson() {
    if (!fs.existsSync(templatesDir)) {
        fs.mkdirSync(templatesDir, { recursive: true });
    }

    const entries = fs.readdirSync(templatesDir, { withFileTypes: true });
    const templates = entries
        .filter(entry => entry.isDirectory())
        .map(entry => {
            return {
                id: entry.name,
                name: entry.name.replace(/-/g, ' ').toUpperCase(),
                path: `/templates/${entry.name}/`,
                downloadPath: `/templates/${entry.name}`
            };
        });

    fs.writeFileSync(outputFile, JSON.stringify(templates, null, 2));
    console.log(`Generated templates.json with ${templates.length} templates.`);
}

generateTemplatesJson();