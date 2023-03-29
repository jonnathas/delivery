const managerController = {

    index: (req, res) => {
        console.log(req,res);
        res.send('olá mundo');
    }
}

export default managerController;