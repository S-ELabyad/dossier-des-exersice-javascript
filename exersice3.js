
var salaire_brut;
function test(){
 salaire_brut = Number( document.getElementById("salaire").value);

}
var x;
function select(){
 x = Number( document.getElementById("cars").value);
   }
  var NbE;
function enfant() {
   NbE = Number( document.getElementById("NBE").value);
}
 var bns ;
 function bonus(){
   bns = Number( document.getElementById("bns").value);
 }

 var salaire_net;
 
 salaire_net = salaire_brut -((salaire_brut*(23-n)/100))
 

var n;
function presalaire() {
 n =0;
 if (x==1){
   if(NbE<3){
      n=2;
   }
   else if(NbE==3){
      n=3;
   }
   else n = 4 ;
}
else if(x==2){
  if(NbE<3){
     n=0;
  }
  else if(NbE==3){
     n=1;
  }
  else n = 2 ;
}
if(bns == 1){
   bonuss=1000;
}
else if(bns == 2){
   bonuss=1500;
}
var bonuss ;
salaire_net = salaire_brut -(salaire_brut*(23-n)/100)+bonuss ;


 document.getElementById("fin").value= salaire_net + "DH";
return salaire_net;
}