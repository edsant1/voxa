"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toSSML(statement) {
    if (!statement) {
        return undefined;
    }
    if (statement.startsWith("<speak>")) {
        return statement;
    }
    // Hack. Full xml escaping would be better, but the & is currently the only special character used.
    statement = statement.replace(/&/g, "&amp;");
    return `<speak>${statement}</speak>`;
}
exports.toSSML = toSSML;
//# sourceMappingURL=ssml.js.map