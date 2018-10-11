
document.getElementById("myForm").addEventListener('submit', boorkmark);
function boorkmark(e){
    //save the bookMarker
    var siteName = document.getElementById("siteName").value;
    var siteUrl = document.getElementById("siteUrl").value;
    var textarea = document.getElementById("textarea").value;

  
    var bookMark = {
        name: siteName,
        url: siteUrl,
        textarea: textarea
    }


    if(localStorage.getItem('bookmarks')=== null){
        //Init array 
        var bookmarks = [];

        //Add to array 
        bookmarks.push(bookMark);

        //Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }
    else{
        //Get bookmarks from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        //Add bookmark to array
        bookmarks.push(bookMark);

        //Re-set back to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }

    


    //re-set data
    document.getElementById("myForm").reset();
    bookmarkFetch();
    //prevent default event from the form
    e.preventDefault();
  
}

//function delete
function deleteItem(url){

    //Get from localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    
    //Loop throught bookmarks
    for(var i=0;i<bookmarks.length; i++){
        if(bookmarks[i].url == url){
            //Remove from array
            bookmarks.splice(i, 1);   
            
        }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    bookmarkFetch();
    
}


function bookmarkFetch(){
    var collectionItem =  JSON.parse(localStorage.getItem("bookmarks"));
    console.log(collectionItem);

    //Get output id
    var myOutput = document.getElementById("myOutput");

    //Build Output
    myOutput.innerHTML = '';

    for(var i=0;i<collectionItem.length; i++){
       var  name = collectionItem[i].name;
       var url = collectionItem[i].url;
       


       myOutput.innerHTML += '<div class="card card-body bg-light"><h5>'
                                +name+
                                '</h5><span>'
                                +url+
                                '</span>'+
                                '<a onclick="deleteItem(\''+url+'\')" href="#" class="btn btn-danger">Delete</a></div>';
                              
                                
       
    }
    

 }