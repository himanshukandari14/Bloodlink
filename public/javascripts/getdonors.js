 // Fetch data from your server endpoint
console.log("javascript is connected");
  fetch('http://localhost:3000/seealldonors')
    .then(response => response.json())
    .then(data => {
      // Handle the data and update the HTML
      const donorsContainer = document.getElementById('donorsContainer');

      // Iterate over the data and create a card for each donor
      data.forEach(donor => {
        const card = document.createElement('div');
        card.classList.add('rounded-lg', 'bg-[#F7F8FC]', 'flex', 'flex-col', 'py-[4%]', 'gap-6', 'w-[350px]','justify-center','items-center','px-[3%]', 'drop-shadow-2xl','border-b-[3px]','border-[#1DB1C5]');

        //Add profile pic to the card
        const profileElement=document.createElement('img');
        profileElement.src='/images/icons8-person-94.png';
        card.appendChild(profileElement);
        // Add donor information to the card
        const nameElement = document.createElement('p');
        nameElement.classList.add('text-[25px]','font-semibold')
        nameElement.textContent = ` ${donor.name}`;
        card.appendChild(nameElement);

        const phoneNumberElement = document.createElement('p');
          phoneNumberElement.classList.add('text-[22px]','font-semibold')
        phoneNumberElement.textContent = `Contact: ${donor.phoneNumber}`;
        card.appendChild(phoneNumberElement);

        

        //donor email
        const addressElement = document.createElement('p');
        addressElement.classList.add('text-[22px]','font-semibold')
        addressElement.textContent = `Address: ${donor.address}`;
        card.appendChild(addressElement);

        //add blood group
        
        //donor email
        const bloodGroupElement = document.createElement('p');
        bloodGroupElement.classList.add('text-[22px]','font-semibold')
        bloodGroupElement.textContent = `Blood Group: ${donor.bloodGroup}`;
        card.appendChild(bloodGroupElement);

        //donor state
        const stateElement = document.createElement('p');
        stateElement.classList.add('text-[22px]','font-semibold')
        stateElement.textContent = `State: ${donor.state}`;
        card.appendChild(stateElement);

        //gender state
        const genderElement = document.createElement('p');
        genderElement.classList.add('text-[22px]','font-semibold')
        genderElement.textContent = `Gender: ${donor.gender}`;
        card.appendChild(genderElement);

        

        

        donorsContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
    

   