class TemplateEngine {
    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        const templateVariableRe = /\{\{(.*?)\}\}/g;
        let match = null;
        let result = this._template;

        while (match = templateVariableRe.exec(this._template)) {
            const variableName = match[1].trim();
            if (!variableName) {
                continue;
            }
            const data = ctx[variableName];
            result = result.replace(new RegExp(match[0], 'gi'), data);
        }

        return result;
    }
}