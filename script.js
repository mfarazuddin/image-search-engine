const accesskey = "62DhExP1kuL6hEGlm0I1aGhaWtST3WKA6frQSF7Lllo"

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");
const copyright = document.getElementById("copy-right");

let keyword = "";
let page = 1;

async function searchimages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchresult.innerHTML = "";
    }
    const results = data.results;
    results.map((result)=>{
        
        const image = document.createElement("img");
        
        image.addEventListener("mouseover", ()=>{
            image.style.scale = "1.2"
            image.style.transition = "all ease 0.3s";
            
        });
        image.addEventListener("mouseout", ()=>{
            image.style.scale = "1";
            image.style.transition = "all ease 0.3s";
            
        });

        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        const imgdiv = document.createElement("div")
        imgdiv.appendChild(imagelink)
        searchresult.appendChild(imgdiv)
        imgdiv.style.overflow = "hidden"
        imgdiv.style.borderRadius = "10px"
        
    })
    showmorebtn.style.display = "block";
    copyright.style.display = "block";

    
};

searchform.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1; 
    searchimages()
})

showmorebtn.addEventListener("click", ()=>{
    page++;
    searchimages();
})

function changebg(color){
    document.body.style.background = color ;

    if(document.body.style.background === "darkslateblue" ){
        searchbox.style.border = "2px solid white"
        searchbox.style.borderTopLeftRadius = "10px"
        searchbox.style.borderBottomLeftRadius = "10px"
    }else{
        searchbox.style.border = "none"
        searchbox.style.borderRadius = "none"
    }
}






