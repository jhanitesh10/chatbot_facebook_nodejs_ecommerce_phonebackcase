let Promise = require('bluebird'),
    request = Promise.promisify(require('request')),
    rq = Promise.promisifyAll(request);

let confidential = require('../confidential/data'),
    accessToken = confidential.accessToken;


let arq_typingOn = ( {senderId}) => {
  let request_body = {
    "recipient": {
      "id": senderId
    },
    "sender_action":"typing_on"
  }

  return rq({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": {
      "access_token": accessToken
    },
    "method": "POST",
    "json": request_body

  }).then( (response) => {
    let typingOnData = JSON.parse(JSON.stringify(response));
    // console.log({ statusCode: typingOnData.statusCode, body: typingOnData.body, headers: typingOnData.headers });
    return { statusCode: typingOnData.statusCode, body: typingOnData.body, headers: typingOnData.headers };

  }).catch( (ere) => {
    return {statusCode: err.statusCode, body: err.body, headers: err.headers};
  });
}


let arq_typingOff = ( {senderId}) => {
  let request_body = {
    "recipient": {
      "id": senderId
    },
    "sender_action":"typing_off"
  }

  return rq({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": {
      "access_token": accessToken
    },
    "method": "POST",
    "json": request_body

  }).then( (response) => {
    let typingOff = JSON.parse(JSON.stringify(response));
    // console.log({ statusCode: typingOnData.statusCode, body: typingOnData.body, headers: typingOnData.headers });
    return { statusCode: typingOff.statusCode, body: typingOff.body, headers: typingOff.headers };

  }).catch( (ere) => {
    return {statusCode: err.statusCode, body: err.body, headers: err.headers};
  });
}



let arq_markSeen = ( {senderId}) => {
  let request_body = {
    "recipient": {
      "id": senderId
    },
    "sender_action":"mark_seen"
  }

  return rq({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": {
      "access_token": accessToken
    },
    "method": "POST",
    "json": request_body

  }).then( (response) => {
    let markSeenData = JSON.parse(JSON.stringify(response));
    // console.log({ statusCode: markSeenData.statusCode, body: markSeenData.body, headers: markSeenData.headers });
    return { statusCode: markSeenData.statusCode, body: markSeenData.body, headers: markSeenData.headers };

  }).catch( (err) => {
    return {statusCode: err.statusCode, body: err.body, headers: err.headers};
  });
}


let arq_sendMessage = ( {senderId, response}) => {

  let request_body = {
    "recipient": {
      "id": senderId
    },
    "message": response
  }

  return rq({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": {
      "access_token": accessToken
    },
    "method": "POST",
    "json": request_body

  }).then( (response) => {
    var sendMessageData = JSON.parse(JSON.stringify(response));
    // console.log({ statusCode: sendMessageData.statusCode, body: sendMessageData.body, headers: sendMessageData.headers });
    return { statusCode: sendMessageData.statusCode, body: sendMessageData.body, headers: sendMessageData.headers };

  }).catch( (err) => {
    return { statusCode: err.statusCode, body: err.body, headers: err.headers };
  });
}


let arq_getUserDetail = ({senderId}) => {
  let option ={
    // "uri": `https://graph.facebook.com/v2.6/${senderId}?fields=about, profile_pic, name, first_name, middle_name, last_name, age_range, birthday, gender, education, email, relationship_status, hometown, address, locale, timezone, sports, quotes, link, favorite_teams, favorite_athletes, inspirational_people, interested_in, is_famedeeplinkinguser, website, work, music, movies, photos, picture, television&access_token=${accessToken}`,

    "uri": `https://graph.facebook.com/v2.6/${senderId}?fields=about, profile_pic, name, first_name, middle_name, last_name, age_range, birthday, gender, education, email, relationship_status, hometown, address, locale, timezone, sports, quotes, favorite_teams, favorite_athletes, inspirational_people, interested_in, is_famedeeplinkinguser, website, work, music, movies, photos, picture, television&access_token=${accessToken}`,
    "method": "GET"
  }
  return rq(option).then( (response) => {
    var userDetail = JSON.parse((response.body));
    return userDetail;

  }).catch( (err) => {
    return { statusCode: err.statusCode, body: err.body, headers: err.headers };
  });
}

module.exports = {
  arq_typingOn : arq_typingOn,
  arq_typingOff : arq_typingOff,
  arq_markSeen : arq_markSeen,
  arq_sendMessage : arq_sendMessage,
  arq_getUserDetail : arq_getUserDetail
}
