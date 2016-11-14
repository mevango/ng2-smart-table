export class ServerSourceConf {

  protected static readonly SORT_FIELD_KEY = '_sort';
  protected static readonly SORT_DIR_KEY = '_order';
  protected static readonly PAGER_PAGE_KEY = '_page';
  protected static readonly PAGER_LIMIT_KEY = '_limit';
  protected static readonly FILTER_FIELD_KEY = '#field#_like';
  protected static readonly FILTER_FIELD_KEY_GT = '#field#_gt';
  protected static readonly FILTER_FIELD_KEY_LT = '#field#_lt';
  protected static readonly TOTAL_KEY = 'x-total-count';
  protected static readonly DATA_KEY = '';

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
  withCredentials:boolean;

  constructor(
    {endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', filterFieldKeyLt = '', filterFieldKeyGt = '', totalKey = '', dataKey = '', withCredentials = false} = {}) {

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
    this.withCredentials = withCredentials ? withCredentials : false;
  }
}