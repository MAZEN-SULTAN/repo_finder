import { messageElement } from "./elements";

export default function (message) {
    if (messageElement) {
    messageElement.textContent = message ? `*${message}` : '';
}
}