$(document).ready(function(){
    var apiBase = "https://jsonplaceholder.typicode.com/photos/";
    var i = 0;
    axios.get(apiBase).then(function(response){
        $('#btn').on('click',function(){
            i++;
            var addr= apiBase+i;
            axios.get(addr).then(function(response){
            setTimeout(function(){
                var title = response.data.title;
                var url = response.data.url;
                var thumbnailUrl = response.data.thumbnailUrl;

                var $url= $('<img>').attr("src",url).attr("alt",thumbnailUrl);
                var $title = $('<p>').html(title);
                $('#task').html([$url,$title]);
            },1000);   
        })
    })
})
})
