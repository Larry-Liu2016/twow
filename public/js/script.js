var id, sign, result, selected, i, used, element, lastElement;
selected=[[],[],[],[]];
used=[];
i=0;
var lastID=null;

var insertNumber = function(id, number){
    document.getElementById(id).append(`${number}`);
}

var select = function(id){
    $(document.getElementById(id)).fadeTo('fast', 1);
}

var reset = function(id) {
    $(document.getElementById(id)).fadeTo('fast', 0.6);
}

$(document).ready(function(){
    console.log('begin');
    $('.number, .temp').mouseenter(function() {
        console.log('element: ', this);
        id = $(this).attr('id');
        console.log('id is ', id);
        console.log('value: ', $(this).text(),'.',$(this).text().length);
        if ($.inArray(id, used)==-1&& $(this).text().length>7) {
            console.log(selected[0]);
            if(selected[i].length==0||sign==null){
                console.log('selected first');
                selected[i][0]=id;
                $(lastElement).fadeTo('fast', 0.6);
                $(this).fadeTo('fast', 1)
                
                lastID=id;
                lastElement=this;
            } 
            else if(selected[i][0]!= id) {
                selected[i][1]=id;
                $(this).fadeTo('fast', 0.3);
                $(lastElement).fadeTo('fast', 0.3);
                $(sign).fadeTo('fast', 0.6);
                var str = $(lastElement).text() + $(sign).text() + $(this).text();
                result = eval(str);
                console.log(`${str} = ${result}`);
                used.push(id, lastID);
                i++;
                insertNumber(i+4, result);
                sign=null;
                lastID=(i+4).toString();
                selected[i][0]=lastID;
                lastElement = document.getElementById(`${lastID}`)
                $(lastElement).fadeTo('fast',1);
                if(i==3) {
                    if(result == 24){
                        alert('You got 24');
                    } else alert('You failed. Try again');
                };
            }; 
        };  
    });

    $('.sign').mouseenter(function() {
        console.log('oversign');
        if (selected[i].length==1){
            $(sign).fadeTo('fast', 0.6);
            $(this).fadeTo('fast', 1);
            
            sign = this;
        }      
    });
})