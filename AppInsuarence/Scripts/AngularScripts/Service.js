app.service('Ins_OperService', function ($http) {

    //Create new record  
    this.post = function (Customer) {
        var request = $http({
            method: "post",
            url: "/api/CustomerApi",
            data: Customer
        });
        return request;
    }

    //Get Single Records  
    this.get = function (CustomerID) {
        return $http.get("/api/CustomerApi/" + CustomerID);
    }

    this.login = function(Customer) {
        var request = $http({
        method: "get",
        url: "/api/CustomerApi/",
        data: Customer,
            get :"Login"
        });
        return request;
    }
    
    this.getAllCustomer = function () {
        return $http.get("/api/CustomerApi");
    }

    //Update the Record  
    this.put = function (CustomerID, Customer) {
        var request = $http({
            method: "put",
            url: "/api/CustomerApi/" + CustomerID,
            data: Customer
        });
        return request;
    }

    //Delete the Record  
    this.delete = function (CustomerID) {
        var request = $http({
            method: "delete",
            url: "/api/CustomerApi/" + CustomerID
        });
        return request;
    }
});