var app = angular.module('myApp', []);
app.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("@") >= 3) {
                    mCtrl.$setValidity('char@', true);
                } else {
                    mCtrl.$setValidity('char@', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
