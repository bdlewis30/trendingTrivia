angular.module('trivia').service('questionSrvc', function($http){       //49D, 52D
    this.getAllQuestions = function(){              //49C
        return $http({                              //52D
            method: 'GET',
            url: 'https://practiceapi.devmountain.com//api/trivia/questions/'
        })
    },
    this.getDifficulty = function(difficulty){
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com//api/trivia/questions/difficulty/' + difficulty
        })
    },
    this.postQuestion = function(question){
        return $http({
            method: 'POST',
            url: 'https://practiceapi.devmountain.com//api/trivia/questions'
        })
    },
    this.updateQuestion = function(update){
        return $http({
            method: 'PUT',
            url: 'https://practiceapi.devmountain.com//api/trivia/questions/' + id
        })
    },
    this.deleteQuestion = function(id){
        return $http({
            method: 'DELETE',
            url: 'https://practiceapi.devmountain.com//api/trivia/questions/' + id
        })
    }
})