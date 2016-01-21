angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('EventsCtrl', ['$scope', function($scope){
  $scope.events = [
                    {
                      "id": 1, 
                      "artist": "2 Chainz", 
                      "venue": "Livewire",
                      "venueId": 2,
                      "time": "2016-01-20T21:00:00",
                      "admission": 35,
                      "ages": "18+",
                      "description": "Stuff and things"
                    }, 
                    {
                      "id": 2,
                      "artist": "Vanessa Carlton",
                      "venue": "Livewire",
                      "venueId": 2, 
                      "time": "2016-01-26T19:00:00",
                      "admission": 18,
                      "ages": "All ages",
                      "description": "Stuff and things"
                    }, 
                    {
                      "id": 3,
                      "artist": "Europe",
                      "venue": "Wild Horse Pass Casino", 
                      "time": "2016-01-26T19:00:00",
                      "admission": 60, 
                      "ages": "All ages", 
                      "description": "The final countdown"
                    }
                  ]
}])

.controller('VenuesCtrl', ['$scope', function($scope){
  $scope.venues = [
                  {
                    "id": 1,
                    "name": "MIM Music Theatre",  
                    "address": "4725 East Mayo Boulevard, Phoenix, AZ 85050",
                  }, 
                  {
                    "id": 2, 
                    "name": "Livewire", 
                    "address": "7340 E Indian Plaza, Scottsdale, AZ 85251"
                  }, 
                  {
                    "id": 3, 
                    "name": "Wildhorse Pass and Casino", 
                    "address": "5550 W Wild Horse Pass, Chandler, AZ 85246"
                  }
                 ]
}])
