import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';

const app = express();

const root = path.join(__dirname, '../../');

console.log("root: ",root);
console.log("dirname: ",__dirname);

app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root,'uploads')));
app.get('/', (req,res)=>{
    res.sendFile(path.join(root, '/dist/client/index.html'));
});

/*

app.get('/', function(req, res, next){
   console.log('first function');
    console.log(req);
   next();
}, function(req,res){
    console.log('second function');
    res.send('Hello world')
});
*/
app.listen(8000, () => console.log('Listening on port 8000!'));
