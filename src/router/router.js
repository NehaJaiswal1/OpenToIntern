const express = require('express')
const clgController = require('../controller/collegeController')
const internController = require('../controller/internController')
const router = express.Router()


router.post('/functionup/colleges', clgController.createClgData)
router.post('/functionup/interns', internController.interns)

router.get('/functionup/collegeDetails', clgController.collegeDetails)



router.all("/*", function (req, res) {
    res.status(400).send({ status: false, msg: "invalid http request" })
})


module.exports = router









