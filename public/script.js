document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/items");
        console.log(response);
        
        const items = await response.json();

        const gallery = document.getElementById("gallery");

        items.forEach(item => {
            const wrapper = document.createElement("div");
            wrapper.className = "single-image";

            const img = document.createElement("img");
            img.src = item.imageURL;
            img.alt = item.name;

            const name = document.createElement("p");
            name.textContent = item.name;

            const linkMain = document.createElement("a");
            linkMain.href = item.SourceMain;
            linkMain.textContent = "View Original";
            linkMain.target = "_blank";

            wrapper.appendChild(img);
            wrapper.appendChild(name);
            wrapper.appendChild(linkMain);
            gallery.appendChild(wrapper);
        }) 
    }   catch(err){
        console.error("Error fetching items:", err);
    }
});
