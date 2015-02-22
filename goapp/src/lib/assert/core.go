package assert

func IfError(err error) {
  if err != nil {
    panic(err.Error())
  }
}