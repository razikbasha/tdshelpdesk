var config = require('../../config/database.config');
var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/groups',getGroups);
router.get('/tickets',tickets);
router.get('/gettic',gettic);

router.get('/ticketsnew',ticketsnew);

router.get('/ticketsopen',ticketsopen);

router.get('/getAllTicketsassign',getAllTicketsassign);
router.get('/ticketspending',ticketspending);
router.get('/ticketsclose',ticketsclose);



router.post('/ticketinfo',ticketinfo);

router.post('/comments',comments);
router.post('/usertickets',usertickets);
router.post('/usersopen',usersopen);

router.post('/userticketspending',userticketspending);
router.post('/userticketsclose',userticketsclose);

router.post('/getAlluserassign',getAlluserassign);
router.post('/ticketinform',ticketinform);

router.get('/tags',getTags);
router.get('/types',types);

router.get('/current', getCurrent);
router.post('/', update);
router.post('/ticalert',ticalert);
router.post('/comment',comment);
router.post('/assignuser',assignuser);
router.delete('/:_id', _delete);
router.post('/registerone', registerone);
router.post('/tag', tag);
router.post('/tickettype',tickettype);
router.post('/group',group);
router.post('/account',account);

module.exports = router;

function authenticate(req, res) {
    console.log(req.body.username);
    userService.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function ticketinfo(req, res) {
    
    userService.getTicketInfo(req.body.ownername)
        .then(function (ticket) {
            res.send(ticket);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function comments(req, res) {
    
    userService.allHistory(req.body.ownername)
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function usertickets(req, res) {
    
    userService.allUserTickets(req.body.uid)
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function usersopen(req, res) {
    
    userService.allUseropen(req.body.uid)
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}



function userticketspending(req, res) {
    
    userService.allUserpending(req.body.uid)
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function userticketsclose(req, res) {
    
    userService.allUserclose(req.body.uid)
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAlluserassign(req, res) {
    
    userService.assignUserTickets(req.body.uid)
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}



function ticketinform(req, res) {
    
    userService.getTicketInform(req.body.status)
        .then(function (ticket) {
            res.send(ticket);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function registerone(req, res) {
    //console.log(req.body);
    userService.createone(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function tag(req, res) {
    //console.log(req.body);
    userService.tagone(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function tickettype(req, res) {
    //console.log(req.body);
    userService.typeone(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function group(req, res) {
    
    userService.groupone(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}



function account(req, res) {
    
    userService.accountone(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function getGroups(req, res) {
    
    userService.getAllGroups()
        .then(function (groups) {
            res.send(groups);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function gettic(req, res) {
    
    userService.getTicket()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function tickets(req, res) {
    
    userService.getAllTickets()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}





function ticketsopen(req, res) {
    
    userService.getAllTicketsopen()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function ticketsnew(req, res) {
    
    userService.getAllTicketsnew()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAllTicketsassign(req, res) {
    
    userService.getAllTicketsassign()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}






function ticketspending(req, res) {
    
    userService.getAllTicketspending()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function ticketsclose(req, res) {
    
    userService.getAllTicketsclose()
        .then(function (tickets) {
            res.send(tickets);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}





function getTags(req, res) {
    
    userService.getAllTags()
        .then(function (groups) {
            res.send(groups);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function types(req, res) {
    
    userService.getTypes()
        .then(function (groups) {
            res.send(groups);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    userService.getById(req.body._id)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    userService.update(req.body.ownername,req.body.status,req.body.priority)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function ticalert(req, res) {
    userService.alertupdate(req.body.ownername,req.body.visible)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}



function comment(req, res) {
    userService.rescomment(req.body.ownername,req.body.resname,req.body.resdate,req.body.history)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function assignuser(req, res) {
    userService.uupdate(req.body.ownername,req.body.assignuser)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}