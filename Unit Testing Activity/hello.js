function Greet(name1){
  if (name1==""){
    return "Hello there!"
  }
  else if(typeof(name1)===typeof([]) && name1.length==2){
    return "Hello, " + name1[0] + ", " + name1[1]

  }
  else if(typeof(name1)===typeof([])){
    let stringToAdd=""
    for (i=0;i<name1.length;i++){
      stringToAdd=stringToAdd+ ", " + name1[i]
    }
    return "Hello" + stringToAdd

  }
  else if (name1==name1.toUpperCase()){
    return "HELLO " + name1+ "!"
  } 
  else{
    return "Hello, " + name1
  }
  

}
