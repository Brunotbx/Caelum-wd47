
(() => {

    //UI
    const ui = {
        tableCustomers: document.querySelector(".pure-table"),
        lineTable: document.querySelector("#linetable")
    };

    console.log(ui)



    //ACTIONS
    const getCustomers = async () => {
        const endPoint = "https://run.mocky.io/v3/f7f07fe6-5390-4224-bc8d-82361f57a063";

        const config = {
            method: "GET",
            headers: new Headers({
                "Content-type": "application/json"
            })
        };

        try {
            const response = await fetch(endPoint, config);
            const customers = await response.json();
            getCustomersSuccess(customers);
        } catch (error) {
            getCustomersError(error);
        };
    };


    const getCustomersSuccess = (customers) => {

        const template = Handlebars.compile(ui.lineTable.textContent);
        const html = template({ clientes: customers });
        ui.tableCustomers.insertAdjacentHTML("beforeend", html);

    };

    const getCustomersError = (error) => {
        console.warn(error);
        document.querySelector("h1").innerText = "ERRO";
    };



    //INIT
    getCustomers();



})();