this.isDesktop = function () {
    if ($("#gt-is-1231").is(":visible")) {
        return true;
    }
    return false;
}

this.isTablet = function () {
    if ($("#gt-is-1024").is(":visible")) {
        return true;
    }
    return false;
}

this.isMobile = function () {
    if ($("#gt-is-768").is(":visible")) {
        return true;
    }
    return false;
}

this.isSmallScreen = function () {
    if ($("#gt-is-667").is(":visible")) {
        return true;
    }
    return false;
}

this.isTinyScreen = function () {
    if ($("#gt-is-360").is(":visible")) {
        return true;
    }
    return false;
}