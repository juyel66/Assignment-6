const loadCategory = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json();
    // console.log(data.posts)


    // =======================================
    const musicCodingContainer = document.getElementById('music-coding-container')
    // data show and using forEach loop
    data.posts.forEach((post) => {
        // console.log(post) =========show all data/array
        const musicCoding = document.createElement("div")
        musicCoding.innerHTML=`        <div class="bg-[#F3F3F5] p-10 rounded-xl">
        <div id = "active" class="avatar online ">
            <div class="w-24 rounded-full">
                <img src="${post.image}" />
               
            </div>
        </div>
        <div>
            <div class="flex gap-10 mb-5">
                <p class="lg:text-xs lg:font-medium lg:font-inter">${post.category}</p>
                <p class="lg:text-xs lg:font-medium lg:font-inter">Author: ${post.author.name}</p>
            </div>
            <h1 class="lg:text-2xl lg:font-bold lg:font-mulish">${post.title}</h1>
            <p class="lg:py-6 lg:text-xs lg:font-medium lg:font-inter">${post.description}</p>

            <hr class="lg:w-full lg:border-2 lg:border-dotted">

            <div class="flex justify-between items-center">
                <div class="flex gap-10 mt-5">
                    <div class="flex gap-2 items-center">
                        <p><img src="images/comment.svg" alt=""></p>
                        <p>${post.view_count}</tp>
                    </div>
                    <div class="flex gap-2 items-center">
                        <p><img src="images/i.svg" alt=""></p>
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <p><img src="images/clock.svg" alt=""></p>
                        <p>${post.posted_time}</p>
                    </div>
                  

                </div>
                <div class="text-green-600 text-xl ml-3 mt-5">
                    <button onclick= "titleContent('${post.title}' ,'${post.view_count}')">  <div>
                      <img src="images/mail.svg" alt="">
                    </div></button>
                </div>
            </div>
        </div>
    </div>`;

    musicCodingContainer.appendChild(musicCoding);

   

    

    })




    



}
loadCategory();


function titleContent(num1,num2){
    const titleContent = document.getElementById('title-card')
    const div = document.createElement("div")
    div.innerHTML=`        <div class="card-body">
         
    <div class="flex gap-6">
      <div>
        <p class="text-lg">${num1}</p>
      </div>
      <div class="flex gap-2 items-center justify-center">
        <img class="" src="images/i.svg" alt="">
        <h1>${num2}</h1>
      </div>

    </div>

  </div> `; 

  titleContent.appendChild(div);


}




const loadLatests = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await response.json();
    // console.log(data)


    const latestPost = document.getElementById('latest-post')
    for(const item of data){
        console.log(item)
        const card = document.createElement("div")
        card.classList=` card  bg-base-100 shadow-xl `;

        card.innerHTML=`
        
        <figure class="px-10 pt-10">
          <img src="${item.cover_image}" alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="flex ml-9 gap-2">
          <img src="images/Frame (2).png" alt="">
          <h1>${item.author?.posted_date || "No publish date"}</h1>
        </div>
        <div class="ml-9 p-3">
          <h1 class="font-extrabold">${item.title}</h1>
          <h1>${item.description}</h1>
        </div>
        <div class="flex gap-4 ml-9 p-3">
          <div>
            <img class="h-[50px] w-[50px] rounded-full  "  src="${item.profile_image}" alt="">
          </div>
          <div>
            <h1 class=" font-extrabold">${item.author.name}</h1>
            <h1>${item.author?.designation || "Unknown"}</h1>
          </div>
        </div>
        
        `;
        latestPost.appendChild(card);





        

    }



}
loadLatests();


