module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Usa o parser do TypeScript
  extends: [
    "standard", // Usa as regras do StandardJS
    "plugin:@typescript-eslint/recommended", // Adiciona as regras recomendadas do TypeScript
    "plugin:prettier/recommended", // Adiciona o Prettier como uma extensão do ESLint
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020, // Define a versão do ECMAScript
    sourceType: "module", // Permite o uso de imports
  },
  rules: {
    // Adicione ou sobrescreva regras aqui, se necessário
    "@typescript-eslint/no-unused-vars": "warn", // Avisa sobre variáveis não utilizadas
    "no-useless-constructor": "off", // Desativa a regra que detecta construtores inúteis (comum em TypeScript)
    "n/handle-callback-err": "off", // Desativa a regra que exige tratamento de erros em callbacks
    "n/no-callback-literal": "off", // Desativa a regra que exige literais em callbacks
    "prettier/prettier": "error", // Habilita o Prettier como uma regra do ESLint
    "@typescript-eslint/explicit-function-return-type": "error", // Obriga a ter um tipo de retorno explícito
  },
};
