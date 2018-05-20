var clientConnection = require('../config/database');

module.exports = {
	/**@author: Bharat Bhushan
	 * @CreatedDate:  19-May-2018
	 * 
	 * This method is used save records to Inspection__c object.
	 */
    	saveInspectionData : (req,res) =>{
			var queryParam = [];
			queryParam.push(req.body.activationSummary);
			queryParam.push(req.body.name);
			var client = clientConnection.getConnection();
			var query = 'INSERT INTO salesforce.Inspection__c (Name, Activity_Summary__c) values ($1, $2) RETURNING Id';
			client.query(query, queryParam,(err, result) => {
				console.log(err ? err.stack : result.rows[0].message);
				client.end();
				res.status(200).send(result);
			});
		},

		//UPDATE items SET text=($1), complete=($2) WHERE id=($3)
		updateInspectionData : (req,res) =>{
			var queryParam = [];
			queryParam.push(req.body.activationSummary);
			queryParam.push(req.body.id);
			var client = clientConnection.getConnection();
			var query = 'UPDATE salesforce.Inspection__c SET Activity_Summary__c=($1) WHERE Id=($2)';
			client.query(query, queryParam,(err, result) => {
				console.log(err ? err.stack : result.rows[0].message);
				client.end();
				res.status(200).send(result);
			});
		},
		
		getInspectionData: (req,res) =>{
			var client = clientConnection.getConnection();
			var query = 'Select * from salesforce.Inspection__c';
			client.query(query,(err,result)=>{
				console.log(err ? err.stack : result.rows[0].message);
				client.end();
				res.status(200).send(result);
			})
		}
  }