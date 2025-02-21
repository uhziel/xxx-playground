window.onresize = function () {
    console.log("=====================================")
    console.log("document.documentElement.clientWidth", document.documentElement.clientWidth);
    console.log("document.documentElement.clientHeight", document.documentElement.clientHeight);
    console.log("window.innerWidth: ", window.innerWidth);
    console.log("window.innerHeight: ", window.innerHeight);
    console.log("window.outerWidth: ", window.outerWidth);
    console.log("window.outerHeight: ", window.outerHeight);
    console.log("others:");
    console.log("screen.width: ", screen.width); //显示器分辨率，单位是硬件设备的分辨率
    console.log("screen.height: ", screen.height);
};

function isClickedRightSide(width, x) {
    console.log("isClickedRightSide x:", x, "width / 3:", width /3);
    return x > width / 3;
}

const container = document.getElementById("container");
container.addEventListener("click", ev => {
    //https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
    // via ms 的这个页面提供了非常好的引用
    console.log("clientX:", ev.clientX, " clientY:", ev.clientY);
    console.log("isClickedRightSide:", isClickedRightSide(window.innerWidth, ev.clientX));
    let offsetY = window.innerHeight * (isClickedRightSide(window.innerWidth, ev.clientX) ? 0.8: -0.8);
    console.log("window.scrollBy(0, %d);", offsetY);
    window.scrollBy(0, offsetY);
});
