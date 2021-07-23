console.log("=== CEP ===");


(function() {

    //UI
    const getElements = function(key) {
        return document.querySelector(key)
    };

    const ui = {
        postalCode: getElements("#cep"),
        street: getElements("#logradouro"),
        neighborhood: getElements("#bairro"),
        city: getElements("#cidade"),
        state: getElements("#estado")
    };


    //Actions

    const onlyNumbers = e => {
        
        e.target.value = e.target.value.replace(/[^0-9]/g, "").substring(0, 8);
    };

    const postalCodeIsValid = (e) => {

        if(e.target.value.length < 8) {
            e.target.classList.add("error");
            e.target.focus()
        } else {
            e.target.classList.remove("error");
            getAddress(e.target.value)
        }

    };

    const getAddress = async function(postalCode) {
    
        const endPoint = `https://viacep.com.br/ws/${postalCode}/json/`;

        const config = {
            method:"GET",
            headers: new Headers({
                "Content-type": "application/json"
            })
        };

        //ASYNC AWAIT
        try {
            const response = await fetch(endPoint, config);
            const address = await response.json();
            getAddressSuccess(address);
            } catch (error) {
            getAddressError(error);
        }
        
    };

    const getAddressError = err => console.warn("Ocorreu um erro", err);

    const getAddressSuccess = (endereco) => {

            const { logradouro, bairro, localidade, uf } = endereco;

            ui.street.value = logradouro ?? "";
            ui.neighborhood.value = bairro ?? "";
            ui.city.value = localidade ?? "";
            ui.state.value = uf ?? "";
    };




    //Initialize / Mapping Events
    ui.postalCode.addEventListener("input", onlyNumbers);
    ui.postalCode.addEventListener("focusout", postalCodeIsValid);

})();