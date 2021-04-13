import { Friends } from './connector.js'

export const resolvers = {
    Query: {
        getFriend (_, { id }) {
            return Friends.findById(id, (err, friend) => {
                if (err) {
                    throw err
                }

                return friend
            })
        }
    },
    Mutation: {
        createFriend (_, { input }) {
            const friend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            })

            friend.id = friend._id

            return new Promise((resolve, reject) => {
                friend.save(err => {
                    if (err) { return reject(err) }
                    return resolve(friend)
                })
            })
        },
        updateFriend (_, { input }) {
            return new Promise((resolve, reject) => {
                Friends.findByIdAndUpdate(input.id, input, { new: true }, (err, friend) => {
                    if (err) { return reject(err) }
                    return resolve(friend)
                })
            })
        },
        deleteFriend (_, { id }) {
            return new Promise((resolve, reject) => {
                Friends.findByIdAndDelete(id, err => {
                    if (err) { return reject(err) }
                    return resolve('Succesfully deleted friend')
                })
            })
        }
    }
}