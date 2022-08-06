class Albums{

    constructor(API_URL, data) {
        this.API_URL = null
        this.data = null;
    }

    async getData(url){

        this.data = fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json, text/plain, */*',

            }
        })

        let response = await this.data;

        response = await response.json();


        return response;
    }

    start(){
        this.API_URL = 'https://jsonplaceholder.typicode.com/albums';

        const wrapper = document.querySelector('#gallery_book');

        this.getData(this.API_URL).then( response => {

            this.data = response;

            for(let item of this.data){
                const blockGallery = document.createElement("div");

                blockGallery.classList.add('col-2', 'gallery_item');
                blockGallery.setAttribute('data-id', item.id);
                blockGallery.innerHTML = `${item.title}`;

                wrapper.append(blockGallery);
            }

        })

        if(JSON.parse(localStorage.getItem("album"))){
            localStorage.clear();
        }

        wrapper.addEventListener('click', this.goAlbum);

    }



    goAlbum = (event) => {
        event.stopPropagation();

        if(!event.target.classList.contains('gallery_item')) return;

        const albumId = +event.target.closest('[data-id]').getAttribute('data-id');

        this.sendPhotoAlbum(albumId);

    }


    sendPhotoAlbum = (id) => {

        const API_URL = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

        this.getData(API_URL).then( response => {
                this.data = response;
                localStorage.setItem("album", JSON.stringify(this.data));
                window.location.href = './../pages/photo.html';
            })
    }

}

const firstClass = new Albums();

firstClass.start();
