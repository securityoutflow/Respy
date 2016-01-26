/* Respy, your free responsive platform. Author : Yessine Taktak */
var width, height;
var elements = [];
var menus = [];
function preload() {
	var head  = document.getElementsByTagName('head')[0];
	var stylesheet  = document.createElement('style');
	stylesheet.innerHTML = ".respyhidden { display : none; } .respyshown { display : block; }";
	head.appendChild(stylesheet);
}
window.onload = function() {
	preload();
	width = window.innerWidth;
	height = window.innerHeight;
    var  i = elements.length;
    var j = menus.length;
	while(i--) {
		switch(elements[i].prop.elem) {
			case "text":
			    var compressor = width/elements[i].prop.compressor;
		        if(compressor<elements[i].prop.min && elements[i].prop.min != "") {
			        var difference = elements[i].prop.min-compressor;
			        compressor = compressor + difference;
		        }
		        if(compressor>elements[i].prop.max && elements[i].prop.max != "") {
			        var difference = compressor-elements[i].prop.max;
			        compressor = compressor - difference;
		        }	    
		        var prefix = elements[i].elem.substring(0,1);
		        if(prefix == "#") {
		        	var id = elements[i].elem.slice(1);
		        	document.getElementById(id).setAttribute("style", "font-size : "+compressor+"px;");
		        } else if(prefix == ".") {
		        	var id = elements[i].elem.slice(1);
		        	document.getElementsByClassName(id)[0].setAttribute("style", "font-size : "+compressor+"px;");
		        }
		        break;
		    case "block":
	            var compressor1 = width/elements[i].prop.compressor;
	            var compressor2 = height/elements[i].prop.compressor;    
		        if(compressor1<elements[i].prop.min && elements[i].prop.min != "") {
			        var difference = elements[i].prop.min-compressor1;
			        compressor1 = compressor1 + difference;
		        }
		        if(compressor1>elements[i].prop.max && elements[i].prop.max != "") {
			        var difference = compressor1-elements[i].prop.max;
			        compressor1 = compressor1 - difference;
		        }	
		        if(compressor2<elements[i].prop.min && elements[i].prop.min != "") {
			        var difference = elements[i].prop.min-compressor2;
			        compressor2 = compressor2 + difference;
		        }
		        if(compressor2>elements[i].prop.max && elements[i].prop.max != "") {
			        var difference = compressor2-elements[i].prop.max;
			        compressor2 = compressor2 - difference;
		        }
		        var prefix = elements[i].elem.substring(0,1);
		        if(prefix == "#") {
		        	var id = elements[i].elem.slice(1);
		        	var style = "width : "+compressor1+"px; height : "+compressor2+"px;";
		        	document.getElementById(id).setAttribute("style", style);
		        } else if(prefix == ".") {
		        	var id = elements[i].elem.slice(1);
		        	var style = "width : "+compressor1+"px; height : "+compressor2+"px;";
		        	document.getElementsByClassName(id)[0].setAttribute("style", style);
		        }
		        break;	         
		}
	}
	while(j--) {
        var prefix1 = menus[j].norm.substring(0,1);
        var prefix2 = menus[j].resp.substring(0,1);
        if(prefix1 == "#") {
            var id = menus[j].norm.slice(1);
            var obj = document.getElementById(id);
        } else if(prefix1 == ".") {
            var id = menus[j].norm.slice(1);
            var obj = document.geElementsByClassName(id)[0];
        }
        if(prefix2 == "#") {
            var id = menus[j].resp.slice(1);
            var obj2 = document.getElementById(id);
        } else if(prefix2 == ".") {
            var id = menus[j].resp.slice(1);
            var obj2 = document.geElementsByClassName(id)[0];
        }
		if(width >= menus[j].limit) {
            obj.setAttribute("style", "display : none;");
            obj2.setAttribute("style", "display : block;");
		} else {
            obj.setAttribute("style", "display : block;");
            obj2.setAttribute("style", "display : none;");
		}
	}
}
window.onresize = function() {
	width = window.innerWidth;
	height = window.innerHeight;
	var  i = elements.length;
	var j = menus.length;
	while(i--) {
		switch(elements[i].prop.elem) {
			case "text":
			    var compressor = width/elements[i].prop.compressor;
		        if(compressor<elements[i].prop.min && elements[i].prop.min != "") {
			        var difference = elements[i].prop.min-compressor;
			        compressor = compressor + difference;
		        }
		        if(compressor>elements[i].prop.max && elements[i].prop.max != "") {
			        var difference = compressor-elements[i].prop.max;
			        compressor = compressor - difference;
		        }	    
		        var prefix = elements[i].elem.substring(0,1);
		        if(prefix == "#") {
		        	var id = elements[i].elem.slice(1);
		        	document.getElementById(id).setAttribute("style", "font-size : "+compressor+"px;");
		        } else if(prefix == ".") {
		        	var id = elements[i].elem.slice(1);
		        	document.getElementsByClassName(id)[0].setAttribute("style", "font-size : "+compressor+"px;");
		        }
		        break;
		    case "block":
	            var compressor1 = width/elements[i].prop.compressor;
	            var compressor2 = height/elements[i].prop.compressor; 
		        if(compressor1<elements[i].prop.min && elements[i].prop.min != "") {
			        var difference = elements[i].prop.min-compressor1;
			        compressor1 = compressor1 + difference;
		        }
		        if(compressor1>elements[i].prop.max && elements[i].prop.max != "") {
			        var difference = compressor1-elements[i].prop.max;
			        compressor1 = compressor1 - difference;
		        }	
		        if(compressor2<elements[i].prop.min && elements[i].prop.min != "") {
			        var difference = elements[i].prop.min-compressor2;
			        compressor2 = compressor2 + difference;
		        }
		        if(compressor2>elements[i].prop.max && elements[i].prop.max != "") {
			        var difference = compressor2-elements[i].prop.max;
			        compressor2 = compressor2 - difference;
		        }   
		        var prefix = elements[i].elem.substring(0,1);
		        if(prefix == "#") {
		        	var id = elements[i].elem.slice(1);
		        	var style = "width : "+compressor1+"px; height : "+compressor2+"px;";
		        	document.getElementById(id).setAttribute("style", style);
		        } else if(prefix == ".") {
		        	var id = elements[i].elem.slice(1);
		        	var style = "width : "+compressor1+"px; height : "+compressor2+"px;";
		        	document.getElementsByClassName(id)[0].setAttribute("style", style);
		        }
		        break;	        
		}
	}
	while(j--) {
        var prefix1 = menus[j].norm.substring(0,1);
        var prefix2 = menus[j].resp.substring(0,1);
        if(prefix1 == "#") {
            var id = menus[j].norm.slice(1);
            var obj = document.getElementById(id);
        } else if(prefix1 == ".") {
            var id = menus[j].norm.slice(1);
            var obj = document.geElementsByClassName(id)[0];
        }
        if(prefix2 == "#") {
            var id = menus[j].resp.slice(1);
            var obj2 = document.getElementById(id);
        } else if(prefix2 == ".") {
            var id = menus[j].resp.slice(1);
            var obj2 = document.geElementsByClassName(id)[0];
        }
		if(width >= menus[j].limit) {
            obj.setAttribute("style", "display : none;");
            obj2.setAttribute("style", "display : block;");
		} else {
            obj.setAttribute("style", "display : block;");
            obj2.setAttribute("style", "display : none;");
		}
	}
}
var respy = function(elemid, proprities) {
	if(proprities.compressor == "") {
		proprities.compressor = 25;
	}
	if(proprities.elem == "") {
		proprities.elem = "text";
	} 
	var element = {
		elem : elemid,
		prop : proprities
	}
	elements.push(element);
}
var menu = function(menu, responsive, minwidth) {
    men = {
    	norm : menu,
    	resp : responsive,
    	limit : minwidth
    }
    menus.push(men);
}
