import moment from 'moment'

const nowDate = new Date()
// 封装函数 传参是几天
function laterDay(number) {
  return moment().add('days', number).format('MM日DD日')
}
class TimeDay {
  // 获取当前时间往后七天 格式为几月几号
  laterSenvenDay() {
    const arrayDay = []
    for(let i = 0; i < 7; i++) {
      arrayDay.push(laterDay(i))
    }
    return arrayDay
  }
}

export default TimeDay
