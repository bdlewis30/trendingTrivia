angular.module('trivia').controller('questionCtrl', function($scope, questionsSrvc){  //46C, 46D, 46E, 46F, 49G
    if($stateParams.difficulty === 'easy' || 'medium' || 'hard'){
        questionsSrvc.getDifficulty().then( function(res){          
            $scope.questionData = res.data 
        })
    }
    else questionsSrvc.getAllQuestions().then(function(res){
        $scope.questionData = res.data                              //50C
    }) 
})