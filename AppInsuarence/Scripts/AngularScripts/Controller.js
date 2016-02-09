app.controller('Ins_OperController', function ($scope, Ins_OperService) {  
    $scope.OperType = 1;
    $scope.IsRegisteration = true;
   // $scope.IsRegisteration = false;
    //1 Mean New Entry  
  
  //  GetAllRecords();  
    //To Get All Records  
    function GetAllRecords() {  
        var promiseGet = Ins_OperService.getAllCustomer();  
        promiseGet.then(function (pl) { $scope.Customers = pl.data },  
              function (errorPl) {  
                  $log.error('Some Error in Getting Records.', errorPl);  
              });  
    }



    $scope.NewUser = function () {
        $scope.IsRegisteration = $scope.IsRegisteration === false ? true : false;
        console.log('asd');
    };

    $scope.custom = true;
    $scope.toggleCustom = function () {
        $scope.custom = $scope.custom === false ? true : false;
    };

    //To Clear all input controls.  
    function ClearModels() {
        $scope.OperType = 1;
        $scope.CustomerID = "";
        $scope.Age = "";
        $scope.Name = "";
        $scope.Surname = "";
        $scope.UserName = "";
        $scope.Password = "";
    }

    $scope.login= function() {
        var User = {
            UserName: $scope.UserName,
            Password: $scope.Password

        };

        if (User.UserName != '' && User.Password != '') {

            var loginPost = Ins_OperService.login(User);
            console.log('True');
        }
    }

    //To Create new record and Edit an existing Record.  
    $scope.save = function () {
        var Customer = {
            CustomerID: $scope.CustomerID,
            Age: $scope.Age,
            Name: $scope.Name,
            Surname: $scope.Surname,
            Password: $scope.Password
         
        };
        if ($scope.OperType === 1) {
            var promisePost = Ins_OperService.post(Customer);
            promisePost.then(function (pl) {
                $scope.CustomerID = pl.data.CustomerID;
               // GetAllRecords();
                //ClearModels();
               
            }, function (err) {
                console.log("Err" + err);
            });
        } else {
            //Edit the record                
            Customer.CustomerID = $scope.CustomerID;
            var promisePut = Ins_OperService.put($scope.CustomerID, Customer);
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
    $scope.delete = function (Customer) {
        var promiseDelete = Ins_OperService.delete(Customer.CustomerID);
        promiseDelete.then(function (pl) {
            $scope.Message = "Customer Deleted Successfuly";
            GetAllRecords();
            ClearModels();
        }, function (err) {
            console.log("Err" + err);
        });
    }



    $scope.get = function (Customer) {
        var promiseGetSingle = Ins_OperService.get(Customer.CustomerID);

        promiseGetSingle.then(function (pl) {
            var res = pl.data;
            $scope.CustomerID = res.CustomerID;
            $scope.Name = res.Name;
            $scope.Surname = res.Surname;
            $scope.Age = res.Age;
            $scope.UserName = res.UserName;
            $scope.Password = res.Password;
         

            $scope.OperType = 0;
        },
                  function (errorPl) {
                      console.log('Some Error in Getting Details', errorPl);
                  });
    }

    //To Clear all Inputs controls value.  
    $scope.clear = function () {
        $scope.OperType = 1;
        $scope.CustomerID = "";
        $scope.Name = "";
        $scope.Surname = "";
        $scope.Password = "";
        $scope.UserName = "";
        $scope.Age = "";
    }

});