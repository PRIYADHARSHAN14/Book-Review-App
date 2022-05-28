const express = require('express')
const router = express.Router();
const jwtaccess = require("../middleware/authaccess");
const Reviews = require('../Models/Reviews');
const User = require('../Models/User');


router.post('/addreview', jwtaccess, async (req, res) => {
    try {

        var user = await User.findOne({ _id: req.userid });
        if (!user) {
            return res.json({ status: -1 });
        }
        var username = user.name;
        Reviews.create({
            bookId: req.body.bookid,
            userId: req.userid,
            username: username,
            star: req.body.star,
            review: req.body.review
        })
            .then(() => {
                res.json({ status: 0 });
            })
            .catch(() => {
                res.json({ status: -1 });
            })
    } catch (error) {
        res.json({ status: -1 });
    }

})


router.get('/sendreview/:id', async (req, res) => {
    var id = req.params.id
    try {
        var review = await Reviews.find({ bookId: id });
        if (!review) {
            res.json({ status: -1 });
        }   
        var data = new Array();    
        for( i in review){
            data.push({
                username : review[i].username,
                star :review[i].star,
                reviewmessage : review[i].review,
                id : review[i]._id
            })
        }
        res.json({ status: 0, data });
    } catch (error) {
        res.json({ status: -2 });
    }
})


module.exports = router;
