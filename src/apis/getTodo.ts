import axiosInterceptors from '@/configs/axiosConfig'

export default async function getTodo() {
  try {
    const res = await axiosInterceptors.post('https://gettodov2-379705653261.us-central1.run.app', {
      data: 'eiei',
    })
    const data = res.data
    console.log(data)

    // return data
  } catch (err) {
    console.log(err)
    return err
  }
}
