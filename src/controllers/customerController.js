const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customers', (err, filas) =>{
            if(err){
                res.json(err);
            }
            console.log(filas);
            //renderizamos la vista pasando como paremetro los datos obtenidos
            res.render('customer',{
                data: filas
            });
        });
    });
};

controller.save = (req, res) => {
    console.log(req.body);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customers set ?',[data], (err, filas)=>{
            console.log(filas);
            res.redirect('/');
        });
    });
    
};


module.exports = controller;