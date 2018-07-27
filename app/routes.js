/**@author: Bharat Bhushan
 * @CreatedDate:  19-May-2018
 * This node script is used to keep all the API call from the server or client side. 
 */
var inspections = require('./models/inspection');

module.exports = function (app) {

    app.post('/api/saveinspection',function(req,res){
        inspections.saveInspectionData(req,res);
    });

    app.post('/api/updateinspection',function(req,res){
        inspections.updateInspectionData(req,res);
    });

    app.get('/api/getinspections',function(req,res){
        inspections.getInspectionData(req,res);
    });

    app.get('/',function(req,response){
        fs.readFile('./index.html', function (err, html) {
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end(); 
        });
    });
};
