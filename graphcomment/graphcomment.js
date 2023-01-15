// GraphComment-plugin for TNG.
// Made by Trembline - January 2023.
// https://github.com/stian-git/tng-mod-graphcomment

// Variables:
const fileName = document.location.pathname.split("/").pop();
let commentBoxId;

//Retrieving params (used to create commentBoxId)
const params = new URLSearchParams(document.location.search);


// Identifies the filename, checks if the mod-setting for commenting the page is enabled, 
// and sets the unique commentBoxId if enabled.
switch (fileName) {
    case "getperson.php":
        if (doCommentPerson) {
            commentBoxId = params.get("tree") + "-" + params.get("personID");     
        }
        break;
    case "showmedia.php":
        if (doCommentMedia) {
            commentBoxId = "mediaID-" + params.get("mediaID");
        }
        break;
}


// Only shows the commentbox if a commentBoxId is present.
if (commentBoxId) {
    // Inserting graphComment code 
    // To modify below, please refer to documentation at https://graphcomment.com/ ):
    var __semio__params = {
        graphcommentId: graphCommentSiteId,
        behaviour: {
        uid: commentBoxId
        },
      }
    function __semio__onload() {
        __semio__gc_sidePanel_graphlogin(__semio__params)
    }
    (function() {
        var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
        gc.onload = __semio__onload; gc.defer = true; gc.src = 'https://integration.graphcomment.com/gc_sidePanel_graphlogin.js?' + Date.now();
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
    })();
} 