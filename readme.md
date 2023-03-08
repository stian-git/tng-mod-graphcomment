# GraphComment Plugin for TNG

![image](https://tekniskpotet.no/img/tng-comment-screenshot.jpg)

# Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Description

This is a plugin for TNG to enable individual commenting of people and/or media. It enables none-TNG users to use their excisting social media accounts (FaceBook/Google/Twitter) for commenting instead of registering for the local TNG installation, which hopefully lowers the bar for visitors to comment on the page.

This mod uses the mediaID-parameter for media, and both personID- and tree-parameters for persons, to identify the unique comment threads.

You can administrate all comments and threads from the Graphcomment admin area.

TNG is a powerful way to manage and display your family tree on your own website. (Quote: [https://www.tngsitebuilding.com/](https://www.tngsitebuilding.com/) )

This plugin modifies the PHP in the backend and injects a Javascript-file that handles the comment-feature.

Without this plugin visitors would have to register as a local TNG-user and write to the administrator only, which only the most interested people would concider to do.

Here are some of the features for this project:

- Enable commenting on people and/or media.
- Login using Facebook, Google, Twitter or GraphComment. (not single-signon with TNG!)
- Unique comment-thread for each page.
- Supports the free plan of GraphComment.
- Supports migration of your TNG to new locations as long as you keep the same ids of people and media.

## Built With

This project is an integration between the following web services:

- [TNG](https://www.tngsitebuilding.com/)
- [GraphComment](https://graphcomment.com)

## Getting Started

### Installing

1. Download the files in this repo.
2. Sign up for an account at https://graphcomment.com/
3. Add a new site in the GraphComment admin area. Remember the "Unique ID" of your choice, this is needed in the config.
4. Place the .cfg and the graphcomment folder inside the Mods-folder.
5. Install the mod from the TNG Mod Manager.
6. Insert your "Unique ID" in the mod settings, and also verify what to comment. (true/false)
7. Navigate to either a showmedia.php or getperson.php-page on your TNG site, and see the comment plugin be revealed.

### Known issues

- Browser console may show some GraphComment API-errors. These seem to be unimportant and happens on pages without TNG too. Most annoying message have been reported to Graphcomment. Commenting works even when these errors occurs.

- Link directly from the GraphComment Admin page to the person or media containing the comment do not work, but you should be able to identify the thread.

## Contributing

This is a hobby project. I will mainly update it when I need to.
Feel free to report issues and/or make pull requests if you want to get involved.
I can also be reached through the contact information below.

## License

MIT License

Copyright (c) [2023] [Stian Martinsen-Stormyr]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

The best way to reach me would be through the following sites:

[My Portfolio](https://tekniskpotet.no)

[My LinkedIn page](https://www.linkedin.com/in/stian-martinsen-stormyr-1662a515/)
