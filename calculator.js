var input=document.querySelector("#input-number");
var squareKey=document.querySelector(".square");
var squareRootKey=document.querySelector(".square-root");
var clearKey=document.querySelector(".clear");
var clearAllKey=document.querySelector(".clear-all");
var aggregationKey=document.querySelector(".aggregation-key");
var subtractionKey=document.querySelector(".subtraction-key");
var divisionKey=document.querySelector(".division-key");
var multliplicationKey =document.querySelector(".multliplication-key"); 



clearAllKey.addEventListener("click",function(){
    input.value="";
});

clearKey.addEventListener("click",function(){
    input.value=input.value.substring(0,input.value.length-1);
});

squareKey.addEventListener("click",function(){
    input.value=Math.floor(Math.pow(input.value,2));
});

squareRootKey.addEventListener("click",function(){
    input.value=Math.floor(Math.sqrt(input.value));
});

function addText(element){
    input.value=input.value+element.textContent;
}

var sonuc=0;
var inputArray;

function showResult(){
       
    if(input.value.includes("X")){
        multliplication();
    }
    if(input.value.includes("+")){
        aggregation();
    }
    if(input.value.includes("÷")){
        division();
    }
    if(input.value.includes("-")){
        subtraction();
    }

    
}

function subtraction(){

    inputArray=input.value.split("-");
         
    for(let i=1;i<inputArray.length;i++){
        
        if(inputArray[0]!=""){
         sonuc+=Number(inputArray[0]);
         sonuc-=Number(inputArray[i]);    
        }
    }
    
    input.value=sonuc;
    sonuc=0; 
}

function aggregation(){

    inputArray=input.value.split("+");
         
    for(eleman of inputArray){
        
        if(eleman!=""){
         sonuc+=Number(eleman);
        }
    }
    
    input.value=sonuc;
    sonuc=0;
}

function division(){

    inputArray=input.value.split("÷");
         
    for(let i=1;i<inputArray.length;i++){
        
        if(inputArray[0]!=""){
         sonuc+=Number(inputArray[0]);
         sonuc/=Number(inputArray[i]);    
        }
    }
    
    input.value=sonuc;
    sonuc=0;
}

function multliplication(){

    inputArray=input.value.split("X");
         
    for(let i=1;i<inputArray.length;i++){
        
        if(inputArray[0]!=""){
         sonuc+=Number(inputArray[0]);
         sonuc*=Number(inputArray[i]);    
        }
    }
    
    input.value=sonuc;
    sonuc=0;
}