// Listeners database
// ------ ATUALIZA EM TEMPO REAL! ------
// await firebase
//   .database()
//   .ref('users/1')
//   .on('value', snapshot => {
//     setName(snapshot.val().name)
//     setAge(snapshot.val().age)
//   })

// ------ ONCE -> atualiza apenas UMA VEZ! ------
// await firebase
// .database()
// .ref('name')
// .once('value', snapshot => {
//   setName(snapshot.val())
// })

// ------ CRIAR NÓ DATABASE ------
// await firebase.database().ref('type').set('Client')

// ------ REMOVER UM NÓ ------
// await firebase.database().ref('type').remove()

// ------
// await firebase.database().ref('users').child(3).set({
//   name: 'Joseph',
//   age: 23
// })

// ------ ATUALIZAR UM DADO ------
// await firebase.database().ref('users').child(3).update({
//   name: 'Joseph Richard'
// })
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// const [users, setUsers] = useState([])
// const [loading, setLoading] = useState(true)

// ------------- REGISTER FUNCTION -----------------
// if ((name !== '') & (role !== '')) {
//   let users = await firebase.database().ref('users')
//   let key = users.push().key

//   users.child(key).set({
//     name: name,
//     role: role
//   })

//   alert('Cadastrado com sucesso!')
//   setName('')
//   setRole('')
//   Keyboard.dismiss()
// }
// ------------- REGISTER FUNCTION END -----------------

// useEffect(() => {
//   async function data() {
//     await firebase
//       .database()
//       .ref('users')
//       .on('value', snapshot => {
//         setUsers([])

//         snapshot.forEach(chilItem => {
//           let data = {
//             key: chilItem.key,
//             name: chilItem.val().name,
//             role: chilItem.val().role
//           }

//           setUsers(oldArray => [...oldArray, data].reverse())
//         })

//         setLoading(false)
//       })
//   }

//   data()
// }, [])

// LOADING CODE
// {loading ? (
//   <ActivityIndicator color="#121212" size={45} style={styles.loading} />
// ) : (
//   <FlatList
//     keyExtractor={item => item.key}
//     data={users}
//     renderItem={({ item }) => <List data={item} />}
//     showsVerticalScrollIndicator={false}
//   />
// )}
