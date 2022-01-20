// Je déclare les variables qui seront appelées depuis le DOM
var fromDollarsToEuroRate = 0.88;
    var fromEuroToDollarRate = 1.14;
    var fromEuroToChfRate = 1.04;
    var fromDollarsToChfRate = 0.91;
    var fromChfToEuroRate = 0.96;
    var fromChfToDollarRate = 1.09;

/***************************************************************************
J'ajoute un écouteur d'évenement lorsque l'on clique sur 
le bouton "convertir" et initialise la fonction qui fera les conversions 
***************************************************************************/
$("#convert").click(function () {
// je déclare les variables qui seront utilisé dans la fonction
    var fromThisCurrencyValue = $('#fromThisCurrency').val();
    var toThisCurrencyValue = $('#toThisCurrency').val();
    var amountFrom = $('#amountFrom');
    var result = $('#result');

/**************************************************************************************************************
 Je fais des conditions pour chaque cas de conversion. Il y aura trois conditions en tout dans la fonction.
 Une condition pour les calculs partant de "euros"
 Une condition pour les calculs partant de "dollars"
 Et une condition pour les calculs partant de "chf" (les francs suisses)
 Chaque condition aura une condition imbriquée avec un "else if" pour couvrir les deux conversions possibles --
 -- vers les deux autres devises disponibles
 Je commence par la devise "euros" 
 *************************************************************************************************************/
    if (fromThisCurrencyValue == "euros") {
        // condition imbriquée dans le cas ou la devise cible est "dollars"
        if (toThisCurrencyValue == "dollars") {
            var calcul = amountFrom.val() * fromEuroToDollarRate;
            result = $("#result").val(calcul);
        // "else if" pour la conversion vers les francs suisses
        } else if (toThisCurrencyValue == "chf") {
            var calcul = amountFrom.val() * fromEuroToChfRate;
            result = $("#result").val(calcul);
        }
    }
    // deuxième condition contenant sa condition imbriquée et son "else if"
    if (fromThisCurrencyValue == "dollars") {
        // sa condition imbriquée
        if (toThisCurrencyValue == "euros") {
            var calcul = amountFrom.val() * fromDollarsToEuroRate;
            result = $("#result").val(calcul);
        // son "else if"
        } else if (toThisCurrencyValue == "chf") {
            var calcul = amountFrom.val() * fromDollarsToChfRate;
            result = $("#result").val(calcul);
        }
    }
    //troisième condition contenant sa condition imbriquée et son "esle if"
    if (fromThisCurrencyValue == "chf") {
        // sa condition imbriquée
        if (toThisCurrencyValue == "euros") {
            var calcul = amountFrom.val() * fromChfToEuroRate;
            result = $("#result").val(calcul);
        // son "else if"
        } else if (toThisCurrencyValue == "dollars") {
            var calcul = amountFrom.val() * fromChfToDollarRate;
            result = $("#result").val(calcul);
        }
    }
})