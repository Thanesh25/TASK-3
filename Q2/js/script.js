function reqListener() {
    console.log(this.responseText);
    const arr=JSON.parse(this.responseText)
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].flags.png)
    }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
  