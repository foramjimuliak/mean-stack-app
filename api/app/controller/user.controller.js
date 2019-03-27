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
                var regexp = new RegExp("^"+ '');

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
    console.log(req.body.username);
    try {
        User.find({username: req.body.username})
       .then(( user )=> {
           console.log(user);
            if( !user[0] ) {
               return res.status(400).send({errors:['Invalid Username']});
            } else {
               let passwordFields = user[0].password;
               if (req.body.password === passwordFields) {
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
        
    
