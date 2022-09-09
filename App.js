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
          <View style={styles.main}>
            <Text style={styles.mainText}>E-mail</Text>
            <Text style={styles.mainText}>Endereço</Text>
            <Text style={styles.mainText}>Telefone</Text>
            <Text style={styles.mainText}>Data de nascimento</Text>
            <Text style={styles.mainText}>Nacionalidade</Text>
            <Text style={styles.mainText}>Link</Text>
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
   color: '#290BF9',
   fontWeight: 'bold'
  },
  headerText2: {
    fontSize: 20,
    color: '#290BF9',
    fontWeight: 'bold'
  },
  headerText3: {
    fontSize: 20,
    color:'#290BF9',
    fontWeight: 'bold'
  },
  main: {
    marginTop: 3,
    marginLeft: 7
  },
  mainText: {
    fontSize: 20,
    padding: 1,
    color: '#F52622',
    fontWeight: 'bold'
  }
});
