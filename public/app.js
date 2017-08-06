var app = function(){
  var url = "https://api.iextrading.com/1.0";
  
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
  var stocks = JSON.parse(jsonString);
  populateList(stocks);
};

var populateList = function(stocks){
  var ul = document.getElementById('stock-list');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  stocks.forEach(function(stock){
    var li = document.createElement('li');
    li.innerText = stock.companyName;
    ul.appendChild(li);
    var li2 = document.createElement("li");
    li2.src = stock.symbol;
    li.appendChild(li2)
  })
}
window.addEventListener('load', app);