

/* 
	Copyright znci (2022)
		[znci.dev]
		<hello@znci.dev>
*/

let aquarium = {};

aquarium.version = 1;

// Custom Console Logs

aquarium.debug = function (str) {
	return [`%cCORE%c`, "color: white; background-color: #eb4034; border-radius: 0.5rem; padding: 0 1rem;", str]
}
const rc = window.console;
const console = {
	log: rc.log.bind(rc,...aquarium.debug()),
	warn: rc.log.bind(rc,...aquarium.debug()),
	info: rc.log.bind(rc,...aquarium.debug()),
}

// Popups

aquarium.popupPrefix = "popup-";
aquarium.popupIgnore = "ignore";

aquarium.popupManager = () => {
	document.querySelectorAll(".dismiss").forEach((v) => {
		const parent = v.parentElement.parentElement;
		const popup = parent.attributes['name'].value;
		if(localStorage.getItem(`${aquarium.popupPrefix}${popup}`)) {
			parent.remove()
			return
		}
		v.innerHTML = `<img src="../img/dismiss.svg"></img>`;
		v.addEventListener("click", (e) => {
			console.log(`Removed popup:`, parent)
			localStorage.setItem(`${aquarium.popupPrefix}${popup}`, aquarium.popupIgnore)
			console.log(`Added popup to ignore list`)
			parent.remove()
		})
	})
}

// Projects

aquarium.projects = [
	{
		"project": "openCDN",
		"thumbnail": "opencdn.svg",
		"link": "http://opencdn.znci.dev",
		"description": "A free to use CDN for uploading images.",
		"tags": [
			{
				"name": "free",
				"color": "yellow"
			},
			{
				"name": "qol",
				"color": "red"
			},
			{
				"name": "image",
				"color": "green"
			}
		]
	},
	{
		"project": "Fancy Time",
		"link": "https://npmjs.com/package/fancy-time",
		"description": "A simple npm package for easy date formatting.",
		"tags": [
			{
				"name": "free",
				"color": "orange"
			},
			{
				"name": "useful",
				"color": "red"
			},
			{
				"name": "converter",
				"color": "pink"
			},
		]
	},
	{
		"project": "MD5Json",
		"link": "https://github.com/zNotChill/MD5Json",
		"description": "An script for converting MD5 to JSON.",
		"tags": [
			{
				"name": "awful",
				"color": "yellow"
			},
			{
				"name": "random",
				"color": "pink"
			},
			{
				"name": "converter",
				"color": "red"
			},
		]
	},
	{
		"project": "Azalea",
		"thumbnail": "azalea.svg",
		"link": "https://github.com/znci/azalea",
		"description": "A CSS framework for simple designing!",
		"tags": [
			{
				"name": "useful",
				"color": "green"
			},
			{
				"name": "customizable",
				"color": "red"
			},
			{
				"name": "framework",
				"color": "purple"
			},
		]
	},
	{
		"project": "Go",
		"thumbnail": "go.svg",
		"link": "https://github.com/znci/go",
		"description": "A simple short URL Generator.",
		"tags": [
			{
				"name": "free",
				"color": "orange"
			},
			{
				"name": "random",
				"color": "red"
			},
			{
				"name": "converter",
				"color": "purple"
			},
		]
	}
]

aquarium.showProjects = () => {
	const list = aquarium.projects;
	const projFolder = "./img/projects/"
	const proj = document.querySelector(".project-list")
	list.forEach((v) => {
		let tags = "";
		let thumb = "";
		if(v.thumbnail) {
			thumb = `${projFolder}${v.thumbnail}`
		} else {
			thumb = "./img/placeholder.jpg"
		}
		const tagList = v.tags;
		let CC = 0;
		tagList.forEach((val) => {
			let tag = "";
			CC += 1;
			switch(CC) {
				case 1:
					tag = "purple"
					break
				case 2:
					tag = "red"
					break
				case 3:
					tag = "green"
					break
			}
			tags += `
				<li>
					<div class="tag tag-${tag}">
						${val.name}
					</div>
				</li>
			`
		})
		proj.innerHTML += `
			<div class="container">
				<div class="thumbnail">
					<img src="${thumb}" alt="">
				</div>
				<div class="details">
					<div class="name">
						<a href="${v.link}" target="_blank" external="true">
							${v.project}
						</a>
					</div>
					<div class="description">
						${v.description}
					</div>
					<div class="tags">
						<h3>Categories</h3>
						<ul>
							${tags}
						</ul>
					</div>
				</div>
			</div>
		`
	})
}

//

// Things I use

aquarium.useList = [
	{
		"item": "CSS",
		"icon": "css3",
		"type": "plain-wordmark",
		"use": "Designing",
	},
	{
		"item": "Discord.js",
		"icon": "discordjs",
		"type": "plain-wordmark",
		"use": "Discord Bots",
	},
	{
		"item": "Electron",
		"icon": "electron",
		"type": "original-wordmark",
		"use": "Web Apps",
	},
	{
		"item": "Figma",
		"icon": "figma",
		"type": "plain",
		"use": "Designing",
	},
	{
		"item": "HTML",
		"icon": "html5",
		"type": "plain-wordmark",
		"use": "Webpages",
	},
	{
		"item": "JavaScript",
		"icon": "javascript",
		"type": "plain",
		"use": "Interactivity",
	},
	{
		"item": "Node.js",
		"icon": "nodejs",
		"type": "plain-wordmark",
		"use": "Random JS Apps",
	},
	{
		"item": "MySQL",
		"icon": "mysql",
		"type": "plain-wordmark",
		"use": "Databases",
	},
	{
		"item": "NPM",
		"icon": "npm",
		"type": "original-wordmark",
		"use": "Package Managing",
	},
	{
		"item": "Python",
		"icon": "python",
		"type": "plain-wordmark",
		"use": "Code",
	},
	{
		"item": "SASS",
		"icon": "sass",
		"type": "original",
		"use": "Easier designing",
	},
	{
		"item": "Three.js",
		"icon": "threejs",
		"type": "original-wordmark",
		"use": "Random 3D stuff",
	},
	{
		"item": "Trello",
		"icon": "trello",
		"type": "plain-wordmark",
		"use": "To-do List",
	},
	{
		"item": "Unity",
		"icon": "unity",
		"type": "original-wordmark",
		"use": "Game Creating",
	},
	{
		"item": "Go",
		"icon": "go",
		"type": "original-wordmark",
		"use": "Code",
	},
	{
		"item": "Lua",
		"icon": "lua",
		"type": "plain-wordmark",
		"use": "Code",
	},
	{
		"item": "GitHub",
		"icon": "github",
		"type": "original-wordmark",
		"use": "Hosting Code",
	},
	{
		"item": "Tailwind",
		"icon": "tailwindcss",
		"type": "original-wordmark",
		"use": "CSS Design when lazy",
	},
	{
		"item": "Visual Studio Code",
		"icon": "vscode",
		"type": "plain",
		"use": "Coding",
	},
	{
		"item": "Codepen",
		"icon": "codepen",
		"type": "plain",
		"use": "Little Code projects",
	},
]

aquarium.loadUses = () => {
	aquarium.useList.forEach((v) => {
		document.querySelector(".language-list").innerHTML +=
		`
			<div class="container">
				<div class="thumbnail">
					<i class="devicon-${v.icon}-${v.type}" style="font-size:8rem"></i>
				</div>
				<div class="details">
					<div class="name">
						${v.item}
					</div>
					<div class="description">
						${v.use}
					</div>
				</div>
			</div>
		`	
	})
}

window.onload = () => {
	aquarium.showProjects()
	aquarium.loadUses()
	console.log(
		`                                                             
█████╗  ██████╗ ██╗   ██╗ █████╗ ██████╗ ██╗██╗   ██╗███╗   ███╗
██╔══██╗██╔═══██╗██║   ██║██╔══██╗██╔══██╗██║██║   ██║████╗ ████║
███████║██║   ██║██║   ██║███████║██████╔╝██║██║   ██║██╔████╔██║
██╔══██║██║▄▄ ██║██║   ██║██╔══██║██╔══██╗██║██║   ██║██║╚██╔╝██║
██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║██║╚██████╔╝██║ ╚═╝ ██║
╚═╝  ╚═╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝     ╚═╝
	Using Aquarium Version ${aquarium.version}																										   
		`
	);

	aquarium.popupManager();

}

//

let num = 0;
let max = 360;
let interval = 10;
setInterval(() => {
	if(num >= max) {
		num = 0;
	} else {
		num += 0.2;
	}
	document.documentElement.style.setProperty("--gradient-rotate", `${num}deg`)
}, interval);