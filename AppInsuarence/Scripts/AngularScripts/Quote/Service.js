app.service('Ins_QuoteService', function ($http) {

    //Create new record  
    this.post = function (Quote) {
        var request = $http({
            method: "post",
            url: "/api/QuoteApi",
            data: Quote
        });
        return request;
    }

    //Get Single Records  
    this.get = function (IDQuote) {
        return $http.get("/api/QuoteApi/" + IDQuote);
    }


    this.getAllCustomer = function () {
        return $http.get("/api/QuoteApi");
    }

    //Update the Record  
    this.put = function (IDQuote, Quote) {
        var request = $http({
            method: "put",
            url: "/api/QuoteApi/" + IDQuote,
            data: Quote
        });
        return request;
    }

    //Delete the Record  
    this.delete = function (IDQuote) {
        var request = $http({
            method: "delete",
            url: "/api/QuoteApi/" + IDQuote
        });
        return request;
    }
});