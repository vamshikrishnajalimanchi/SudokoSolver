let arr=[[5,3,,,7,,,,,],[6,,,1,9,5,,,,],[,9,8,,,,,6,,],[8,,,,6,,,,3,],[4,,,8,,3,,,1,],[7,,,,2,,,,6,],[,6,,,,,2,8,,],[,,,4,1,9,,,5,],[,,,,8,,,7,9,]];
//console.log(arr[0][0]);
let set1=new Set();
let set2=new Set();
let set3=new Set();
let set4=new Set();
let set5=new Set();
let set6=new Set();
let set7=new Set();
let set8=new Set();
let set9=new Set();
let objSetSize={};

let InObjwithVal=[{},{},{},{},{},{},{},{},{}];

let arrObjEmptyEle=[{},{},{},{},{},{},{},{},{}];

var undefinedElem=0;

let checker = (i,j)=>{
    if((i<3)&&(j<3)){
//1
        if(arr[i][j]!=undefined){
            set1.add(arr[i][j]);
            objSetSize['1']=set1.size;
            InObjwithVal[0][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[0][`${i}${j}`]=undefined;undefinedElem++}
    }else if((i<3)&&(j<6)&&(j>2)){
//2
        if(arr[i][j]!=undefined){
            set2.add(arr[i][j]);
            objSetSize['2']=set2.size;
            InObjwithVal[1][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[1][`${i}${j}`]=undefined;undefinedElem++}
    }else if((i<3)&&(j>5)){
//3 
        if(arr[i][j]!=undefined){
            set3.add(arr[i][j]);
            objSetSize['3']=set3.size;
            InObjwithVal[2][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[2][`${i}${j}`]=undefined;undefinedElem++}           
    }else if((i<6)&&(i>2)&&(j<3)){
//4 
        if(arr[i][j]!=undefined){
            set4.add(arr[i][j]);
            objSetSize['4']=set4.size;
            InObjwithVal[3][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[3][`${i}${j}`]=undefined;undefinedElem++}           
    }else if((i<6)&&(i>2)&&(j>2)&&(j<6)){
//5 
        if(arr[i][j]!=undefined){
            set5.add(arr[i][j]);
            objSetSize['5']=set5.size;
            InObjwithVal[4][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[4][`${i}${j}`]=undefined;undefinedElem++}           
    }else if((i<6)&&(i>2)&&(j>5)){
//6  
        if(arr[i][j]!=undefined){
            set6.add(arr[i][j]);
            objSetSize['6']=set6.size;
            InObjwithVal[5][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[5][`${i}${j}`]=undefined;undefinedElem++}        
    }else if((i>5)&&(j<3)){
//7  
        if(arr[i][j]!=undefined){
            set7.add(arr[i][j]);
            objSetSize['7']=set7.size;
            InObjwithVal[6][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[6][`${i}${j}`]=undefined;undefinedElem++}           
    }else if((i>5)&&(j<6)&&(j>2)){
//8  
        if(arr[i][j]!=undefined){
            set8.add(arr[i][j]);
            objSetSize['8']=set8.size;
            InObjwithVal[7][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[7][`${i}${j}`]=undefined;undefinedElem++}          
    }else if((i>5)&&(j>5)){
//9 
        if(arr[i][j]!=undefined){
            set9.add(arr[i][j]);
            objSetSize['9']=set9.size;
            InObjwithVal[8][`${i}${j}`]=arr[i][j];
        }else{arrObjEmptyEle[8][`${i}${j}`]=undefined;undefinedElem++}         
           }
        }
    
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        checker(i,j)//for initializing values
    }
}

while(undefinedElem>0){
arrObjEmptyEle.sort((a,b)=>Object.keys(a).length-Object.keys(b).length);

console.log(arrObjEmptyEle);
for(let k=0;k<arrObjEmptyEle.length;k++){console.log('mightVal to {}')
    let mightVal={};
    let setterOfBox=undefined;
    //console.log(arrObjEmptyEle[k]);
    for(let key in arrObjEmptyEle[k]){console.log('key is '+key);
        let valAdd = (i,j)=>{//console.log('ij'+i+j);
            if((i<3)&&(j<3)){
        //1
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set1.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            } 
            }else if((i<3)&&(j<6)&&(j>2)){
        //2
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set2.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i<3)&&(j>5)){
        //3       
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set3.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i<6)&&(i>2)&&(j<3)){
        //4 
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set4.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i<6)&&(i>2)&&(j>2)&&(j<6)){
        //5 
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set5.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }   
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i<6)&&(i>2)&&(j>5)){
        //6  
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set6.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i>5)&&(j<3)){
        //7  
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set7.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i>5)&&(j<6)&&(j>2)){
        //8  
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set8.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                            if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }else if((i>5)&&(j>5)){console.log('set')
        //9 
            for(let chkVal=1;chkVal<10;chkVal++){
                if(!set9.has(chkVal)){
                    let Xthere=false;
                    let Ythere=false;
                    for(let y=0;y<9;y++){
                        if(arr[i][y]==chkVal){Ythere=true;break}
                    }
                    if(Ythere==false){
                        for(let x=0;x<9;x++){
                        if(arr[x][j]==chkVal){Xthere=true;break}
                        }
                    }
                    if(Ythere==false&&Xthere==false){
                        if(!mightVal[chkVal]){mightVal[chkVal]=[[i,j]]}
                        else{mightVal[chkVal]=[...mightVal[chkVal],[i,j]]}
                    }
                }
            }
            }
        }
    valAdd(key[0],key[1])        
    }
    for(let key in mightVal){
        if(mightVal[key].length==1){console.log('might[key] key value '+key);
            //console.log('undef'+undefinedElem);
            let intX=parseFloat(mightVal[key][0][0]);
            let intY=parseFloat(mightVal[key][0][1]);
            console.log(intX,intY);
            arr[intX][intY]=parseFloat(key);
            //console.log(arr[mightVal[key][0][0]][mightVal[key][0][1]]);
            undefinedElem--;
            //console.log(mightVal[key][0]);
            checker(intX,intY);
            delete mightVal[key];
            //console.log(k)
            //console.log(arrObjEmptyEle[k]);
            delete arrObjEmptyEle[k][`${intX}${intY}`];
            //console.log(arrObjEmptyEle[k]);
            //console.log(k);
        }
    }
}
}
console.log(arr);
// let keys=Object.keys(arrObjEmptyEle[0]);
// console.log(typeof(keys[0])); 
// for(let k=1;k<=9;k++){
//     //nam=`set${k}`
//     //obj=JSON.parse(nam)
//     //siz=set`${k}`.size
//     //console.log(siz);
//     arr.push()}

// //function to check particular number to be added at that position
// let checker1 = ()=>{
//     for(let i=0;i<9;i++){
//         for(let j=0;j<9;j++){
//            // console.log(arr[i][j])
//            //initalizing set for x elements and y elements
//            let setx=new Set();
//            let sety=new Set();

//            if((i<3)&&(j<3)){
// //1

// if(arr[i][j]==undefined){
//     for(let k=0;k<9;k++){
//         if(arr[i][k]!=undefined){setx.add(arr[i][k])}
//         if(arr[k][j]!=undefined){sety.add(arr[i][k])}
//     }
//     //below for is to check number to position at that place
//     for(let num=1)
// }//to remove elements from setx and sety
// setx.clear();
// sety.clear();
//            }else if((i<3)&&(j<6)&&(j>2)){
// //2
// if(arr[i][j]!=undefined){
//     set2.add(arr[i][j]);
// //console.log(arr[i][j])
// }
//            }else if((i<3)&&(j>5)){
// //3 
// if(arr[i][j]!=undefined){
//     set3.add(arr[i][j]);
// //console.log(arr[i][j])
// }           
//            }else if((i<6)&&(i>2)&&(j<3)){
// //4 
// if(arr[i][j]!=undefined){
//     set4.add(arr[i][j]);
// //console.log(arr[i][j])
// }           
//            }else if((i<6)&&(i>2)&&(j>2)&&(j<6)){
// //5 
// if(arr[i][j]!=undefined){
//     set5.add(arr[i][j]);
// //console.log(arr[i][j])
// }           
//            }else if((i<6)&&(i>2)&&(j>5)){
// //6  
// if(arr[i][j]!=undefined){
//     set6.add(arr[i][j]);
// //console.log(arr[i][j])
// }          
//            }else if((i>5)&&(j<3)){
// //7  
// if(arr[i][j]!=undefined){
//     set7.add(arr[i][j]);
// //console.log(arr[i][j])
// }          
//            }else if((i>5)&&(j<6)&&(j>2)){
// //8  
// if(arr[i][j]!=undefined){
//     set8.add(arr[i][j]);
// //console.log(arr[i][j])
// }          
//            }else if((i>5)&&(j>5)){
// //9 
// if(arr[i][j]!=undefined){
//     set9.add(arr[i][j]);
// //console.log(arr[i][j])
// }           
//            }
//         }
//     }
//     a=1;
//     b=2;
//     obj={};
//     obj[`${a}${b}`]=`${a}${b}`;
//     obj[13]='vam';
//     //let set1=new Set();
//     //console.log(obj);
// }
// checker1()