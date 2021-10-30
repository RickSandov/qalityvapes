

export default function Contact() {

    const copyNumber = (link) => {
        e.stopPropagation();

        navigator.clipboard.writeText(link);

        dispatch(uiTempToast('Correo electrónico copiado al portapapeles'));
    }

    return (
        <div className="generic-container">

            <h1 className="title">
                Contacto Pretty Prieto
            </h1>

        </div>
    )
}
