import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        M Y  G O A L S T R A C K E R
      </Text>
      <Link style={styles.link} href="/goals">
        View Your Goals
      </Link>
      <Link style={styles.link} href="/goals/create">
        Add a New Goal
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginVertical: 40,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  link: {
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#07b7c4ff',
    color: 'white',
    borderRadius: 8,
  },
})

export default Home