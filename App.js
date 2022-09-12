import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor='#050005' />
        <View style={styles.header}>
          <View style={styles.img}>
            <Image
              style={styles.logo}
              source={require('./assets/perfil.jpg')}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.headerText}>Bryan Willians O Ernandes</Text>
              <Text style={styles.headerText2}>Aluno</Text>
              <Text style={styles.headerText3}>Aula desenvolvimento para front-End Mobíle</Text>
          </View>
        </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>E-mail: <Text style={styles.secondText}>bryan@gmail.com</Text></Text>
            <Text style={styles.infoText}>Endereço: <Text style={styles.secondText}>Rua Olive</Text></Text>
            <Text style={styles.infoText}>Telefone: <Text style={styles.secondText}>00 000.0000.00</Text></Text>
            <Text style={styles.infoText}>Data de nascimento: <Text style={styles.secondText}>00/00/00</Text></Text>
            <Text style={styles.infoText}>Nacionalidade: <Text style={styles.secondText}>Brasil</Text></Text>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00000',
    marginTop: 4,
    padding: 5
  },
  img: {
   width: '24%'
  },
  logo: {
    height:106,
    width: 80
  },
  text: {
   width: '73%',
  },
  headerText: {
   fontSize: 20,
   color: '#F52622',
   fontWeight: 'bold'
  },
  headerText2: {
    fontSize: 20,
    color: '#F52622',
    fontWeight: 'bold'
  },
  headerText3: {
    fontSize: 20,
    color:'#F52622',
    fontWeight: 'bold'
  },
  info: {
    marginTop: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00000',
  },
  infoText: {
    fontSize: 20,
    padding: 1,
    color: '#F52622',
    fontWeight: 'bold'
  },
  secondText: {
    color: '#1807E0'
  }
});
