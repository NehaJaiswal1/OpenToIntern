const internModel = require('../model/internModel')
const collegeModel = require("../model/collegeModel")
const valid = require("../validation/validation")

const interns = async function (req, res) {


    try {
        let data = req.body;
        let { name, mobile, email, collegeName } = data;
        if (Object.keys(data).length === 0) return res.status(400).send({ status: false, message: "Please enter data in body" })

        if (!name)
            return res.status(400).send({ status: false, message: "name is required" });

        if (!valid.isValidateName(name))
            return res.status(400).send({ status: false, message: "Enter valid Name" });

        if (!mobile)
            return res.status(400).send({ status: false, message: "Mobile is required" });


        if ((mobile.length != 10 || typeof (mobile) != "string") || (!valid.isValidPhone(mobile))) {
            return res.status(400).send({ status: false, message: "Please enter valid number" });

        }

        const validPhone = await internModel.findOne({ mobile })
        if (validPhone) {
            return res.status(400).send({ status: false, message: `${mobile}  is already registered` })
        }

        if (!email)
            return res.status(400).send({ status: false, message: "Email is required" });


        if (!valid.isValidateEmail(email))
            return res.status(400).send({ status: false, message: "Enter valid email" });

        const validEmail = await internModel.findOne({ email })

        if (validEmail) {
            return res.status(400).send({
                status: false, message: `${email}  is already registered`,
            });
        }

        if (!collegeName)
            return res.status(400).send({ status: false, message: "please provide collegeName" });

        const NamedId = await collegeModel.findOne({ $or: [{ fullName: collegeName }, { name: collegeName }], isDeleted: false })
        if (!NamedId) {
            return res.status(400).send({ status: false, message: `${collegeName}  is not found` })
        }

        if (Object.keys(NamedId).length === 0)
            return res.status(400).send({ status: false, message: "No data in the Database of your collegeName" });
        data.collegeId = NamedId._id;

        let saveIntern = await internModel.create(data);
        let newData = await internModel.findById({ _id: saveIntern._id }).select({ _id: 0, __v: 0 })
        return res.status(201).send({ status: true, data: newData })

    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.interns = interns