function sendRequest(url,data,sCallBack){
    $.ajax({
        type:"GET",
        url:"http://localhost:8831/"+url,
        dataType:"jsonp",
        jsonp:"callback",
        jsonpCallback:"successCallback"+new Date().getMilliseconds(),
        data:data,
        success:function(sData){
            sCallBack(sData)
        },
        error:function(err){
            console.log(err);
        }
    });
}



$(function(){

    sendRequest("getRecentTerm",{},function(data){
        console.log(data);
        var result = data[0];
        $("#tickettermandtime").text("("+result.ticketterm+"/"+result.ticketdate+")");
        $("#ticket01").text(result.ticket01);
        $("#ticket02").text(result.ticket02);
        $("#ticket03").text(result.ticket03);
        $("#ticket04").text(result.ticket04);
        $("#ticket05").text(result.ticket05);
        $("#ticket06").text(result.ticket06);
        $("#ticket07").text(result.ticket07);
    })
    sendRequest("getRecentTenTerm",{},function(data){
        console.log(data);
    })

    // $.ajax({
    //     type:"GET",
    //     url:"http://localhost:8831/getRecentTerm",
    //     dataType:"jsonp",
    //     jsonp:"callback",
    //     jsonpCallback:"successCallback",
    //     data:{},
    //     success:function(data){
    //         console.log(data);
    //         var result = data[0];
    //         $("#tickettermandtime").text("("+result.ticketterm+"/"+result.ticketdate+")");
    //         $("#ticket01").text(result.ticket01);
    //         $("#ticket02").text(result.ticket02);
    //         $("#ticket03").text(result.ticket03);
    //         $("#ticket04").text(result.ticket04);
    //         $("#ticket05").text(result.ticket05);
    //         $("#ticket06").text(result.ticket06);
    //         $("#ticket07").text(result.ticket07);
    //     },
    //     error:function(err){
    //         console.log(err);
    //     }
    // });
    // $.ajax({
    //     type:"GET",
    //     url:"http://localhost:8831/getRecentTenTerm",
    //     dataType:"jsonp",
    //     jsonp:"callback",
    //     jsonpCallback:"successCallback",
    //     data:{},
    //     success:function(data){
    //         console.log(data);
    //     },
    //     error:function(err){
    //         console.log(err);
    //     }
    // });
});