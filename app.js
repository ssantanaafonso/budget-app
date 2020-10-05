var budgetController = (function (){
    //code
})();

var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getinput: function(){
            
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            

        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

var controller = (function(budgetCtrl, UICtrl){

        var DOM = UIController.getDOMstrings();

        var ctrlAddItem = function() {
            var input = UIController.getinput();
            console.log(input);
        }

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.key === 'Enter'){
                ctrlAddItem();
            }
        });
    
})(budgetController, UIController);