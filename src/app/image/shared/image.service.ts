import { Injectable } from '@angular/core';

@Injectable()

export class ImageService {
	visibleImages = [];
	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id == id)
	}

}

const IMAGES = [
	{"id": 1, "category": "camping", "caption": "view from boat", "url": "assets/img/about.jpeg"},
	{"id": 2, "category": "camping", "caption": "view from boat", "url": "assets/img/band-cover.jpeg"},
	{"id": 3, "category": "library", "caption": "view from boat", "url": "assets/img/camera-women.jpeg"},
	{"id": 4, "category": "library", "caption": "view from boat", "url": "assets/img/chalkboard.jpeg"},
	{"id": 5, "category": "library", "caption": "view from boat", "url": "assets/img/freestyle.jpg"},
	{"id": 6, "category": "camping", "caption": "view from boat", "url": "assets/img/hands.jpg"},
	{"id": 7, "category": "library", "caption": "view from boat", "url": "assets/img/sky.jpg"},
	{"id": 8, "category": "library", "caption": "view from boat", "url": "assets/img/spider.jpg"},
	{"id": 9, "category": "library", "caption": "view from boat", "url": "assets/img/stone.jpeg"},
	{"id": 10, "category": "library", "caption": "view from boat", "url": "assets/img/white.jpeg"}
]