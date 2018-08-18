let handleEcho = ({isEcho, message}) => {
    console.log(`Inside echo with app_id: ${message.app_id}`);
}

module.exports = {
    handleEcho : handleEcho
}