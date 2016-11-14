export declare class ServerSourceConf {
    protected static readonly SORT_FIELD_KEY: string;
    protected static readonly SORT_DIR_KEY: string;
    protected static readonly PAGER_PAGE_KEY: string;
    protected static readonly PAGER_LIMIT_KEY: string;
    protected static readonly FILTER_FIELD_KEY: string;
    protected static readonly FILTER_FIELD_KEY_GT: string;
    protected static readonly FILTER_FIELD_KEY_LT: string;
    protected static readonly TOTAL_KEY: string;
    protected static readonly DATA_KEY: string;
    endPoint: string;
    sortFieldKey: string;
    sortDirKey: string;
    pagerPageKey: string;
    pagerLimitKey: string;
    filterFieldKey: string;
    filterFieldKeyLt: string;
    filterFieldKeyGt: string;
    totalKey: string;
    dataKey: string;
    withCredentials: boolean;
    constructor({endPoint, sortFieldKey, sortDirKey, pagerPageKey, pagerLimitKey, filterFieldKey, filterFieldKeyLt, filterFieldKeyGt, totalKey, dataKey, withCredentials}?: {
        endPoint?: string;
        sortFieldKey?: string;
        sortDirKey?: string;
        pagerPageKey?: string;
        pagerLimitKey?: string;
        filterFieldKey?: string;
        filterFieldKeyLt?: string;
        filterFieldKeyGt?: string;
        totalKey?: string;
        dataKey?: string;
        withCredentials?: boolean;
    });
}
