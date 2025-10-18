var allMenu=[
    {img:"images/Shawarma.jpg", name:"Shawarma"},
    {img:"images/parota1.jpg", name:"Grill"},
    {img:"images/Chicken biryani.jpg", name:"Biriyani"},
    {img:"images/fish finger.jpg", name:"Fish Finger"},
    {img:"images/grill.png", name:"Grill"},
    {img:"images/french-fry1.jpg", name:"French Fry"},
    {img:"images/Burger2.jpg", name:"Burger"},
    {img:"images/Chilli parota.jpg", name:"Chilli Parota"}    
]

allMenu.map((a=>{
    var menu= document.getElementById("menu")
    var content=""
    content=`
    
     <div class=" col-12 col-md-4 col-lg-3 mb-5">
      <div class="card fd-menu-img" data-aos="zoom-in" data-aos-duration="800">
        <img src="${a.img}" class="card-img-top"  alt="...">
        <h6 class="text-center mt-2">${a.name}</h6>
      </div>
    </div>
    `

    menu.innerHTML +=content

}))