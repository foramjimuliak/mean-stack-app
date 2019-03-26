const User = require('../model/user.model.js');
var jwt = require('jsonwebtoken');

/**
* @method Search
* @author Foram Jimulia
* @request Search Term
* @response List of Users
*/

exports.search = (req, res) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], 'supersecret');
                var regexp = new RegExp("^"+ req.body.searchField);

                User.find({ username: regexp}, function(err,result) {
                    if (err) throw err;
                    else
                        res.send(result)
                })
                
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }    
}

/**
* @method Login
* @author Foram Jimulia
* @request UserName and Password
* @response Access Token
*/

exports.login = (req, res) => {
    try {
        User.find({username: req.body.username})
       .then(( user )=> {
            if( !user[0] ) {
               return res.status(400).send({errors:['Invalid Username']});
            } else {
               let passwordFields = '123';
               if (passwordFields === passwordFields) {
                   req.body = {
                       userId: user[0]._id,
                       username: user[0].username,
                   };
                    let token = jwt.sign(req.body, 'supersecret');
                    res.status(201).send({accessToken: token});

                } else {
                    return res.status(400).send({errors: ['Invalid password']});
                }
            }
       });

    } catch (err) {
        res.status(500).send({errors: err});
    }
};
        
    
