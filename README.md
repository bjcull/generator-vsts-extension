# generator-vsts-extension

Yeoman generator for ASP.NET 5 VSTS Extensions

## Getting Started

- Dependencies:
    - node.js: `brew install node` for OSX, `choco install nodejs` for Windows
    - Yeoman: `npm install -g yo`
- Install: `npm install -g generator-vsts-extension`
- Run: `yo vsts-extension`

## Once you've generated the code

- Make sure you've created a publisher account as per: [https://www.visualstudio.com/integrate/extensions/publish/overview](https://www.visualstudio.com/integrate/extensions/publish/overview)
- Open vss-extension.json and fill out with your own information. Most importantly the publisher id.
- Create a personal access token as per [https://www.visualstudio.com/en-us/integrate/extensions/publish/command-line](https://www.visualstudio.com/en-us/integrate/extensions/publish/command-line)
- Run `vset publish -t [token_here]`
- Share your extension with yourself here: [https://app.market.visualstudio.com/manage](https://app.market.visualstudio.com/manage)
- Install your extension as well. (Click the name of the extension once you've shared it above).
- Navigate to a project inside your visualstudio.com account to see the new hub your extension just created!

## More information

This Yeoman generator is based on the excellent [generator-aspnet](https://github.com/OmniSharp/generator-aspnet).

## Powered by SSW
I'm lucky enough to work for SSW, who help and encourage me to develop great community content.
You can find more more tutorials and other excellent tech videos at [SSW TV](http://tv.ssw.com/)
