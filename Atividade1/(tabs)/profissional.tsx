import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profissional() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Formação Acadêmica</Text>
        <Text style={styles.linha}></Text>
        <Text style={styles.texto}>
          Ensino Médio com curso Técnico Integrado em Desenvolvimento de Sistemas. 
          Instituição: Colégio Estadual Cívico Militar Professor Becker e Silva — Conclusão prevista: Dezembro de 2025.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Competências Técnicas</Text>
        <Text style={styles.linha}></Text>
        <Text style={styles.texto}>
          Familiaridade com as linguagens HTML, CSS, JavaScript, Python e SQL. Familiaridade com desenvolvimento de interfaces e lógica de programação.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Habilidades Comportamentais</Text>
        <Text style={styles.linha}></Text>
        <Text style={styles.texto}>
          Autodidata, com excelente capacidade de aprendizado, organização, disciplina, pensamento analítico, resolução de problemas e boa comunicação interpessoal.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Idiomas</Text>
        <Text style={styles.linha}></Text>
        <Text style={styles.texto}>
          Português — Nativo{"\n"}
          Inglês — Nível Intermediário
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Experiência Profissional</Text>
        <Text style={styles.linha}></Text>
        <Text style={styles.texto}>
        Desenvolvedora Júnior | Fintel Sistemas Fevereiro de 2025 – Maio de 2025{"\n"}
        Atuei contribuindo para o desenvolvimento e manutenção de sistemas, garantindo soluções eficientes para as necessidades dos clientes. Trabalhei em equipe para otimizar processos e aprimorar funcionalidades, sempre buscando inovação e melhoria contínua.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  card: {
    backgroundColor: "#0d0d1a",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000080",
  },
  titulo: {
    fontSize: 22,
    color: "#87cefa",
    fontWeight: "bold",
    marginBottom: 10,
  },
  linha: {
    borderBottomColor: "#000080",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  texto: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 22,
  },
});
