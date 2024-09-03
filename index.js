



//OUTPUT AREA
const getOUTput=document.getElementById('calculate').addEventListener('click',()=>{



 let age=document.getElementById('age').value;
  let weight=document.getElementById('weight').value;
  let height=document.getElementById('height').value/100;
  
   age=Number(age);
  weight=Number.parseFloat(weight);
  height=Number.parseFloat(height);
  
  
  const BMI=weight/(height*height);
  const bmistanderd=getfinalBMI();
  


const textarea=document.getElementById('text');
textarea.innerHTML=`<p>your age is:${age}</p>
                    <p>your BMI is:${BMI.toFixed(1)}</p>
                    <P>you are :${bmistanderd}</P>

`


function getfinalBMI(){
  if(BMI<18.5){
    return'underweight';
  }
  else if(BMI>=18 && BMI<25){
   return 'normal weight';
  }
  else if(BMI>=25 && BMI<30){
    return 'over weight';
  }
  
 /* else{
    return'obesity'
  }*/
 else{
return `obisity or <span style="color:rgb(13, 250, 171);text-decoration:none">'fill up above requairment'</span>`;


 }
  

}












})


/*function getBMIcatagory(bmi){
  if(bmi<18.5){
    return'underweight'
  }
}

getBMIcatagory(BMI)*/



