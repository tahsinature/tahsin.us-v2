const wait = (numOfSec: number): Promise<void> => {
  return new Promise(res => {
    setTimeout(() => {
      res()
    }, numOfSec * 1000)
  })
}

export default wait
