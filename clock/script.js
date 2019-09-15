(function(){

    var updateHour = function(){
        var date = new Date();

        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ampm;
        var dayW = date.getDay();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        var pHour = document.getElementById('hour');
        var pMin= document.getElementById('min');
        var pSec = document.getElementById('seconds');
        var pAMPM= document.getElementById('ampm');

        var pDayWeek = document.getElementById('dayWeek');
        var pDay = document.getElementById('day');
        var pMonth = document.getElementById('month');
        var pYear = document.getElementById('year');

        var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        pDayWeek.textContent=week[dayW];

        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        pMonth.textContent=months[month];

        if(hour>=12){
            hour=hour-12;
            ampm='PM';
        }
        else{
            ampm='AM';
        }
        if(hour==0){
            hour=12;
        }

        pHour.textContent=hour;
        pAMPM.textContent=ampm;

        if(min<10){
            min="0" + min;
        }
        if(sec<10){
            sec="0"+sec;
        }
        pMin.textContent=min;
        pSec.textContent=sec;

        pDay.textContent=day;
        pYear.textContent=year;

    }

    
    updateHour();
    var inter = setInterval(updateHour,1000);
        


})();