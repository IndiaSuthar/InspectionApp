/**@author: Bharat Bhushan
 * @CreatedDate:  19-May-2018
 * This node script is used to keep all the API call from the server or client side. 
 */
var inspections = require('./models/inspection');

module.exports = function (app) {

    app.post('/api/saveinspection',function(req,res){
        inspections.saveInspectionData(req,res);
    });

    app.get('/api/getinspections',function(req,res){
        inspections.getInspectionData(req,res);
    })
};
