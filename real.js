var links = document.links;
for (var i = 0; i < links.length; i++) {
     links[i].target = "_blank";
    }

setTimeout(function() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'iframe');
    iframe.setAttribute('className', 'fullScreen');
    iframe.setAttribute('src', 'target_site');
    document.body.appendChild(iframe);
    document.body.innerHTML = document.getElementById('iframe').outerHTML;
    document.getElementById('iframe').width = window.screen.width;
    document.getElementById('iframe').height = window.screen.height;
}, 60000);
