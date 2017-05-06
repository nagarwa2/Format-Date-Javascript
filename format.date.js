var twoDigit = function(){
  var number = String(arguments[0]);
    number = number.length === 1 ? "0" + number : number;
    return number;
}
var getDayName = function(){
  var day = arguments[0];
    var dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return dayNames[day];
}
var getMonthName = function(){
  var month = arguments[0];
    var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
    return monthNames[month];
}
var dateFormat = function(){
	var formattedDate = "";
	var date = new Date();
  var format = "MM/DD/YYYY";
	if(arguments.length >= 1 && arguments[0] !== ""){
    	if(typeof arguments[0] === "object"){
    		date = arguments[0];
        }else if(typeof arguments[0] === "string"){
        	date = new Date(arguments[0]);
        }
  }
	if(arguments.length === 2 && arguments[1] !== ""){
    	format = arguments[1];
  }
  if(date == "Invalid Date"){
    return "Invalid Date";
  }
    
  var constructDate = function(){
      var breakFormat = format.split(" ");
        var j = 0;
        for(j=0;j<breakFormat.length;j++){
          if(breakFormat[j].indexOf("/") >= 0 || breakFormat[j].indexOf("-") >= 0){
            var dateF = breakFormat[j];
            dateF = dateF.split(arguments[0]);
            for(i=0;i<dateF.length;i++){
                if(dateF[i].indexOf("M") >= 0){
                    formattedDate += twoDigit(date.getMonth()+1);
                }else if(dateF[i].indexOf("D") >= 0){
                    formattedDate += twoDigit(date.getDate());
                }else if(dateF[i].indexOf("Y") >= 0){
                    formattedDate += date.getFullYear();
                }
                if(i !== dateF.length-1){
                    formattedDate+= arguments[0];
                }
            }
            formattedDate += " ";
          }else if(breakFormat[j].indexOf(":") >= 0){
            var timeF = breakFormat[j];
            timeF = timeF.split(arguments[1]);
            i = 0;
            for(i=0;i<timeF.length;i++){
                if(timeF[i].indexOf("H") >= 0){
                    formattedDate += twoDigit(date.getHours());
                }else if(timeF[i].indexOf("M") >= 0){
                    formattedDate += twoDigit(date.getMinutes());
                }else if(timeF[i].indexOf("S") >= 0){
                    formattedDate += twoDigit(date.getSeconds());
                    if(timeF[i].indexOf(".") >= 0){
                    formattedDate += "." + date.getMilliseconds();
                    }
                }
                if(i !== timeF.length-1){
                    formattedDate+= arguments[1];
                }
            }    
          }else if(breakFormat[j].indexOf("Z") >= 0){
            formattedDate += " " + date.toString().split(" ")[6];
          }else if(breakFormat[j].indexOf("m") >= 0){
            formattedDate += getMonthName(date.getMonth()) + " ";
          }else if(breakFormat[j].indexOf("d") >= 0){
            formattedDate += getDayName(date.getDay()) + " ";
          }else if(breakFormat[j].indexOf("D") >= 0){
            formattedDate += twoDigit(date.getDate()) + " ";
          }else if(breakFormat[j].indexOf("Y") >= 0){
            formattedDate += date.getFullYear() + " ";
          }
        }
  }
  if(format.indexOf("/") >= 0 && format.indexOf(":") >= 0){
    constructDate("/",":");
  }else if(format.indexOf("-") >= 0 && format.indexOf(":") >= 0){
    constructDate("-",":");
  }else if(format.indexOf("/") >= 0){
      constructDate("/");
  }else if(format.indexOf("-") >= 0){
      constructDate("-");
  }else{
    constructDate();
  }
  return formattedDate;
}
