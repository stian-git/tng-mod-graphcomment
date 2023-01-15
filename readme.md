# GraphComment plugin for TNG
A commenting plugin for The Next Generation (TNG) of Geneaology Site Building
https://www.tngsitebuilding.com/

## Features:

-   Enable commenting on people and/or media.
-   Login using Facebook, Google, Twitter or GraphComment. (not single-signon with TNG!)
-   Unique comment-thread for each page.
-   Supports the free plan of GraphComment.
-   Supports migration of your TNG to new locations as long as you keep the same ids of people and media.

## Description:
This is a plugin to enable individual commenting of people and/or media.
This is not a single-signon with TNG, but it enables none-TNG users to use their excisting social media accounts for commenting instead of registering for TNG, which hopefully lowers the bar to comment on the page. 

This mod uses the mediaID-parameter for media, and both personID- and tree-parameters for persons, to identify the unique comment threads.

You can administrate all comments and threads from the Graphcomment admin area.


## Installation:

- Sign up for an account at https://graphcomment.com/
- Add a new site in the admin area. Remember the "Unique ID" of your choice, this is needed in the config.
- Place the .cfg and the graphcomment folder inside the Mods-folder.
- Install the mod from the TNG Mod Manager.
- Insert your "Unique ID" in the mod settings, and also verify what to comment. (true/false)
- Navigate to either a showmedia.php or getperson.php-page, and see the comment plugin.


## Known issues:
- Browser console may show some GraphComment API-errors. These seem to be unimportant and happens on pages without TNG too. Most annoying message have been reported to Graphcomment. Commenting works even when these errors occurs.

- Link directly from the GraphComment Admin page to the person or media containing the comment do not work, but you should be able to identify the thread.  
