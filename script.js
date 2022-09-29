const link = document.querySelector('.link');
const input = document.querySelector('.input')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ed96b810dmshe7288fd4997c71dp1f5ddajsn246c381c23af',
		'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
	}
};
//https%3A%2F%2Fwww.facebook.com%2Freel%2F1187362698778788



input.addEventListener('change', function(){
    let url = input.value;
    console.log('woork');
    console.log(url);
    if(!url) return;

    fetch(`https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url=${url}`, options)
	.then(response => response.json())
	.then(data => {
        const {links} = data;
        
        link.href = links["Download High Quality"];
        console.log(document.querySelector('.link'));
    })
    .catch(err => console.error(err))
    .finally(() => link.style.display = 'block')
})

