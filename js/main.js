var gMenu="";

function viewPage(oThis){
   var obj = $(oThis);
   alert(obj.text());
}

function setMenu($scope){
   $scope.menus=["java","nodejs"];
}
