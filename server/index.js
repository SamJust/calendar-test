const app = require('./config/app.js');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server listening on port 3001');
});