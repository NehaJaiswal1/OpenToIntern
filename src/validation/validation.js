const isValidateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email)

};

const isValidateName = function (name) {
    const regex = /^([a-z  A-Z ]){2,30}$/
    return regex.test(name)
}

const isValidPhone = function (phonenumber) {
    const regex = /^[1-9]\d*$/
    return regex.test(phonenumber)
}

const isValidhttp = function (logoLink) {
    const re = /\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|](.png|.jpg|.JPG|.gif|.GIF|.doc|.DOC|.pdf|.PDF|.jpeg|.jfif)/
    return re.test(logoLink)
}


module.exports = { isValidateEmail, isValidateName, isValidPhone, isValidhttp }
