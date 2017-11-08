var WIWO = document.querySelector('#status > form > textarea') || document.querySelector('#status-readonly > div > p');
WIWO = WIWO.value || WIWO.innerHTML;
if (WIWO.indexOf("|") > -1) {
    WIWO = WIWO.split("|").filter(function(n) {
        return n != ""
    }).pop();
    if (document.querySelector('#status-readonly > div > p')) {
        document.querySelector('#status-readonly > div > p').innerHTML = document.querySelector('#status-readonly > div > p').innerHTML.replace("|" + WIWO + "|", "")
    }
} else {
    WIWO = "https://scratchyone.github.io/BetterProfilePages/usernames.json"
}
fetch(WIWO)
    .then(function(response) {
        response.text().then(function(text) {
            usernames = JSON.parse(text);
            if(WIWO=="https://scratchyone.github.io/BetterProfilePages/usernames.json") {
            window.eval(usernames[location.pathname.split("/").filter(function(n) {
                return n != ""
            })[1]]["js"]);
          }
            var styleEl = document.createElement('style'),
                styleSheet;
            document.head.appendChild(styleEl);
            styleSheet = styleEl.sheet;
            styleSheet.insertRule(usernames[location.pathname.split("/").filter(function(n) {
                return n != ""
            })[1]]["css"].toString(), 0);
        });
    });
