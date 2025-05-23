const routeHome = document.getElementById("route-home");
if (routeHome) {
  routeHome.addEventListener("click", function () {
    window.location.href = "./index.html";
  });
}

const discoverButton = document.getElementById("discover-btn");
if (discoverButton) {
  discoverButton.addEventListener("click", function () {
    window.location.href = "./blog.html";
  });
}
