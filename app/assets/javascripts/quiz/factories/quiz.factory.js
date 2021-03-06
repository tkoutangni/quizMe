(function() {

    'use strict'

    function QuizFactory($http) {
        return {
            getQuizzes: getQuizzes,
            createQuiz: createQuiz,
            currentQuizId: 0,
            finalize: false,
            numQuestionsAnswered: 0,
            activeQuestionIndex: 0,
            answeredQuestions: [],
            questionsNumber: 0
        }

        function getQuizzes() {
            return $http.get('/quizzes')
                .then(handleResponse)
                .catch(handleError)
        }

        function createQuiz(quiz) {
            var req = {
                method: 'POST',
                url: '/quizzes',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    quiz: quiz
                }
            }
            return $http(req)
                .catch(handleError)
        }

        // Handle $http responses

        function handleResponse(response) {
            return response.data
        }

        function handleError(error) {
            console.log(error);
        }

    }

    angular
        .module('app')
        .factory('QuizFactory', QuizFactory)

}());
