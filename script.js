const table = document.getElementsByTagName("table")[0];

// DATES ARE FUN
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

class Post {
	constructor(title, year, month, day, desc, link) {
		this.title = title;
		this.year = year;
		this.month = month;
		this.day = day;
		this.date = new Date(this.year, this.month, this.day, 0,0,0,0);
		this.desc = desc;
		this.link = link;
	}
}


let posts = [];
let titles = ["Hansard Analysis: Part 1", "Hansard Analysis: Part 2", "Hansard Analysis: Part 3"];
let dates = [[2019, 2, 4], [2019, 2, 5], [2019, 2, 11]];
let descs = [""];
let links = ["/hansard_project/2019-02-04-hansard-text-analysis-part-1/", "/hansard_project/2019-02-05-text-mining-the-eu-withdrawal-bill-hansard", "/hansard_project/2019-02-11-text-mining-the-eu-withdrawal-bill-hansard-ii"];

for (let i = 0; i < titles.length; i++) {
	posts.push(new Post(titles[i], dates[i][0], dates[i][1]-1, dates[i][2], descs[i], links[i]))
}

for (let i = 0; i<posts.length; i++) {
	let r = document.createElement("tr");
	
	let d1 = document.createElement("td");
	let d2 = document.createElement("td");
	d1.textContent = posts[i].title;
	d2.textContent = posts[i].day + " " + months[posts[i].month] + " " + posts[i].year;

	r.appendChild(d1);
	r.appendChild(d2);

	table.appendChild(r);

	r.addEventListener("click", () => {
		window.open("http://mogs-git.github.io/writings"+posts[i].link);
	})
	r.addEventListener("mouseover", (e) => {
		console.log(e.target);
		r.classList.add("post_hover");
	})
	r.addEventListener("mouseout", (e) => {
		r.classList.remove("post_hover");
	})
}

let nav_links = ["home", "about", "writings"]
const navbar_top = document.getElementById("links");

nav_links.forEach((link) => {
	let el = document.createElement("li");
	el.textContent = link;
	navbar_top.appendChild(el);
	el.addEventListener("click", () => {
		if (link === "home") {
			window.open("http://mogs-git.github.io", "_self");
		} else {
			window.open("http://mogs-git.github.io/"+link);
		}
	})
	el.addEventListener("mouseover", (e) => {
		e.target.classList.add("link_hover");
	})
	el.addEventListener("mouseout", (e) => {
		e.target.classList.remove("link_hover");
	})

})

