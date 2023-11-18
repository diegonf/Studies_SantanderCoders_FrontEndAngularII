// Types for redesSociais array
type RedeSocial = {
  urlPerfil: string;
  urlIcone: string;
};

// Types for apresentacao
export type ApresentacaoType = {
  nome: string;
  profissao: string;
  sobreMim: string;
  redesSociais: RedeSocial[];
};

// Type for skills array
export type SkillType = {
  nome: string;
  icone: string; // Adicione o tipo correto para icone, se aplicável
};

// Type for projetos array
export type ProjetoType = {
  titulo: string;
  urlSite: string;
  urlRepo: string;
  urlImg: string;
  tecnologias: string[];
};

// Type for the entire curriculo object
export type CurriculoType = {
  apresentacao: ApresentacaoType;
  skills: SkillType[];
  projetos: ProjetoType[];
};