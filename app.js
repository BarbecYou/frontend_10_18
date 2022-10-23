const data = [
    {
      "nev": "Maxi Ultra",
      "meret": "128"
    },
    {
      "nev": "Maxi Ultra S",
      "meret": "256"
    },
    {
      "nev": "Maxi Ultra X",
      "meret": "512"
    },
    {
      "nev": "Átlagos SD kártya",
      "meret": "128"
    },
    {
      "nev": "Átlagos SD kártya 2",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Olcsó microSD",
      "meret": "32"
    },
    {
      "nev": "Kevésbé olcsó microSD",
      "meret": "64"
    }
  ];



  searchTextInput.addEventListener('input', (e) => {
    const value = e.target.value.trim().toLowerCase();
    if (value.length < 3){

    } else {
      const results = data.filter(item => item.nev.toLowerCase().includes(value));
      results.forEach(result => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        
      });
    }
   
  });

  