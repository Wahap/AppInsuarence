app.controller('Ins_QuoteController', function ($scope, Ins_QuoteService) {
    $scope.OperType = 1;
    //1 Mean New Entry  

    GetAllRecords();
    //To Get All Records  
    function GetAllRecords() {
        var promiseGet = Ins_QuoteService.getAllCustomer();
        promiseGet.then(function (pl) { $scope.Quotes = pl.data },
              function (errorPl) {
                  $log.error('Some Error in Getting Records.', errorPl);
              });
    }

    //To Clear all input controls.  
    function ClearModels() {
        $scope.OperType = 1;
        $scope.IDQuote   = "";
        $scope.CustomerID = "";
        $scope.InsuarenceType = "";
        $scope.Location = "";
        $scope.TotalInsuarenceYear = "";
        $scope.CoverAmountRange = "";
        $scope.Age = "";
    }

    //To Create new record and Edit an existing Record.  
    $scope.save = function () {
        var Quote = {
            IDQuote: $scope.IDQuote,
            CustomerID: $scope.CustomerID,
            Location: $scope.Location,
            InsuarenceType:$scope.InsuarenceType,
            TotalInsuarenceYear: $scope.TotalInsuarenceYear,
            CoverAmountRange: $scope.CoverAmountRange,
            Age: $scope.Age
           

        };
        if ($scope.OperType === 1) {
            var promisePost = Ins_QuoteService.post(Quote);
            promisePost.then(function (pl) {
                $scope.IDQuote = pl.data.IDQuote;
                GetAllRecords();
                ClearModels();
            }, function (err) {
                console.log("Err" + err);
            });
        } else {
            //Edit the record                
            Quote.IDQuote = $scope.IDQuote;
            var promisePut = Ins_QuoteService.put($scope.IDQuote, Quote);
            promisePut.then(function (pl) {
                $scope.Message = "Customer Updated Successfuly";
                GetAllRecords();
                ClearModels();
            }, function (err) {
                console.log("Err" + err);
            });
        }
    };

    //To Delete Record  
    $scope.delete = function (Quote) {
        var promiseDelete = Ins_QuoteService.delete(Quote.IDQuote);
        promiseDelete.then(function (pl) {
            $scope.Message = "Customer Deleted Successfuly";
            GetAllRecords();
            ClearModels();
        }, function (err) {
            console.log("Err" + err);
        });
    }


    $scope.get = function (Quote) {
        var promiseGetSingle = Ins_QuoteService.get(Quote.IDQuote);

        promiseGetSingle.then(function (pl) {
            var res = pl.data;
            $scope.IDQuote = res.IDQuote;
            $scope.CustomerID = res.CustomerID;
            $scope.Location = res.Location;
            $scope.InsuarenceType = res.InsuarenceType;
            $scope.TotalInsuarenceYear = res.TotalInsuarenceYear;
            $scope.CoverAmountRange = res.CoverAmountRange;
            $scope.Age = res.Age;

            $scope.OperType = 0;
        },
                  function (errorPl) {
                      console.log('Some Error in Getting Details', errorPl);
                  });
    }

    //To Clear all Inputs controls value.  
    $scope.clear = function () {
        $scope.OperType = 1;
        $scope.IDQuote = "";
        $scope.CustomerID = "";
        $scope.Location = "";
        $scope.InsuarenceType = "";
        $scope.TotalInsuarenceYear = "";
        $scope.CoverAmountRange = "";
        $scope.Age = "";
    }

});