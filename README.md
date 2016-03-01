Designed to be included as a npm dependency which will copy .dot/config files to the project root during npm install.

It wont overwrite existing files, but considering the files are ignored due to the .gitignore file included in this repo, you would need to overwite that file to ensure your changes will be commited

#Installation

Add as dependency to your projects `package.json` file ( `npm install --save okeydoke/dotfiles`)

When `npm install`'ing in your project root the files will be copied over (without overwriting existing files)