angular.module('trivia').component('triviaTab', {
    templateUrl: 'questions/questionsTmpl.html',
    controllerAs: 'triviaCtrl',                     //48D
    controller: function(questionSrvc){             
        this.question = questionSrvc.question
    }

})