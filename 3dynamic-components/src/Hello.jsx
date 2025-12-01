export function Hello() {

  // let Name = "Hamza"

  let fullName = () => {
    return 'Hamza Noor'
  }
  return (
    // <h3>This is the future speaking. I am a developer {name}</h3>
    <h3>I am a developer {fullName()}</h3>
  )
}