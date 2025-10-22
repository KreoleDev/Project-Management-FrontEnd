
export function projectStatus() {
  return [
    { value: "Em_Desenvolvimento", label: "Em Desenvolvimento" },
    { value: "Em_Procura_de_Financiamento", label: "Em Procura de Financiamento" },
    { value: "Em_Implementação", label: "Em Implementação" },
    { value: "Em_Funcionamento", label: "Em Funcionamento" },
  ];
}
export function phaseName() {
  return [
    { value: "desenvolvimento", label: "Desenvolvimento" },
    { value: "financiamento", label: "Financiamento" },
    { value: "implementacao", label: "Implementação" },
    { value: "funcionamento", label: "Funcionamento" },
  ];
}

export function term() {
  return [
    { value: "Curto Prazo", label: "Curto Prazo" },
    { value: "Médio Prazo", label: "Médio Prazo" },
    { value: "Longo Prazo", label: "Longo Prazo" },
  ];
}

export function situationStatus() {
  return [
    { value: "Aberto", label: "Aberto" },
    { value: "Fechado", label: "Fechado" },
    { value: "Nota", label: "Nota" },
  ];
}

export function inWork() {
  return [
    { value: "1-30%", label: "1-30%" },
    { value: "31-70%", label: "31-70%" },
    { value: "71-99%", label: "71-99%" },
    { value: "100%", label: "100%" },
  ];
}

export function reinvestmentPlan() {
  return [
    { value: "sim", label: "Sim" },
    { value: "nao", label: "Não" },
  ];
}

export function capitalOrigin() {
  return [
    { value: "Nacional", label: "Nacional" },
    { value: "Estrangeiro", label: "Estrangeiro" },
    { value: "Misto", label: "Misto" },
  ];
}

export function investmentOrigin() {
  return [
    { value: "Privado", label: "Privado" },
    { value: "Público", label: "Público" },
  ];
}

export function sector() {
  return [
    { value: "Turismo", label: "Turismo" },
    { value: "Indústria", label: "Indústria" },
    { value: "SAÚDE", label: "SAÚDE" },
    { value: "PESCAS", label: "PESCAS" },
    { value: "Serviços", label: "Serviços" },
  ];
}

export function island() {
  return [
    { value: "Santiago", label: "Santiago" },
    { value: "São Vicente", label: "São Vicente" },
    { value: "Sal", label: "Sal" },
    { value: "Boa Vista", label: "Boa Vista" },
    { value: "Fogo", label: "Fogo" },
    { value: "Brava", label: "Brava" },
    { value: "Maio", label: "Maio" },
    { value: "Santo Antão", label: "Santo Antão" },
    { value: "São Nicolau", label: "São Nicolau" },
  ];
}

export function promoterGender() {
  return [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Outro", label: "Outro" },
  ];
}
 export function buiPlatformStage() {
  return [
    { value: "Aprovado", label: "Aprovado" },
  ];
}