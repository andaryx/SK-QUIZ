
document.addEventListener('DOMContentLoaded', () => {
    
  
    const tlacidlo = document.querySelector('.cta');
    const vysledokElement = document.getElementById('vysledok');

    tlacidlo.addEventListener('click', () => {
        
      
        const oznaceneCheckboxy = document.querySelectorAll('.options-list .check:checked');

       
        if (oznaceneCheckboxy.length === 0) {
            vysledokElement.textContent = "Musíš vybrať aspoň jednu odpoveď!";
            vysledokElement.style.color = "#ff7300";
            return; // Ukončíme funkciu, ďalej nepokračujeme
        }

        
        if (oznaceneCheckboxy.length > 1) {
            vysledokElement.textContent = "Môžeš označiť iba jednu odpoveď!";
            vysledokElement.style.color = "#ff7300";
            return;
        }

    
        const vybranyCheckbox = oznaceneCheckboxy[0];

       
        const jeSpravne = vybranyCheckbox.dataset.correct === "true";

       
        if (jeSpravne) {
            vysledokElement.textContent = "Správna odpoveď! Pavol Országh Hviezdoslav je autorom Hájnikovej ženy.";
            vysledokElement.style.color = "#108702"; // Zelená pre úspech
        } 

        
        else {
            vysledokElement.textContent = "Zlá odpoveď! Skús to znova.";
            vysledokElement.style.color = "red"; // Červená pre chybu
        }
    });
});