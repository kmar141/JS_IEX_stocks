var app = function(){
  var url = "http://api.fixer.io/latest";
  
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var currency = JSON.parse(jsonString);
  console.log(currency)
  populateList(currency);
};

var populateList = function(currency){
  var ul = document.getElementById('stock-list');

  for(var key in currency.rates){
        var li = document.createElement('li');
        li.innerText = key + ": " + currency.rates[key];
        ul.appendChild(li);
      }
  var h1 = document.getElementById('h1');
  h1.innerText = currency.base + " price " + " on " + currency.date;

}
window.addEventListener('load', app);