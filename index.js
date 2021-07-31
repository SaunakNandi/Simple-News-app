//5d909a7ebefc472da4c54c93886ffe3d

//Initialise the news parameters
source='bbc-news';
let apiKey='5d909a7ebefc472da4c54c93886ffe3d'

//grab the news container
let newsAccordian=document.getElementById('newsAccordian')


fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => show(data));

function show(data)
{
  let newsHtml="";
  let article=data['articles']
  console.log(article)
  let ind=0;
  article.forEach(function(element,index)
  { 
    //console.log(article[news]);
    /*.<a href="${element['url']}" target="_blank">Read more here*/
   
    if(element['content']!=null)
    {
      ind=ind+1;
      let news=`
              <div class="card">
              <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                  <b style="color: black; margin-right:10px">${ind} >></b>   ${element['title']}
                  </button>
                </h2>
              </div>

              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                <div class="card-body">
                  ${element['content']}.<a href="${element['url']}" target="_blank">Read more here
                  
                </div>
              </div>
              </div>  `;
        newsHtml+=news;
    }
  });
  newsAccordian.innerHTML=newsHtml;
}

