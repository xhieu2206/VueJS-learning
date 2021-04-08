import Vue from 'vue';
import { DAYS, MONTHS } from '../constants/TimeConstant';

const orderGenerator = (order) => {
  switch (order) {
    case 1:
      return `${order}st`;
    case 2:
      return `${order}nd`;
    case 3:
      return `${order}rd`;
    default:
      return `${order}th`;
  }
}

Vue.filter('dateTransform', milliseconds => {
  const date = new Date(milliseconds);
  return `${DAYS[date.getDay()]}, ${orderGenerator(date.getDate())} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
});
