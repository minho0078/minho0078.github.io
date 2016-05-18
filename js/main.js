var gp = {
   "menu":["java", "nodejs", "electron"]
   , "subMenu":{
      "java":["springFramework"]
      ,"nodejs":["express","jade","ejb"]
      ,"electron":[]
   }
};

var app = angular.module('menuApp',[]);

app.controller('setMenu', function($scope){
   $scope.menus=gp.menu;
   $scope.setSubMenu = function(menu,$event){
      $(".menu_icon").css("color","#000000"); //menu color initialize
      $scope.subMenus = gp.subMenu[menu]; // set submenu by choosed menu
      $(event.currentTarget).css("color","red"); // set subMenu color
   }
});
