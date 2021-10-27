import express from 'express';
import {home} from './routes/home.js';
import path from "path";
import sass from "node-sass-middleware";

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use('/',home);


app.set('view engine','pug');
app.use(
	sass({
		src: __dirname + '/sass',    // Input SASS files
		dest: __dirname + '/public', // Output CSS
		debug: true
	})
);
app.use(express.static(__dirname + '/sass'));
app.use(express.static(__dirname + '/public'));

app.listen(port, _=>{
	console.log(`Listening server at port ${port}`)
});

