const PolicyModel = require('../models/policy');


exports.policy_create_post = (req, res) => {
    if (!req.body.name) {
        res.status(400).send('You need a name');
    }
    const policy = new PolicyModel(req.body);

    policy.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('There was an issue while trying to save the policy');
        });
};

exports.policy_list_get = (req, res) => {

    PolicyModel.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('no records');
        });

};

exports.getById = (req, res) => {
    const id = req.params.id;

    PolicyModel
        .findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ Message: `no policy found with id ${id}` });
            } else {
                res.status(200).send(data);
            }
        })
        .catch(error => {
            res.status(400).send(`There was an issue while trying to find the policy ${id}`);
        })
}

exports.updateById = (req, res) => {
    const id = req.params.id;

    PolicyModel
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(data => {
            if (!data) {
                res.status(404).send({ Message: `no policy found with id ${id}` });
            } else {
                res.status(200).send(data);
            }
        })
        .catch(error => {
            res.status(400).send(`There was an issue while trying to find the policy ${id}`);
        });
}

exports.deleteById = (req, res) => {
    const id = req.params.id;

    PolicyModel
    .findByIdAndDelete(id)
    .then(data => {
        if (!data) {
            res.status(404).send({ Message: `no policy found with id ${id}` });
        } else {
            res.status(200).send(`policy ${id} was deleted`);
        }
    })
}

exports.deleteAll = (req, res) => {
    PolicyModel.deleteMany()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('no records');
        });
}
