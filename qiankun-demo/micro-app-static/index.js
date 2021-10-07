import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use('/', express.static('static'));

app.listen(3000, () => {
  console.log('serve is running at port 3000');
});
