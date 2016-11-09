angular.module('myApp', ['ngMessages'])
    .controller('MadlibController', function() {
    	var _this = this;
        this.reset=false;

        this.submit = function(){ _this.reset=!_this.reset; };

        this.resetVals = function(){
            _this.reset=!_this.reset;
            _this.maleName = '';
            _this.jobTitle = '';
            _this.tediousTask = '';
            _this.dirtyTask = '';
            _this.celebrity = '';
            _this.adjective = '';
            _this.obnoxiousCelebrity = '';
            _this.hugeNumber = '';
            _this.uselessSkill = '';
        }

        this.double = function(value){return value*2;};


    });


    //how to make the function work?

    //how to clear all of the inputs