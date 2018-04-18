import moment from 'moment'

const nowDate = new Date()
/**
 * 封装函数 传参是几天
 * @param {String} type 往后的类型 分 年 月 日 默认日
 * @param {number} number 多少天 默认0
 * @param {String} dateType 日期的格式 默认 MM月DD日
 */
function latertime(type = 'days', number = 0, dateType = 'MM月DD日') {
  return moment().add(type, number).format(dateType)
}
class TimeDay {
  /**
   * 获取当前时间往后n天 格式为几月几号
   * @param {*} n 天数
   */
  laterDay(n) {
    const arrayDay = []
    for(let i = 0; i < n; i++) {
      arrayDay.push(latertime('days', i))
    }
    return arrayDay
  }
  /**
   * 获取当前时间往后n天 格式为几月几号 反序
   * @param {*} n 
   */
  laterDayReverse(n) {
    const arrayDay = []
    for(let i = n; i > 0; i--) {
      arrayDay.push(latertime('days', i))
    }
    return arrayDay
  }
  /**
   * 多少年后
   * @param {*} n 
   */
  laterYear(n) {
    return latertime('year', n, 'YYYY')
  }
}

export default TimeDay
