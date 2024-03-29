/**
 * Created by zzm  on 2019/7/1.
 */
// 重新加载页面时
$(function() {
    matchUrl();
    changeHeader();
    toTopDisplay();
    subMenuLocation();
    setGuideStyle();
});

/*回到顶部*/
$(window).scroll(function() {
    toTopDisplay();
    changeHeader();
    subMenuLocation();
});
$(".js-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600); /* 持续时间为 600ms */
    return false;
});

// 回到顶部的显示或隐藏
function toTopDisplay() {
    if ($(window).scrollTop() >= 200) {
        $(".js-to-top").fadeIn(); /* 当滑动到不小于 200px 时，回到顶部图标显示 */
    } else {
        $(".js-to-top").fadeOut(); /* 当滑动到小于(页面被卷去的高度)200px 时，回到顶部图标隐藏 */
    }
}

// 二级菜单的定位
function subMenuLocation() {
    if ($(window).scrollTop() >= 240) { // 240px 是内页banner部分的高度
        $(".js-tab").addClass("tab-fixed");
        $(".tab-nav").addClass("tab-fixed");
    } else {
        $(".js-tab").removeClass("tab-fixed");
        $(".tab-nav").removeClass("tab-fixed");
    }
}

// 改变头部样式
function changeHeader() {
    // 头部
    if ($(window).scrollTop() > 0) {
        $(".js-heading-wrapper").addClass("scroll");
    } else {
        $(".js-heading-wrapper").removeClass("scroll");
    }
}

// 微信二维码的显示与影藏
$(".js-wechat-icon").hover(
    function() {
        $(".js-qrcode").slideDown(400);
    },
    function() {
        $(".js-qrcode").slideUp(400);
    }
);
$(".js-tab").find("a").click(function() {
    $(this).addClass("active");
    $(this).siblings("a").removeClass("active");
});
$(".tab-nav").find("a").click(function() {
    $(this).addClass("active");
    $(this).siblings("a").removeClass("active");
    var linkIndex = $(this).index();
    var $content = $(this).parents(".tab-nav").siblings(".tab-content");
    $($content[linkIndex]).addClass("active");
    $($content[linkIndex]).siblings(".tab-content").removeClass("active");
});

// 当前页面地址与路由匹配情况
function matchUrl() {
    var link = $(".js-tab").find("a");
    var locationUrl = location.href;
    for (var i = 0, len = link.length; i < len; i++) {
        if (locationUrl.indexOf($(link[i]).attr("href")) !== -1) {
            $(link[i]).addClass("active");
            $(link[i]).siblings("a").removeClass("active");
        }
    }
}

/*设置加盟条件部分样式*/
function setGuideStyle() {
    var $li = $("#requirementInvestmentGuide").find("li");
    for (var i = 0; i < $li.length; i++) {
        var imgHeight = $li.eq(i).find("img").height();
        var textHeight = $li.eq(i).find(".text").height();
        $li.eq(i).height(imgHeight <= textHeight ? (textHeight + 40) : (imgHeight + 40));
    }
}