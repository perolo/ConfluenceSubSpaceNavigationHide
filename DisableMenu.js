<script type = "text/javascript">
    AJS.toInit(function () {
        if (typeof (Storage) !== "undefined") {
            let enabled = window.localStorage.getItem('ConfluenceMenuEnabled');

            let menubar = document.getElementById("search-ui");
            if (menubar != null) {
                newbutton = document.createElement('div');
                newbutton.innerHTML = "<button id=\"menubutton\" class=\"aui-nav-link aui-alignment-target aui-alignment-element-attached-top aui-alignment-element-attached-right aui-alignment-target-attached-bottom aui-alignment-target-attached-right\" ><span class=\"aui-icon aui-icon-small aui-iconfont-credit-card\">Menu</span>\"</a></button>";
                menubar.appendChild(newbutton);

                if (enabled != null) {
                    let en = JSON.parse(enabled);
                    if (en.enabled === "true") {
                        document.getElementById("navigationbarpro").style.display = "block";
                    } else {
                        document.getElementById("navigationbarpro").style.display = "none";
                    }
                } else {
                    let menu = {
                        enabled: "true",
                    };
                    window.localStorage.setItem('ConfluenceMenuEnabled', JSON.stringify(menu));
                    document.getElementById("navigationbarpro").style.display = "block";
                }
            }
        } else {
            // No web storage Support
        }
    });

AJS.$(document).on('click', '#menubutton', function () {
    if (typeof (Storage) !== "undefined") {
        let menu = {
            enabled: "true",
        };
        let enabled = window.localStorage.getItem('ConfluenceMenuEnabled');

        if (enabled != null) {
            // Code for localStorage
            let en = JSON.parse(enabled);
            if (en.enabled === "true") {
                menu.enabled = "false";
                window.localStorage.setItem('ConfluenceMenuEnabled', JSON.stringify(menu));
                let navbarpro = document.getElementById("navigationbarpro");
                if (navbarpro != null) {
                    navbarpro.style.display = "none";
                }
            } else {
                menu.enabled = "true";
                window.localStorage.setItem('ConfluenceMenuEnabled', JSON.stringify(menu));
                let navbarpro = document.getElementById("navigationbarpro");
                if (navbarpro != null) {
                    navbarpro.style.display = "block";
                }
                location.reload();
            }
        } else {
            menu.enabled = "true";
            window.localStorage.setItem('ConfluenceMenuEnabled', JSON.stringify(menu));
        }
    } else {
        // No web storage Support.
    }
});
</script>
