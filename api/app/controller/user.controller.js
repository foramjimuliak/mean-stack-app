const User = require('../model/user.model.js');

/**
* @method Search
* @author Foram Jimulia
* @request Search Term
* @response List of Users
*/

exports.search = (req, res) => {
    var regexp = new RegExp("^"+ req.body.searchField);
    User.find({ username: regexp}, function(err,result) {
        if (err) throw err;
        else
            res.send(result)
    })
                
}
        
    
