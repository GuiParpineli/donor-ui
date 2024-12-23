export class DonorValidator {
  private static schema: Record<string, string> = {
    nome: 'string',
    cpf: 'string',
    rg: 'string',
    data_nasc: 'string',
    sexo: 'string',
    mae: 'string',
    pai: 'string',
    email: 'string',
    cep: 'string',
    endereco: 'string',
    numero: 'number',
    bairro: 'string',
    cidade: 'string',
    estado: 'string',
    telefone_fixo: 'string',
    celular: 'string',
    altura: 'number',
    peso: 'number',
    tipo_sanguineo: 'string',
  };

  public static validate(donor: Record<string, any>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    for (const key in DonorValidator.schema) {
      const expectedType = DonorValidator.schema[key];
      const actualValue = donor[key];

      if (actualValue === undefined || actualValue === null) {
        errors.push(`Campo '${key}' está ausente ou é nulo.`);
        continue;
      }

      if (typeof actualValue !== expectedType) {
        errors.push(`Campo '${key}' deve ser do tipo '${expectedType}', mas foi '${typeof actualValue}'.`);
      }
    }

    for (const key in donor) {
      if (!(key in DonorValidator.schema)) {
        errors.push(`Campo inesperado '${key}' encontrado.`);
      }
    }

    return {valid: errors.length === 0, errors};
  }

  public static validateList(donors: Array<Record<string, any>>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    donors.forEach((donor, index) => {
      const result = DonorValidator.validate(donor);

      if (!result.valid) {
        errors.push(`Erro na entrada ${index + 1}: ${result.errors.join(', ')}`);
      }
    });

    return {valid: errors.length === 0, errors};
  }
}
