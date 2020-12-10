// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find() {
        return db('schemes')
    },
    findById(id) {
        if(!id){
            return Promise.resolve(null)
        }
        else{
            return db('schemes').where({ id }).first()
        }
    },
    findSteps(id) {
        return db('schemes')
        .join('steps', 'steps.scheme_id', 'schemes.id')
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where('schemes.id', id)
    },
    add(scheme) {
        return db('schemes').insert(scheme).value('schemes.scheme_name')
    }


}