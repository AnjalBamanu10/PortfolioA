function changeContent(page, event) {
    event.preventDefault();
    let contentDiv = document.getElementById("project-content");
    let content = "";
    // console.log(`Changing content for page: ${page}`);
    switch (page) {
    case "figma":
        content = `   <div style="display:flex;flex-direction:column;" onclick="modalClick()">
        <div class="project-box three">
            <div class="image-content" style="height: 100%;width:100%;">
                <img src="img/Ecommerce_Website.jpg" alt="" style="object-fit: cover;">
                <div class="img-content" >
                    <p class="paragraph" style="color:white">E-Commerce Website</p><br>
                    <p class="desc" style="color:white">Figma</p>
                </div>
            </div>       
         </div>
         <div class="buttons project">
         <h2 class="pbtn"><a target="_blank" href="https://www.figma.com/file/2ATj8rp7lNCLhDFaU8Xa9H/Food-Ordering-App?type=design&node-id=0%3A1&mode=design&t=i0qAkCjpZxn4D5N7-1">Preview</a></h2>
         </div>
    </div>
                    <div style="display:flex;flex-direction:column;">
                    <div class="project-box three">
                        <div class="image-content" style="height: 100%;width:100%;">
                            <img src="img/Front_View.jpg" alt="" style="object-fit: cover;">
                            <div class="img-content" >
                                <p class="paragraph" style="color:white">Food Ordering App(Prototype)</p><br>
                                <p class="desc" style="color:white">Figma</p>
                            </div>
                        </div>       
                     </div>
                     <div class="buttons project">
                     <h2 class="pbtn"><a target="_blank" href="https://www.figma.com/file/2ATj8rp7lNCLhDFaU8Xa9H/Food-Ordering-App?type=design&node-id=0%3A1&mode=design&t=i0qAkCjpZxn4D5N7-1">Preview</a></h2>
                     </div>
                </div>

                <div style="display:flex;flex-direction:column;">
                    <div class="project-box three">
                        <div class="image-content" style="height: 100%;width:100%;">
                            <img src="img/Fitness.png" alt="" style="object-fit: contain;">
                            <div class="img-content" >
                                <p class="paragraph" style="color:white">Fitness Tracker(Ongoing Project)</p><br>
                                <p class="desc" style="color:white">Figma</p>
                            </div>
                        </div>       
                     </div>
                     <div class="buttons project">
                     <h2 class="pbtn"><a target="_blank" href="https://www.figma.com/file/EiZAEJcBghxSud4sz9mtLa/Fitness-Track?type=design&node-id=0%3A1&mode=design&t=6Z0XXPpt3xgDUYng-1">Preview</a></h2>
                     </div>
                </div>
            `;
        break;
    case "graphic":
         content =`       <div style="display:flex;flex-direction:column;">
         <div class="project-box three">
             <div class="image-content" style="height: 100%;width:100%;">
                 <img src="img/Front_View.jpg" alt="" style="object-fit: cover;">
                 <div class="img-content" >
                     <p class="paragraph" style="color:white">fitness Tracker(Ongoing Project)</p><br>
                     <p class="desc" style="color:white">Figma</p>
                 </div>
             </div>       
          </div>
          <div class="buttons project">
          <h2 class="pbtn"><a target="_blank" href="https://www.figma.com/file/2ATj8rp7lNCLhDFaU8Xa9H/Food-Ordering-App?type=design&node-id=0%3A1&mode=design&t=i0qAkCjpZxn4D5N7-1">Preview</a></h2>
          </div>
     </div>
    `;

        break;

    case "java":
          content = `   <div style="display:flex;flex-direction:column;">
          
          <div style="display:flex;flex-direction:column;">
          <div class="project-box4">
              <div class="image-content" style="height: 100%;width:100%;">
                  <img src="img/BrickBreaker.jpg" alt="" style="object-fit: cover;">
                  <div class="img-content" >
                      <p class="paragraph" style="color:white">Food Ordering App(Prototype)</p><br>
                      <p class="desc" style="color:white">Figma</p>
                  </div>
              </div>       
           </div>
           <div class="buttons project">
           <h2 class="pbtn"><a target="_blank" href="https://www.figma.com/file/2ATj8rp7lNCLhDFaU8Xa9H/Food-Ordering-App?type=design&node-id=0%3A1&mode=design&t=i0qAkCjpZxn4D5N7-1">Preview</a></h2>
           </div>
      </div>
      `;
        break;
    case "php":
        content = `   <div style="display:flex;flex-direction:column;">
          
        <div style="display:flex;flex-direction:column;">
        <div class="project-box4">
            <div class="image-content" style="height: 100%;width:100%;">
                <img src="img/Suvidha.png" alt="" style="object-fit: cover;">
                <div class="img-content" >
                    <p class="paragraph" style="color:white">Food Ordering App(Prototype)</p><br>
                    <p class="desc" style="color:white">Figma</p>
                </div>
            </div>       
         </div>
         <div class="buttons project">
         <h2 class="pbtn"><a target="_blank" href="https://www.figma.com/file/2ATj8rp7lNCLhDFaU8Xa9H/Food-Ordering-App?type=design&node-id=0%3A1&mode=design&t=i0qAkCjpZxn4D5N7-1">Preview</a></h2>
         </div>
    </div>
    `;
        break;
    default:
        content = "Some error occured. Please try again!";
       
        break;
    }
    contentDiv.innerHTML = content;
}

function activeLink(page){
    let current = page;
    let projectLinks = document.getElementsByClassName("pl");
    let pl = Array.from(projectLinks);
    pl.forEach((e) => {
        e.classList.remove("active");
        if(e.href.includes(current)){
            e.classList.add("active");
        }else{
            e.classList.remove("active");
        }
    });
}

function modalClick(){
    let modal = document.getElementById("modalbtn").click();
}


