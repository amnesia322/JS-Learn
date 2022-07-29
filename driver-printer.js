//learn loops. Driver for Printer

let mode = 'pageCopy'; // Режим работы драйвера печати
let pageNumber = 5; // Номер копируемой страницы
let copyCount = 7; // Количество копий

if (mode === 'pageCopy') {
   for (let copies = 1; copies <= copyCount; copies++) {
      keks.print(pageNumber)
   }
}

if (mode === 'document') {
   for (let page = 1; page <= totalPages; page++) {
      keks.print(page);
   }
}

if (mode === 'reverse') {
   for (let reversePage = totalPages; reversePage >= 1; reversePage--) {
      keks.print(reversePage);
   }
}

if (mode === 'alternate') {
   for (let alternatePage = startPage; alternatePage <= totalPages; alternatePage += 2) {
      keks.print(alternatePage);
   }

   //adds for driver Printer 

   let totalPages = 6; // Всего страниц в документе

   let consumptionTotal = 0; // Общий расход тонера
   let consumptionPerPage = 70; // Расход краски на одну страницу
   let economyMode = false;

   for (let page = 1; page <= totalPages; page++) {
      keks.print(page);

      if (economyMode && page > 3) {
         consumptionTotal += consumptionPerPage * 0.5;
      } else {
         consumptionTotal += consumptionPerPage;
      }
      console.log(consumptionTotal);
   }
}
