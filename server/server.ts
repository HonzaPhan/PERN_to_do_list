import dotenv from 'dotenv';
import { app, PORT } from './app';

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
