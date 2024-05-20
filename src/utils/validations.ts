import { configure, defineRule } from "vee-validate";
import { email, min, required } from "@vee-validate/rules";

interface IRuleContext {
  name: string;
  params: Record<string, any>;
}

interface IMessageContext {
  field: string;
  rule: IRuleContext;
  value: any;
  ruleParams: Record<string, any>;
}

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

configure({
  generateMessage: (context: IMessageContext) => {
    const messages: Record<string, string> = {
      required: `El campo es obligatorio`,
      email: `El email tiene el formato correcto`,
      min: `La contraseña necesita tener al menos 6 caracteres`,
    };

    const message = messages[context?.rule?.name];
    return message ? message : `El campo ${context?.field} no es válido`;
  },
});
