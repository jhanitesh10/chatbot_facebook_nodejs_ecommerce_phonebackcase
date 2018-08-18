let moment = require('moment');

let Promise = require('bluebird');


let jsonString = (objectValue) => {
  return JSON.stringify(objectValue);
}

let jsonParse = (stringValue) => {
    return JSON.parse(stringValue);
}

let dateTimeToUnix = (dateTime) => {
  return moment(dateTime).unix();
}

let dateTimeToStandard = (dateTime) => {
  return moment(dateTime).format('YYYY-MM-DD HH:MM:SS');
}

let currentDateTimeUnix = () => {
  return moment().unix();
}

let currentDateTimeStatndard = () => {
  return moment().format('yyyy-mm-dd HH:MM:SS');
}


let checkDateTimeValue = ({dateTime}) => {
  if(dateTime){
    return dateTimeToUnix(`${dateTime}`);
  }else{
    return null;
  }
}


let checkArrayCommonValue = ({newArray, previousArray}) => {
  let completeArray = newArray.concat(previousArray);

  return completeArray.filter( (data, index, arr) => {
    return arr.indexOf(data) !== arr.lastIndexOf(data);
  });


}


let checkArrayUnCommonValue = ({newArray, previousArray}) => {
  let completeArray = newArray.concat(previousArray);

  return completeArray.filter( (data, index, arr) => {
    return arr.indexOf(data) === arr.lastIndexOf(data);
  });


}

let checkMissingArrayValue = ({newArray, previousArray}) => {
  return previousArray.filter( (previousArrayData) => {
    return !newArray.includes(previousArrayData);
  })
}

let discount = ({ price, discount, shippingCost }) => {

  let percentage = (price * discount) / 100;
  let total = price - percentage+shippingCost;
  console.log(total);
  return Promise.resolve(total);
}

let calculateDiscount = ({ price, discount }) => {
  let percentage = (price * discount) / 100;
  return Promise.resolve(percentage);
}
module.exports = {

  jsonString : jsonString,
  jsonParse : jsonParse,
  dateTimeToUnix : dateTimeToUnix,
  dateTimeToStandard : dateTimeToStandard,
  checkDateTimeValue : checkDateTimeValue,
  currentDateTimeUnix : currentDateTimeUnix,
  currentDateTimeStatndard : currentDateTimeStatndard,
  checkArrayCommonValue : checkArrayCommonValue,
  checkArrayUnCommonValue : checkArrayUnCommonValue,
  checkMissingArrayValue : checkMissingArrayValue,
  discount: discount,
  calculateDiscount: calculateDiscount

}
