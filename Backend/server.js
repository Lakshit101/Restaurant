// import app from './app.js';

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on port ${process.env.PORT}`);
// })

import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
