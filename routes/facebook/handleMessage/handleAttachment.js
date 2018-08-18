

let handleAttachmentImage = require('./handleAttachmentImage'),
    processAttachmentImage = handleAttachmentImage.processAttachmentImage;

let handleAttachmentVideo = require('./handleAttachmentVideo'),
    processAttachmentVideo = handleAttachmentVideo.processAttachmentVideo;

let processAttachment = ({senderId, messageAttachments}) => {

    let attachementType = messageAttachments[0].type,
        attachementUrl = messageAttachments[0].payload.url;
    
        // console.log(decodeURI(attachementUrl));
        // console.log("*******************");
        // console.log(attachementUrl);
        
    if (attachementType === "image") {

        return processAttachmentImage({
            senderId: senderId,
            attachementUrl: attachementUrl
        });

    } else
    if (attachementType === "video") {

        return processAttachmentVideo({
            senderId : senderId,
            attachementUrl: attachementUrl
        });
    } else
    {
        return handleAttachmentAF({
            senderId : senderId,
            attachementUrl: attachementUrl
        });
    }

}

module.exports = {
    processAttachment : processAttachment
}


