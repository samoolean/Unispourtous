			// Get the root element
			var r = document.querySelector(':root');
			
			function list() {
			
				let input = document.getElementById('search').value;
				var rs = getComputedStyle(r);

					if (input < 0 || input == 0) {
					
						r.style.setProperty('--switch', 'none');
						
					} else {
					
					}
				}
			
			function myFunction_set() {
			  // Set the value of variable --blue to another value (in this case "lightblue")
			  r.style.setProperty('--switch', 'block');
			  list();
			  
			}
			
			function myFunction_get() {
			
					if (rs.getPropertyValue('--switch') == 'none') {
					
					let input = document.getElementById('search').value
					
						if (input < 0) {

						r.style.setProperty('--switch', 'none');
						
					} else {
					
					}
				}

			}
