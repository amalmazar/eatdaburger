var connection =  require("./connection.js");

//In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//
//     * `selectAll()` 
//     * `insertOne()` 
//     * `updateOne()` 

//Export the ORM object in `module.exports`.
var orm = {
    selectALL: function(tableData) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableData], function(err, result) {
            console.log(result);
        })
    }
}

// Object Relational Mapper (ORM)
//
//var orm = {
//  selectWhere: function(tableInput, colToSearch, valOfCol) {
//    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//      console.log(result);
//    });
//  },
//  selectAndOrder: function(whatToSelect, table, orderCol) {
//    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
//    console.log(queryString);
//    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
//      console.log(result);
//    });
//  },
//  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
//
//    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
//      console.log(result);
//    });
//  }
//};

module.exports = orm;
