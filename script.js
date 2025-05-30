function sendMail(event) {
    event.preventDefault(); // impedisce il reload della pagina

    let parms = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        email: document.getElementById("email").value,
        messaggio: document.getElementById("messaggio").value,
    };

    emailjs.send("service_esm9z2s", "template_5cmabm2", parms)
        .then(function(response) {
            showAlert("Email inviata con successo!", "success");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset(); // resetta il form
        }, function(error) {
            showAlert("Errore nell'invio dell'email.", "danger");
            console.error("FAILED...", error);
        });
}

function showAlert(message, type) {
    const formMessage = document.getElementById("form-message");

    // Crea l'elemento alert con dismiss
    formMessage.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Dopo 4 secondi, chiudi automaticamente l'alert
    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(formMessage.querySelector('.alert'));
        alert.close();
    }, 4000);
}
