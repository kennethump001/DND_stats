const strnum = document.getElementById("STR");
const dexnum = document.getElementById("DEX");
const connum = document.getElementById("CON");
const intnum = document.getElementById("INT");
const wisnum = document.getElementById("WIS");
const chanum = document.getElementById("CHA");
//Half-elf
const Halfelf = document.getElementById("Half-elf");
var halfelfstat = document.createElement("select");
halfelfstat.id = 'halfstats';
halfelfstat.innerHTML = '<option value="" disabled selected>Stat improve</option> <option value="1">Str/Dex</option> <option value="2">Str/Con</option> <option value="3">Str/Int</option> <option value="4">Str/Wis</option> <option value="5">Dex/Con</option> <option value="6">Dex/Int</option> <option value="7">Dex/Wis</option> <option value="8">Con/Int</option> <option value="9">Con/Wis</option> <option value="10">Int/Wis</option>';
var token = false;
//Races
const Races = document.querySelector('#Races');
var RaceImprovStr = 0;
var RaceImprovDex = 0;
var RaceImprovCon = 0;
var RaceImprovInt = 0;
var RaceImprovWis = 0;
var RaceImprovCha = 0;
function getRace(){
    switch (Races.selectedIndex){
                case 1:
                    RaceImprovStr = 0;
                    RaceImprovDex = 0;
                    RaceImprovCon = 2;
                    RaceImprovInt = 0;
                    RaceImprovWis = 1;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 2:
                    RaceImprovStr = 2;
                    RaceImprovDex = 0;
                    RaceImprovCon = 2;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 3:
                    RaceImprovStr = 0;
                    RaceImprovDex = 2;
                    RaceImprovCon = 0;
                    RaceImprovInt = 1;
                    RaceImprovWis = 0;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 4:
                    RaceImprovStr = 0;
                    RaceImprovDex = 2;
                    RaceImprovCon = 0;
                    RaceImprovInt = 0;
                    RaceImprovWis = 1;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 5:
                    RaceImprovStr = 0;
                    RaceImprovDex = 2;
                    RaceImprovCon = 0;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 1;
                    token = false;
                    Racemod();
                    break;
                case 6:
                    RaceImprovStr = 0;
                    RaceImprovDex = 2;
                    RaceImprovCon = 0;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 1;
                    token = false;
                    Racemod();
                    break;
                case 7:
                    RaceImprovStr = 0;
                    RaceImprovDex = 2;
                    RaceImprovCon = 1;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 8:
                    RaceImprovStr = 1;
                    RaceImprovDex = 1;
                    RaceImprovCon = 1;
                    RaceImprovInt = 1;
                    RaceImprovWis = 1;
                    RaceImprovCha = 1;
                    token = false;
                    Racemod();
                    break;
                case 9:
                    RaceImprovStr = 2;
                    RaceImprovDex = 0;
                    RaceImprovCon = 0;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 1;
                    token = false;
                    Racemod();
                    break;
                case 10:
                    RaceImprovStr = 0;
                    RaceImprovDex = 1;
                    RaceImprovCon = 0;
                    RaceImprovInt = 2;
                    RaceImprovWis = 0;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 11:
                    RaceImprovStr = 0;
                    RaceImprovDex = 0;
                    RaceImprovCon = 1;
                    RaceImprovInt = 2;
                    RaceImprovWis = 0;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 12:
                    RaceImprovStr = 0;
                    RaceImprovDex = 0;
                    RaceImprovCon = 0;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 2;
                    token = true;
                    Halfelf.appendChild(halfelfstat);
                    document.getElementById("halfstats").onchange = function(){Halfelfstatc()};
                    Racemod();
                    break;
                case 13:
                    RaceImprovStr = 2;
                    RaceImprovDex = 0;
                    RaceImprovCon = 1;
                    RaceImprovInt = 0;
                    RaceImprovWis = 0;
                    RaceImprovCha = 0;
                    token = false;
                    Racemod();
                    break;
                case 14:
                    RaceImprovStr = 0;
                    RaceImprovDex = 0;
                    RaceImprovCon = 0;
                    RaceImprovInt = 1;
                    RaceImprovWis = 0;
                    RaceImprovCha = 2;
                    token = false;
                    Racemod();
                    break;
    };
};
function Halfelfstatc(){
    switch(halfelfstat.selectedIndex){
        case 1:
            RaceImprovStr = 1;
            RaceImprovDex = 1;
            RaceImprovCon = 0;
            RaceImprovInt = 0;
            RaceImprovWis = 0;
            Racemod();
            break;
        case 2:
            RaceImprovStr = 1;
            RaceImprovDex = 0;
            RaceImprovCon = 1;
            RaceImprovInt = 0;
            RaceImprovWis = 0;
            Racemod();
            break;
        case 3:
            RaceImprovStr = 1;
            RaceImprovDex = 0;
            RaceImprovCon = 0;
            RaceImprovInt = 1;
            RaceImprovWis = 0;
            Racemod();
            break;
        case 4:
            RaceImprovStr = 1;
            RaceImprovDex = 0;
            RaceImprovCon = 0;
            RaceImprovInt = 0;
            RaceImprovWis = 1;
            Racemod();
            break;
        case 5:
            RaceImprovStr = 0;
            RaceImprovDex = 1;
            RaceImprovCon = 1;
            RaceImprovInt = 0;
            RaceImprovWis = 0;
            Racemod();
            break;
        case 6:
            RaceImprovStr = 0;
            RaceImprovDex = 1;
            RaceImprovCon = 0;
            RaceImprovInt = 1;
            RaceImprovWis = 0;
            Racemod();
            break;
        case 7:
            RaceImprovStr = 0;
            RaceImprovDex = 1;
            RaceImprovCon = 0;
            RaceImprovInt = 0;
            RaceImprovWis = 1;
            Racemod();
            break;
        case 8:
            RaceImprovStr = 0;
            RaceImprovDex = 0;
            RaceImprovCon = 1;
            RaceImprovInt = 1;
            RaceImprovWis = 0;
            Racemod();
            break;
        case 9:
            RaceImprovStr = 0;
            RaceImprovDex = 0;
            RaceImprovCon = 1;
            RaceImprovInt = 0;
            RaceImprovWis = 1;
            Racemod();
            break;
        case 10:
            RaceImprovStr = 0;
            RaceImprovDex = 0;
            RaceImprovCon = 0;
            RaceImprovInt = 1;
            RaceImprovWis = 1;
            Racemod();
            break;
    };
};
// Calculate score
function calcall(){
    calcstats("str");
    calcstats("dex");
    calcstats("con");
    calcstats("int");
    calcstats("wis");
    calcstats("cha");
    getmod("str");
    getmod("dex");
    getmod("con");
    getmod("int");
    getmod("wis");
    getmod("cha");
};
function calcstats(stat){
    if (stat == "str"){
        var bace = document.getElementById("str").innerHTML;
        document.getElementById("finalstr").innerHTML = Math.floor(parseInt(bace) + RaceImprovStr).toString();
    } else if(stat =="dex"){
        var bace = document.getElementById("dex").innerHTML;
        document.getElementById("finaldex").innerHTML = Math.floor(parseInt(bace) + RaceImprovDex).toString();
    } else if(stat == "con"){
        var bace = document.getElementById("con").innerHTML;
        document.getElementById("finalcon").innerHTML = Math.floor(parseInt(bace) + RaceImprovCon).toString();
    } else if(stat == "int"){
        var bace = document.getElementById("int").innerHTML;
        document.getElementById("finalint").innerHTML = Math.floor(parseInt(bace) + RaceImprovInt).toString();
    } else if(stat == "wis"){
        var bace = document.getElementById("wis").innerHTML;
        document.getElementById("finalwis").innerHTML = Math.floor(parseInt(bace) + RaceImprovWis).toString();
    } else if (stat == "cha"){
        var bace = document.getElementById("cha").innerHTML;
        document.getElementById("finalcha").innerHTML = Math.floor(parseInt(bace) + RaceImprovCha).toString();
    } else{
        console.log("error pramitor not passed");
    }
}
function getmod(stat){
    var statel = document.getElementById("final"+stat).innerHTML;
    var model = document.getElementById(stat+"mod");
    if(statel == 1){
        model.innerHTML = "-5";
    } else if(statel == 2 || statel == 3){
        model.innerHTML = "-4";
    } else if(statel == 4 || statel == 5){
        model.innerHTML = "-3";
    } else if(statel == 6 || statel == 7){
        model.innerHTML = "-2";
    } else if(statel == 8 || statel == 9){
        model.innerHTML = "-1";
    } else if(statel == 10 || statel == 11){
        model.innerHTML = "0";
    } else if(statel == 12 || statel == 13){
        model.innerHTML = "+1";
    } else if(statel == 14 || statel == 15){
        model.innerHTML = "+2";
    } else if(statel == 16 || statel == 17){
        model.innerHTML = "+3";
    } else if(statel == 18 || statel == 19){
        model.innerHTML = "+4";
    } else if(statel == 20 || statel == 21){
        model.innerHTML = "+5";
    } else if(statel == 22 || statel == 23){
        model.innerHTML = "+6";
    } else if(statel == 24 || statel == 25){
        model.innerHTML = "+7";
    } else if(statel == 26 || statel == 27){
        model.innerHTML = "+8";
    } else if(statel == 28 || statel == 29){
        model.innerHTML = "+9";
    } else if(statel == 30){
        model.innerHTML = "+10";
    } else{
        model.innerHTML = "error invalid entery";
    }
};
//Vewing Race Modifire
function Racemod(){
strnum.innerHTML = RaceImprovStr;
dexnum.innerHTML = RaceImprovDex;
connum.innerHTML = RaceImprovCon;
intnum.innerHTML = RaceImprovInt;
wisnum.innerHTML = RaceImprovWis;
chanum.innerHTML = RaceImprovCha;
};
//Pointbuy
var pointbuypoint = 27;
function buy(stat){
    var statis = document.getElementById(stat).innerHTML;
    if(pointbuypoint>0){
    if(statis == 8){
        pointbuypoint = pointbuypoint-1;
        document.getElementById(stat).innerHTML = 9;
    } else if(statis == 9){
        pointbuypoint = pointbuypoint-1;
        document.getElementById(stat).innerHTML = 10;
    } else if(statis == 10){
        pointbuypoint = pointbuypoint-1;
        document.getElementById(stat).innerHTML = 11;
    } else if(statis == 11){
        pointbuypoint = pointbuypoint-1;
        document.getElementById(stat).innerHTML = 12;
    } else if(statis == 12){
        pointbuypoint = pointbuypoint-1;
        document.getElementById(stat).innerHTML = 13;
    } else if(statis == 13){
        pointbuypoint = pointbuypoint-2;
        document.getElementById(stat).innerHTML = 14;
    } else if(statis == 14){
        pointbuypoint = pointbuypoint-2;
        document.getElementById(stat).innerHTML = 15;
    } else{
        alert(stat +" is aready at max.");
    }}
    else{
        alert("out of points");
    }
}
function sell(stat){
    var statis = document.getElementById(stat).innerHTML;
    if(pointbuypoint<27){
        if(statis == 15){
            pointbuypoint = pointbuypoint+2;
            document.getElementById(stat).innerHTML = 14;
        } else if(statis == 14){
            pointbuypoint = pointbuypoint+2;
            document.getElementById(stat).innerHTML = 13;
        } else if(statis == 13){
            pointbuypoint = pointbuypoint+1;
            document.getElementById(stat).innerHTML = 12;
        } else if(statis == 12){
            pointbuypoint = pointbuypoint+1;
            document.getElementById(stat).innerHTML = 11;
        } else if(statis == 11){
            pointbuypoint = pointbuypoint+1;
            document.getElementById(stat).innerHTML = 10;
        } else if(statis == 10){
            pointbuypoint = pointbuypoint+1;
            document.getElementById(stat).innerHTML = 9;
        } else if(statis == 9){
            pointbuypoint = pointbuypoint+1;
            document.getElementById(stat).innerHTML = 8;
        } else{
            alert(stat +" is aready at min.");
        }}else{
        alert("Full on points")
    }
}