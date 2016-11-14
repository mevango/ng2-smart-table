"use strict";
var ServerSourceConf = (function () {
    function ServerSourceConf(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.filterFieldKeyLt, filterFieldKeyLt = _j === void 0 ? '' : _j, _k = _b.filterFieldKeyGt, filterFieldKeyGt = _k === void 0 ? '' : _k, _l = _b.totalKey, totalKey = _l === void 0 ? '' : _l, _m = _b.dataKey, dataKey = _m === void 0 ? '' : _m;
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.filterFieldKeyLt = filterFieldKeyLt ? filterFieldKeyLt : ServerSourceConf.FILTER_FIELD_KEY_LT;
        this.filterFieldKeyGt = filterFieldKeyGt ? filterFieldKeyGt : ServerSourceConf.FILTER_FIELD_KEY_GT;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
    ServerSourceConf.SORT_FIELD_KEY = '_sort';
    ServerSourceConf.SORT_DIR_KEY = '_order';
    ServerSourceConf.PAGER_PAGE_KEY = '_page';
    ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
    ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
    ServerSourceConf.FILTER_FIELD_KEY_GT = '#field#_gt';
    ServerSourceConf.FILTER_FIELD_KEY_LT = '#field#_lt';
    ServerSourceConf.TOTAL_KEY = 'x-total-count';
    ServerSourceConf.DATA_KEY = '';
    return ServerSourceConf;
}());
exports.ServerSourceConf = ServerSourceConf;
