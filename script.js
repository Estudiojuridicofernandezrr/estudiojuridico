function pagar() {
    const form = document.getElementById('turno-form');
    if (!form.checkValidity()) {
        alert('Por favor completá todos los campos.');
        return;
    }

    const preference = {
        items: [{ title: "Turno Estudio Jurídico", quantity: 1, unit_price: 20000 }]
    };

    fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer APP_USR-96dea3be-ce3b-4063-9a3e-a5789302b139"
        },
        body: JSON.stringify(preference)
    })
    .then(response => response.json())
    .then(data => {
        window.open(data.init_point, "_blank");
    })
    .catch(error => {
        alert("Error al iniciar el pago");
        console.error(error);
    });
}
