console.log("=== AGENDA ===");

(function() {
    //UI (user interface)
    const ui = {
        fieldName: document.querySelector("#name"),
        // fieldEmail: document.querySelector("#email"),

        fields: document.querySelectorAll("input"),
        buttonAdd: document.querySelector(".pure-button"),
        tableContacts: document.querySelector(".pure-table tbody"),
        pageTitle: document.querySelector("legend")
    }

    //ENDPOINT
    const endPoint = "http://localhost:4000/contacts";



    //Actions
    const validateFields = function(event) { //FUNCTION PARA FAZER A VALIDAÇÃO DOS DADOS PREENCHIDOS
        event.preventDefault();

        let errors = 0;
        let data = {};
        
        ui.fields.forEach(function(field){
            
            if (field.value.trim() == "") { //TRIM PARA REMOVER ESPAÇOS E EVITAR BUG - SAFE GUARD
                field.classList.add("error");
                errors++;
                
            } else {
                field.classList.remove("error");
                data[field.id] = field.value // PASSAR ENTRE [] OS PARAMETROS
            }
        });

        if (errors == 0) {
            addContact(data);
        } else {
            document.querySelector(".error").focus()
        }
    };


    const addContact = function(contact) { // FUNCTION PARA ADICIONAR O CONTATO NO BD - BACK

        const config = {
            method: "POST",
            body: JSON.stringify(contact),
            headers: new Headers({ "Content-type": "application/json" })
        };

        fetch(endPoint, config)
            .then(addContactsSuccess)    //FULFILLED
            .catch(addContactsError);    //REJECTED
    };


    const addContactsSuccess = function() {
        showMessage("Adicionado com sucesso.");
        clearFields();
        getContacts();
        setInterval(function(){
            showMessage("Agenda", "black")
        }, 3000)

    };


    const addContactsError = function() {
        showMessage("Falha ao adicionar.", "red");
    };


    const showMessage = function(msg="", color="green") {
        ui.pageTitle.textContent = msg;
        ui.pageTitle.style.color = color;
    };


    const clearFields = function() {
        ui.fields.forEach(function(field) {
            field.value = "";
        });
        ui.fieldName.focus();
    };


    const getContacts = function() {
        const parameters = "?_sort=id&_order=desc";

        const config = {
            method: "GET",
            headers: new Headers({ "Content-type":"application/json" })
        };

        fetch(`${endPoint}${parameters}`, config) //Promisse 1
            .then(function(response) { return response.json() }) //Promisse 1 - Fulfilled
                .then(getContactsSuccess) //Promisse 2 - Fulfilled
                .catch(removeContactError) //Promisse 2 - Rejected
            .catch(removeContactError) //Promisse 1 - Rejected
    };


    const getContactsSuccess = function(contacts) {

        const htmlTable = contacts

            // .filter(function(contact){ //ForEach não possui um retorno, o filter possuí retorno e aceita critérios
            //     return contact.id;
            // })
            .map(function(contact) {
                return `<tr>
                            <td>${contact.id}</td>
                            <td>${contact.name}</td>
                            <td>${contact.email}</td>
                            <td>${contact.phone}</td>
                            <td>
                                <a href="#" data-id="${contact.id}" data-action="remove">Excluir</a>
                            </td>
                        </tr>`; //TEMPLATE STRING
            })
                .join("")

        // ui.tableContacts.innerHTML = htmlTable => Método antigo, unsafe MDN.

        ui.tableContacts.insertAdjacentHTML("afterbegin", htmlTable)
    };


    const askConfirmRemove = function(e) {
        e.preventDefault();

        const {action, id} = e.target.dataset;
        const msg = `Deseja Excluir o item ${id}?`;

        if (action == "remove" &&
            confirm(msg)) {
                removeContact(id);
            }
    };

    const removeContact = function(id) {
        const config = {
            method: "DELETE",
            headers: new Headers({
                "Content-type":"application/json"
            })
        };

        fetch(`${endPoint}/${id}`, config)
            .then(getContacts)
            .catch(removeContactError);
    };


    const removeContactError = function() {
        showMessage("Falha ao recuperar os contatos", "red");
    };


    //Initialize / Mapping Events
    ui.buttonAdd.onclick = validateFields;
    ui.tableContacts.onclick = askConfirmRemove;

    //Initialize
    getContacts();

})();