import express from 'express';
import { messageRouter } from './routes/message.routes.js';
import { userRoute } from './routes/user.routes.js';
const app = express()
const port = 3040

app.use(express.json());
app.use(messageRouter);
app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
