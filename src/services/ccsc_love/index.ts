/*
 * @Description:
 * @Author: 水印红枫
 * @Editor: 水印红枫
 * @Date: 2021-09-17 16:57:57
 * @LastEditTime: 2021-09-17 17:05:04
 * @LastEditors: 水印红枫
 */
import { request } from 'umi';
/** 获取支付数据 POST /donation/H5/payRecord/getAllPayRecordList */
export async function getAllPayRecordList(options: API.getAllPayRecordListDataType) {
  return request<API.RuleListItem>('/donation/H5/payRecord/getAllPayRecordList', {
    method: 'POST',
    ...(options || {}),
  });
}
