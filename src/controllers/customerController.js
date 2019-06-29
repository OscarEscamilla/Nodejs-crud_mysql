const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customers', (err, filas) =>{
            if(err){
                res.json(err);
            }
            console.log(filas);
            res.render('customer',{
                row: filas
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customers set ?',[data], (err, filas)=>{
            console.log(filas);
            res.redirect('/');
        });
    });
    
};

controller.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customers WHERE id = ?', id, (err, filas) =>{
            console.log(filas);
            res.redirect('/');
        });
    });
};


module.exports = controller;