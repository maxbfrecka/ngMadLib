var myApp= angular.module('myApp', ['ngMessages'])

    .controller('madlib', function() {
    	var ml = this;
        ml.reset=false;

        ml.submit = function(){
            reset=!reset;
                    };


        ml.double = function(value){return value*2;};

    	ml.male_name;
    	ml.job_title;
    	ml.tedius_task;
    	ml.dirty_task;
    	ml.celebrity;
    	ml.useless_skill;
    	ml.obnoxious_celebrity;
    	ml.huge_number;
    	ml.adjective;
    });


    //how to make the function work?

    //how to clear all of the inputs