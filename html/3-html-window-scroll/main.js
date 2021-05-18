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
