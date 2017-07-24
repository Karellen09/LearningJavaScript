function trigger(){
	var x = parseInt(document.getElementById("a").value);
	var y = parseInt(document.getElementById("b").value);
	document.getElementById("result").innerHTML = Math.sqrt(Sum(Squared(x), Squared(y)));
}

function Sum(x, y){
	return x+y;
}

function Squared(x){
	return x*x;
}

document.getElementById('file').onchange = function(){

  var file = this.files[0];
  var arr = [];
  var reader = new FileReader();
  reader.onload = function(progressEvent){
	// Entire file
	//console.log(this.result);

	// By lines
	var lines = this.result.split('\n');
	for(var line = 0; line < lines.length; line++){
		arr.push(lines[line].split(" "));
	}
	//console.log(arr);
	var query = document.getElementById("name").value;
	for(var i = 0; i<arr.length; i++){
		if(arr[i][0] == query){
			console.log(arr[i]);
			document.getElementById("result").innerHTML = "My name is "+arr[i][0]+" and I am "+arr[i][1]+" years old, and I work for "+arr[i][2];
		}
	}
	
  };
  reader.readAsText(file);
};