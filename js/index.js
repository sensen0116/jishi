var reminder=angular.module('reminder',[]);
reminder.controller('myCtrl',[
    '$scope',
    function($scope){
        $scope.database=[
            {
                id:1000,
                title:'买书计划',
                theme:'blue',
                todos:[
                    {id:1,name:'三国',isDone:true},
                    {id:2,name:'水浒',isDone:false},
                ]
            },
            {
                id:1001,
                title:'请客计划',
                theme:'orange',
                todos:[
                    {id:1,name:'买书',isDone:false},
                    {id:2,name:'买水',isDone:false},
                ]
            },
        ];
        $scope.currentlist=$scope.database[0];
        $scope.themes=['orange','purple','brown','red','green','yellow','blue'];
        $scope.add=function(){
            $scope.newlist={
                id:1000+(($scope.database.length)+1),
                title:'列表'+(($scope.database.length)+1),
                theme:$scope.themes[($scope.database.length)%7],
                todos:[
                {id:1,name:'三国',isDone:true},
                {id:2,name:'水浒',isDone:false},
                ]
            }
            $scope.database.push($scope.newlist);
            $scope.currentlist=$scope.database[$scope.database.length-1]
        }
        $scope.setcurrent=function(i){
            $scope.currentlist=$scope.database[i];
        }
        $scope.addxinxi=function(){
            $('<li ng-repeat="v in currentlist.todos|filter:{isDone:false}"><div class="direct" ng-class="currentlist.theme" ng-click="v.isDone=!v.isDone"></div> <input ng-model="v.name"> <div class="line1"></div> </li>').appendTo($('.unfinish-opation'))
        }

        $scope.delete=function(id){
            console.log(id)
            var arr=[];
            console.log($scope.database)
            for(var i=0;i<$scope.database.length;i++){
                if($scope.database[i].id!==id){
                arr.push($scope.database[i]);

                }
            }
           console.log(arr)
            $scope.database=arr;           
            $scope.currentlist=$scope.database[0];
        }
       
    }])