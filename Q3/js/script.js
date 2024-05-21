function reqListener() {
    console.log(this.responseText);
    const arr=JSON.parse(this.responseText)
    for(let i=0; i<arr.length; i++){
        console.table(arr[i].name.common)
        console.table(arr[i].region)
        console.table(arr[i].subregion)
        console.table(arr[i].population)
    }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  