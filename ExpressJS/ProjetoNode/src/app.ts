import express from 'express';
import routes from './view/LocatarioRoutes';

const app = express();

app.use(express.json(),
    routes);
app.listen(8080,()=>{
    console.log("callback");
})

