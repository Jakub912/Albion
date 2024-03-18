document.getElementById('element').addEventListener('change', function() {
    var element = this.value;
    var materialy = {
        Kapuza: { T4: 2, T3: 1, T2: 0 },
        Szata: { T4: 3, T3: 2, T2: 1 },
        Sandaly: { T4: 1, T3: 1, T2: 1 },
        Kurtka: { T4: 5, T3: 3, T2: 2 },
        'Buty Skorzane': { T4: 4, T3: 2, T2: 1 },
        Kaptur: { T4: 2, T3: 1, T2: 0 },
        Helm: { T4: 3, T3: 2, T2: 1 },
        Zbroja: { T4: 6, T3: 4, T2: 2 },
        'Buty Metalowe': { T4: 5, T3: 3, T2: 2 }
    };

    var potrzebneMaterialy = materialy[element];

    // Wyświetl wynik na stronie
    var wynikHTML = "<p>Do zrobienia tego elementu potrzebujesz:</p>";
    for (var material in potrzebneMaterialy) {
        wynikHTML += "<p>" + material + ": " + potrzebneMaterialy[material] + "</p>";
    }

    document.getElementById('wynik').innerHTML = wynikHTML;
});