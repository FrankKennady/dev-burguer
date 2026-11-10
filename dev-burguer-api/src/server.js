import app from './api.js';
import './database/index.js';


app.listen(3001, () => {
    console.log('application is running on port 3001')
});