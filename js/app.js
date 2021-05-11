'use strict';

let userName;
let sport;
let swim;
let chec;
let CountryArr=['Canada','Turkey','Paris'];
let checkCountry;
let checkLetter;
let scour=0;
function question(){
userName=prompt('enter your name sweetie ' );
alert('hello '+userName);

let c=0;


sport=prompt('do you think I like doing sport? Y/N').toLowerCase();

if(sport==='yes'||sport==='y'){
    scour++;
    alert('good job, yes I like doning sport');
    
}else if(sport==='no'||sport==='n'||sport==='NO'||sport==='No'){
    alert('oh, sounds bad :( ');
}else{
    sport=prompt('do you think I like doing sport?'+' Y/N').toLowerCase();
    if(sport==='yes'||sport==='y'){
        scour++;
        alert('good job, yes I like doning sport');
        
    }else if(sport==='no'||sport==='n'||sport==='NO'||sport==='No'){
        alert('oh, sounds bad :( ');
    }  
}
swim=prompt('do think I can swim ? Y/N');
if(sport==='yes'||sport==='y'){
    alert(' oh,Unfortunately no I cant swim');
}else if(sport==='no'||sport==='n'){
    scour++;
}else{
    swim=prompt('do think I can swim ? Y/N');
    if(sport==='yes'||sport==='y'){
        alert(' oh,Unfortunately no I cant swim');
    }else if(sport==='no'||sport==='n'){
        scour++;
    }
}
chec=prompt('What do you think I prefer? Round in the sea or Go Fishing?','Round in the sea or Go Fishing?').toLowerCase();
    if(chec==='round in the sea'){
        scour++;
        alert('oh yes I like the sea very much :) ');
    }else if(chec==='go fishing'){
        alert('Unfortunately, I dont like fishing ');
    }else{
        chec=prompt('What do you think I prefer? Round in the sea or Go Fishing?','Round in the sea or Go Fishing?').toLowerCase();
        if(chec==='round in the sea'){
            scour++;
            alert('oh yes I like the sea very much :) ');
        }else if(chec==='go fishing'){
            alert('Unfortunately, I dont like fishing ');
        }
    }
    
let count=0;
  while(count<4){
    checkCountry=prompt('What do you think my favorate country choose one two are correct you have 4 attempts ','Canada, Turkey, Paris, UK ').toLowerCase();
    if(checkCountry==='canada'||checkCountry==='turkey'||checkCountry==='Canada'||checkCountry==='Turkey'){
        scour++;
        alert('Good job this one of my favorate country ');
        break;
    }else if(checkCountry==='paris'|| checkCountry==='uk'){
            alert('on, wrong answer you ca try again')
        }else{
            checkCountry=prompt('What do you think my favorate country Canada, Turkey, Paris, UK choose one two are correct','Canada, Turkey, Paris, UK ').toLowerCase();
            if(checkCountry==='Canada'||checkCountry==='Turkey'||checkCountry==='canada'||checkCountry==='turkey'){
                scour++;
                alert('Good job this one of my favorate country ');
            }else if(checkCountry==='paris'|| checkCountry==='uk'){
                    alert('on, wrong answer you ca try again')
            }         
        }
        count++;
  }
    let c2=0;
    while(c2<5){
        checkLetter=prompt('Enter letter from a-f choose one of these letters','a,b,c,d,e,f').toLowerCase();
        if(checkLetter==='d'||checkLetter==='D'){
            scour++;
            alert('Great Job');
            break;
        }else{
            checkLetter=prompt('Enter letter from a-f','a,b,c,d,e,f').toLowerCase();
        }
        c2++;
    }
    
}

question();
alert('Great '+userName+' Your scour is '+scour+' out of 4'+' Glad to have you in my wesite');
console.log(scour);