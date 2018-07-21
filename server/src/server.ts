import * as express from 'express';
import * as path from 'path';

import { WelcomeController } from './controllers';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 5000;

app.use('/welcome', WelcomeController);

app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});