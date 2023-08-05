function changeContent(page, event) {
    event.preventDefault();
    let contentDiv = document.getElementById("project-content");
    let content = "";
    // console.log(`Changing content for page: ${page}`);
    switch (page) {
    case "figma":
        content = ` <div class="project-box one">
                    <div class="image-content" style="height: 100%;">
                        <img src="img/Front_View.jpg" alt="" style="object-fit: cover;">
                        <div class="img-content">
                            <p class="paragraph">Food Ordering App(Prototype)</p>
                            <p class="desc">Figma</p>
                        </div>
                    </div>       
                </div>`;
        break;
    case "graphic":
        content = "Graphic";
        break;
    case "java":
        content = "java";
        break;
    case "php":
        content = "php";
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


