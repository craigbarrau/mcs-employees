/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.get('/mobile/custom/employees/list', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					    "employees":
					       [
					         {
					           "id": 100,
					           "firstname": "Avaneesh",
					           "lastname": "Ramprasad",
					           "email" : "avaneesh.ramprasad@oracle.com",
								"hiredt" : "2014-07-18",
					           "salary" : "4000",
					        },
					        {
					           "id": 101,
					           "firstname": "Vishal",
					           "lastname": "Sharma",
					           "email" : "vishal.x.sharma@oracle.com",
								"hiredt" : "2010-02-10",
					           "salary" : "5000",
					        },
							{
					           "id": 102,
					           "firstname": "John",
					           "lastname": "Smith",
					           "email" : "john.smith@oracle.com",
								"hiredt" : "2000-01-11",
					           "salary" : "2000",
					        },
					       ]
					  };
			}
		}
		res.status(statusCode).send(result);
	});

};
