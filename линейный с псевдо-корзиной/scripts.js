"use strict";

//Функция для спойлера в переоформленных модификациях v1



$(document).ready(function(){
	$('.cart__title').click(function(){
	 	console.log($(this).parent());
		$(this).parent().toggleClass('cart_open');
		return false;
	});


	class Cart_calc {
		constructor () {
			this.items = document.getElementsByClassName("item");
			this.cart = document.getElementById("cart");

			for (var i = 0; i < this.items.length; i++ ) {
				this.minus(this.items[i]);
				this.plus(this.items[i]);
				
			}

		};

		minus (item) {
			$(item).find(".item__minus-amount")[0].addEventListener('click', ()=>{
				$(item).find(".item__field-amount")[0].value -= 1;
			});
		}
		plus (item) {
			$(item).find(".item__plus-amount")[0].addEventListener('click', ()=>{
				let value = $(item).find(".item__field-amount")[0].value;
				$(item).find(".item__field-amount")[0].value += 30;
				value = 51;
			});
		}
	}	

let cart_calc = new Cart_calc();


});

