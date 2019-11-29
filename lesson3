
let money, 
	name, 
	time; 
let	price = 1000;


function start () {

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?", "");
	}
	name = prompt("Название Вашего магазина?", "").toUpperCase();
	time = 21;
}




let mainList = {
	budget: 	money,
	shopName:	name,
	shopGoods: 	[],
	employers: 	[],
	open: 		false,
	discount: 	false,
	shopItems: 	[],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товара будем продавать", "");
		
			if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
				console.log('Все верно');
				mainList.shopGoods[i] = a;
			} else {
				i = i -1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Такого просто не может быть!");
		} else if (time > 8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
		} else if (time < 24 ) {
			console.log("Уже слишьком поздно!");
		} else {
			console.log("В сутках только 24 часа!");
		}
	},
	dayBudget: function dayBudget() {
		alert("Ежедневный бюджет " + mainList.budget / 30 );
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price / 100) * 80
		}
		console.log(price);
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4 ; i++) {
			let nameEmployee = prompt("Введите имя сотрудника", "");
				mainList.employers[i] =  nameEmployee;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items;
		while ( (typeof(items)) !== "string" || items === null || items === '') {
			items = prompt("Перечислите Ваши товары через запятую", "");
		}

		mainList.shopItems = items.split(",");

		mainList.shopItems.push(prompt("Подождите, еще " , ""));
		mainList.shopItems.sort();
	},
	forEachItems: function forEachItems() {
		mainList.shopItems.forEach( function(item, i, arr){
				console.log(`У нас Вы можете купить: ${Number(i) + 1}  :  ${item}`);
		});
	}
}




console.log(mainList);



function  howArray (num, maxLevel) {
	let randArr = [];
	let sumArray = 0;
	let currentLevel;
	let localMaxLevel = maxLevel;


	let randomInt = num => {
		let rand = 1 + Math.random() * num;
		return Math.floor(rand);
	};


	function generateArr() {
		let currentArr = [];
		console.log(localMaxLevel);
		for (let i = 0; i < randomInt(num); i++){

			if (currentLevel < localMaxLevel) {
				currentLevel += 1;
				return currentArr[i] = generateArr();
			} else {
				currentArr[i] = randomInt(num);
			}
		}
		return currentArr;

		
	};

	function generateRandomLevelArr() {
		for (let i = 0; i < randomInt(num); i++) {
			currentLevel = 0;
			localMaxLevel = randomInt(maxLevel);
			randArr[i] = generateArr();
		}

	};
	generateRandomLevelArr();

	

	let funcSumArray = arrItem => {
		if (Array.isArray(arrItem)) {
			arrItem.forEach(function(item, i, arr) {
				funcSumArray(item);
			});

		} else {
			return	sumArray += arrItem;
		}
	};

	funcSumArray(randArr);

	console.log(randArr);
	console.log(sumArray);
}


