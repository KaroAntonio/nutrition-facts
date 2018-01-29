
var energies = [
	'Karma',
	'Hype',
	'Money',
	'$$$',
	'Likes',
	'Calories',
	'Joules',
	'Aura',
	'Faith',	
]	

brands = [
	"Apple",
	"Google",
	"Microsoft",
	"Facebook",
	"Coca-Cola",
	"Amazon",
	"Disney",
	"Toyota",
	"McDonald's",
	"Samsung",
	"GE",
	"AT&T",
	"IBM",
	"Intel",
	"Cisco",
	"NIKE",
	"Mercedes-Benz",
	"Oracle",
	"Verizon",
	"Louis Vuitton",
	"BMW",
	"Budweiser",
	"American Express",
	"Walmart",
	"Marlboro",
	"Honda",
	"SAP",
	"Visa",
	"Gillette",
	"Pepsi",
	"Nescafe",
	"ESPN",
	"L'Oréal",
	"Home Depot",
	"Starbucks",
	"H&M",
	"Audi",
	"Accenture",
	"Ford",
	"Frito-Lay",
	"IKEA",
	"HP",
	"Wells Fargo",
	"Hermès",
	"UPS",
	"CVS",
	"Gucci",
	"Pampers",
	"Siemens",
	"HSBC",
	"Zara",
	"Mastercard",
	"J.P. Morgan",
	"Nestle",
	"Ebay",
	"Fox",
	"Chevrolet",
	"Danone",
	"Colgate",
	"Porsche",
	"Cartier",
	"Citi",
	"Kraft",
	"Lexus",
	"Chase",
	"Bank of America",
	"Nissan",
	"Hyundai",
	"Rolex",
	"Red Bull",
	"Netflix",
	"Kellogg's",
	"Sony",
	"Santander",
	"Adidas",
	"LEGO",
	"BASF",
	"Heineken",
	"T-Mobile",
	"BBVA",
	"Corona",
	"Caterpillar",
	"FedEx",
	"Adobe",
	"Goldman Sachs",
	"Lowe's",
	"Chanel",
	"Huawei",
	"Target",
	"Philips",
	"Boeing",
	"Subway",
	"Lancome",
	"Hershey",
	"Costco",
	"Walgreens",
	"Panasonic",
	"Nivea",
	"Coach",
	"Allianz"
]

var tv_shows = [
	"Pokémon",
	"Courage the Cowardly Dog",
	"Arthur",
	"SpongeBob SquarePants",
	"Teen Titans",
	"Johnny Bravo",
	"Animaniacs",
	"Ed, Edd, 'n', Eddy",
	"Scooby-Doo",
	"Pinky and the Brain",
	"Dexter's Laboratory",
	"Tom And Jerry",
	"Yu-Gi-Oh!",
	"Digimon",
	"Street Sharks",
	"Adventures of Sonic the Hedgehog",
	"The Fairly Odd Parents",
	"Rugrats",
	"Justice League",
	"CatDog",
	"Gargoyles",
	"Jackie Chan Adventures",
	"Looney Tunes",
	"The Grim Adventures of Billy and Mandy",
	"Hey Arnold!",
	"Samurai Jack",
	"Dragon Tales",
	"Totally Spies",
	"Recess",
	"Rocket Power",
	"The Wild Thornberrys",
	"The Powerpuff Girls",
	"Schoolhouse Rock!",
	"Cow and Chicken",
	"Codename: Kids Next Door",
	"Rocko's Modern Life",
	"I Am Weasel",
	"The Magic School Bus",
	"Dora the Explorer",
	"The Adventures of Winnie the Pooh",
]

var theme = 'light' 

$(document).ready(function() {
	$('#loading').hide();

	reset_facts()

	$(document).mousemove(function() {
		reset_facts()
	});

	$(document).click(function() {
		toggle_theme();
	});
})

function toggle_theme() {
	if (theme == 'light') {
		theme = 'dark'
		$('html').css({
			'background':'black',
			'color': 'white'
		});
	} else {
		theme = 'light'
		$('html').css({
			'background':'white',
			'color':'black'
		});
	}
}

function reset_facts() {

	$('#items-section').empty()
	$('#vitamins-section').empty()
		
	set_energy( choose_random( energies ) , choose_range(0,1000));

	for (var i = 0; i < choose_range(4,12); i++) {
		add_vitamin(choose_random(brands), choose_range(0, 300));
	}
	for (var i = 0; i < choose_range(4,6); i++) {
		add_item(choose_random(tv_shows), choose_range(0, 8)+'hrs', choose_range(0,150),'main');
	}
	for (var i = 0; i < choose_range(4,6); i++) {
		//add_vitamin(choose_random(tv_shows), choose_range(0, 300));
	}
	
}

function add_item(name, amount, percent, item_type) {
	var item_el = $('<div class="item"></div>')
	var item_name = $('<div class="item-name"></div>')
	var item_amount = $('<div class="item-amount"></div>')
	var item_percent = $('<div class="item-percent"></div>')

	if (item_type == 'main') {
		item_name.addClass('bold-text')
	} 
	if (item_type == 'sub') {
		item_el.addClass('indented')
	}
	

	item_name.html(name);
	item_amount.html(amount);
	item_percent.html(percent+"%");

	item_el.append(item_name)
	item_el.append(item_amount)
	item_el.append(item_percent)
	item_el.appendTo('#items-section')
}

function add_vitamin(name, percent) {
	var vitamin_el = $('<div class="vitamin"></div>')
	var vitamin_name = $('<div class="vitamin-name"></div>');
	var vitamin_percent = $('<div class="vitamin-percent"></div>')

	vitamin_percent.html(percent + "%")
	vitamin_name.html(name)
	vitamin_name.appendTo(vitamin_el)
	vitamin_percent.appendTo(vitamin_el)
	vitamin_el.appendTo('#vitamins-section');
}

function set_energy( name, amount) {	
	var energy_title = $('#energy-title')
	energy_title.html( name );

	var energy_amount = $('#energy-amount');
	energy_amount.html( amount+'' )
}

function choose_random( array ) {
	var i = Math.floor(Math.random()*array.length)
	return array[i]
}

function choose_range( start, end ) {
	return Math.floor(Math.random() * (end-start)) + start
}
