// Load the MySQL pool connection
const pool = require('../data/config');


const router = app => {

    /*app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
    });
    
  
    app.get('/prueba',(request,response)=>{
        response.status(201).send(`FUNCIONA EL API`);
    });

    // Display all tweets
    app.get('/tweets', (request, response) => {
         pool.query('SELECT * FROM tweets', (error, result) => {
            if (error) throw error;
        response.send(result);
                });
    });


    //DISPLAY TWEETS FROM A SINGLE USER 
    app.get('/tweets/:user',(request,response)=>{
        const user = request.params.user;

        pool.query('SELECT tweet FROM tweets WHERE usuario = ?', user, (error, result) => {
            if (error) throw error;
            response.send(result);
        });

    });


    // Add a new tweet
    app.post('/tweets', (request, response) => {
        pool.query('INSERT INTO tweets SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`tweet added with ID: ${result.insertId}`);
    });
});*/

    /*app.get('/informacion',(request,response)=>{

        response.status(201).send(`FUNCIONA EL SERVIDOR WEB`);
    });*/

    app.get('/informacion', (request, response) => {
         pool.query('SELECT * FROM Estudiantes', (error, result) => {
            if (error) throw error;
        response.send(result);
                });
    });
    
}


// Export the router
module.exports = router;