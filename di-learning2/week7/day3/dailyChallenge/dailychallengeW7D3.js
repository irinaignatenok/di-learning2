class Video {
	constructor(title, uploader, seconds){
		this.title = title;
		this.uploader = uploader;
		this.seconds = seconds;
	}
	watch() {
		console.log(`${this.uploader}  watched all ${this.seconds} seconds of ${this.title}!`)
	}
}
const newVideo = new Video('Otters Holding Hands', 'John', 60);
newVideo.watch()

class Video2 extends Video {
	constructor(name, lastname, books) {
		super(name);
		this.name = name;
		this.lastname = lastname;
		this.books = books;
	}
    speak() {
    	console.log(`This author "${this.name} ${this.lastname}" wrote ${this.books} books`)
    }
}

let newVideo2 = new Video2('John', 'Doe', 50)
console.log(newVideo2.name)
newVideo2.speak()

let arrayVideo = [{
	title: "A new century",
	uploader: "Rachel",
	seconds: 200
}, {
	title: "Global warming",
	uploader: "Jessica",
	seconds: 250
}
]
//  Use an array of data and a for loop to instantiate 5 Video objects.
function myVideo ({title, uploader, seconds} = video3) {
	let array = new Video(title, uploader, seconds)
	console.log(array.watch())
}

arrayVideo.forEach((value) => {
	return myVideo(value)
})
