const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customers', (err, filas) =>{
            if(err){
                res.json(err);
            }
            console.log(filas);
            res.render('customer',{
                data: filas
            });
        });
    });
};


module.exports = controller;