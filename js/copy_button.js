// Standard "copy" SVG icon (two overlapping rectangles), used by GitHub, VS Code, etc.
var COPY_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
  + '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>'
  + '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>'
  + '</svg>';

var CHECK_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'
  + '<polyline points="20 6 9 17 4 12"></polyline>'
  + '</svg>';

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre").forEach(function (pre) {
    var wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";
    pre.parentNode.insertBefore(wrapper, pre);

    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.innerHTML = COPY_ICON;
    btn.setAttribute("title", "Copy");
    btn.setAttribute("aria-label", "Copy");

    wrapper.appendChild(pre);
    wrapper.appendChild(btn);

    btn.addEventListener("click", function () {
      var code = pre.querySelector("code")
        ? pre.querySelector("code").innerText
        : pre.innerText;
      navigator.clipboard.writeText(code).then(function () {
        btn.innerHTML = CHECK_ICON;
        btn.classList.add("copied");
        setTimeout(function () {
          btn.innerHTML = COPY_ICON;
          btn.classList.remove("copied");
        }, 2000);
      });
    });
  });
});