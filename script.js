let posts = [
    {
        'author': 'Piotr Dylla',
        'image': '/img/1.jpg',
        'description':'Golden Gate Bridge',
        'location':'San Francisco'
    },
    {
        'author': 'Piotr Dylla',
        'image': 'img/2.jpg',
        'description':'Beverly Hills',
        'location':'Hollywood'
    },
    {
        'author': 'Piotr Dylla',
        'image': 'img/3.jpg',
        'description':'Spaceship Atlantis',
        'location':'Kennedy Space Center'
    },

];

function show(params) {
    document.getElementById('postcontainer').innerHTML += '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += `
        
        <div class="post">

            <div class="author">
         
           <div class="pic-name"><img src="img/Piotr.jpg" class="iconPiotr">
           <div class="name-location">
            ${post['author']} 
            <div class="location">${post['location']}</div>
            </div>
             </div>
           
            <img src="img/threePoint.png" class="threePoint">
            </div>

            <img class="imagePost" src="${post['image']}">

            
                <div class="icon, bottom-icon">
                    <div class="icon">
                    <img src="img/heart.png" class="icon">
                    <img src="img/comment.png" class="icon">
                    <img src="img/massege.png" class="icon">
                    </div>
                    <img src="img/w--.png" class="icon">
                </div>

            <div class="bottom-icon">${post['description']} </div>
           



         </div>   
         `;
    }
}





