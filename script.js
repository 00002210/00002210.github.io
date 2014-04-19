       

        //Lightbox - changes CSS of the div that it looked like lightbox
		function lightbox(){
			var box = document.getElementById("lbox");
			box.style.display = "block";
			document.body.style.overflow = "hidden";
		}

        //Total to pay counter 
		var totalToPay = document.getElementById("ttpay");
		if (sessionStorage.getItem("totalToPay") == null) {
			sessionStorage.setItem("totalToPay", 0);
			totalToPay.innerHTML = 0;	
		}
		else{
			totalToPay.innerHTML = sessionStorage.getItem("totalToPay");
		}

		//Pay counter with item list
		function gain(price, item){
			var items =  sessionStorage.getItem("cart");
			console.log(sessionStorage.getItem("cart"));
			sessionStorage.setItem("cart", sessionStorage.getItem("cart")+";"+item);
			ttp = parseInt(sessionStorage.getItem("totalToPay"));
			price = parseInt(price);
			ttp = ttp + price;
			sessionStorage.setItem("totalToPay", ttp);
			totalToPay.innerHTML = ttp+"$";
            console.log(ttp);
		}
		
		
