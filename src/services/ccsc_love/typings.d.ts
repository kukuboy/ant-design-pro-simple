/*
 * @Description:
 * @Author: 水印红枫
 * @Editor: 水印红枫
 * @Date: 2021-09-17 17:00:40
 * @LastEditTime: 2021-09-17 17:01:50
 * @LastEditors: 水印红枫
 */
declare namespace API {
  type getAllPayRecordListDataType = {
    pageNum: number;
    pageSize: number;
    subject: string;
    transactionId: number;
    payType: string;
    startTime: string;
    endTime: string;
  };
}
