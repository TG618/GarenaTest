
//封装自定义ajax请求
export function ajax(options){
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else if(window.ActiveObject){
        // eslint-disable-next-line
        xhr=new ActiveXobject('Microsoft.XMLHTTP');
    }
    
    //Get
    if(options.type === "get"){
        xhr.open("GET", options.url, true);
        xhr.send(null);
    }
    
    //onReady
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            var status=xhr.status;
            if(status>=200&& status<300 || status==304){
            options.success && options.success(JSON.parse(xhr.responseText,xhr.responseXML));
            }else{
                options.error && options.error(status);
            }
        }
    }
}

