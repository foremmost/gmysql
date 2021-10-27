import fs from "fs";
import path from "path";
import express from "express";

const __dirname = path.resolve();

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});


const homeData = {
	title: 'G-Mysql',
	message: 'Hello there!'
};

router.route('/')
	.get( function(req, res) {
		res.render('home', homeData, (err,html)=>{
			fs.writeFile(path.join(__dirname,'public/index.html'),html,(err)=>{
				if(err) throw err;
			});
			res.send(html);
		});
	});
export const home = router

//module.exports = router;