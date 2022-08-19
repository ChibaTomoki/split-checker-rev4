import mongoose from 'mongoose'

const connectDB = (url: string) =>
  mongoose
    .connect(url, { dbName: 'warikan' })
    .then(() => console.log('データベースと接続中'))
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.log(error.message)
      } else if (typeof error === 'string') {
        console.log(error)
      } else {
        console.log('unexpected error')
      }
    })

export default connectDB
