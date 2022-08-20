let title: string = 'Tabata';
document.getElementById('app.title').innerHTML = title;





  let round = 1;
  let counter = 0;
  let set = 0;
  document.getElementById('app.round').innerHTML = 'Round:'+round.toString()
  let intervalId = setInterval(() => {
  counter += 1;

  if (counter<=20 && set==0){
    document.getElementById('app.set').innerHTML = 'PULA CAMPEAO';
    document.getElementById('app.counter').innerHTML = counter.toString();
  }
  else if(counter>=20 && set==0){
    
    set=1;
    counter=0;
  }
  else if(counter<=10 && set==1){
    document.getElementById('app.set').innerHTML = 'DESCANSA CHEFE';
    document.getElementById('app.counter').innerHTML = counter.toString();
    
  }
  else if(round<=7){
    set=0;
    counter=0;
    round=round+1;
    document.getElementById('app.round').innerHTML = 'Round:'+round.toString();
  }

  else {
    document.getElementById('app.set').innerHTML = 'ACABOU';
  }

 
}, 100);





/*
let intervalId = setInterval(() => {
  counter = counter + 1;
  if (set = 0) {
    document.getElementById('app.set').innerHTML = 'PULA CAMPEAO';
    document.getElementById('app.counter').innerHTML = counter.toString();
  } else {
    document.getElementById('app.set').innerHTML = 'DESCANSA AI CHAPA';
    counter = 0;
  }
}, 100);

document.getElementById('app.set').innerHTML = 'PULA CAMPEAO';
document.getElementById('app.counter').innerHTML = counter.toString();

console.log('Ola, Mundo.');
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/