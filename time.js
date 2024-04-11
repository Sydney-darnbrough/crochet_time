var date = new Date();
var currentDay = date.getDay();
var currentHour = date.getHours();

// console.log(currentDay);

// console.log(currentHour)

function YU(){

    if (currentDay >=1 && currentDay <=6 && currentHour >=12 && currentHour <= 18){
        yarn = 'Yarns Untangled is open';
    }else if (currentDay == 0 && currentDay == 6 && currentHour >= 11 && currentHour <= 17){
        yarn ='Yarns Untangled is open';
    }else {
        yarn ='Store is closed'
    }
    document.getElementById("var1").innerHTML = yarn;
}



function knitcafe(){
    if (currentDay >= 3 && currentDay <= 5 && currentHour >= 11 && currentHour <= 17){
        cafe ='The Knit Cafe is open'
    }else if (currentDay == 6 && currentHour >=11 && currentHour <= 17){
        cafe = 'The Knit Cafe is open'
    }else if (currentDay == 0 && currentHour >= 12 && currentHour <= 17){
        cafe = 'Store is closed'
    }else {
        cafe = 'Store is closed'
    }
    document.getElementById("var2").innerHTML = cafe;
}

function romni(){
    if (currentDay >= 1 && currentDay <= 3 && currentHour >= 11 && currentHour <= 18){
        rom = 'Romni Wool is open'
    }else if (currentDay >= 4 && currentDay <= 6 && currentHour >= 11 && currentHour <= 18){
        rom = 'Romni Wool is open'
    }else {
        rom = 'Store is closed'
    }
    document.getElementById('var3').innerHTML = rom;
}

function knitloft(){
    if (currentDay >= 1 && currentDay <= 6 && currentHour >= 11 && currentHour <= 17){
        loft = 'The Knitting Loft is open'
    }else if (currentDay == 0 && currentHour >= 11 && currentHour <= 4){
        loft = 'The Knitting Loft is open'
    }else {
        loft = 'Store is closed'
    }
    document.getElementById("var4").innerHTML = loft;
}

function yarnguy(){
    if (currentDay >= 0 && currentHour >= 11 && currentHour <= 17){
        guy = 'The Yarn Guy is open'
    }else {
        guy = 'Store is closed'
    }
    document.getElementById("var5").innerHTML = guy;
}

function knitom(){
    if (currentDay >=0 && currentHour >= 12 && currentHour <= 18){
        knito = 'knti-o-matic is open'
    }else { 
        knito = 'Store is closed'
    }
    document.getElementById("var6").innerHTML = knito;
}

function wollmill(){
    if (currentDay <= 1){
        mill = 'Store is closed'
    }else if (currentDay >=2 && currentDay <= 5 && currentHour >=11 && currentHour <= 18){
        mill = 'The Wool Mill is open'
    }else if (currentDay ==6 && currentHour >= 11 && currentHour <=16){
        mill = 'The Wool Mill is closed'
    } else {
        mill = 'Store is closed'
    }
    document.getElementById("var7").innerHTML = mill;
}

// 0 = sunday 6 = saturday

YU()
knitcafe()
romni()
knitloft()
yarnguy()
knitom()
wollmill()

// i am shocked i made this work lmfao 