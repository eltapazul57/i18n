import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

// Detectar idioma del navegador
const language = navigator.language.startsWith("es") ? "es-ES" : "en-EN";
const messages = language === "es-ES" ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <JobsList />
    </IntlProvider>, 
    document.getElementById("root")
);
