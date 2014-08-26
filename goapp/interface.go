package hello

type User struct {
    Account string
    Password string
    Type int
}

type IUserRepository interface {
    Create(user User)
    Update(id string, user User)
    Read(id string)(user User)
    Delete(id string)
    Keys()(keys []string)
}

var repository IUserRepository

func GetUserRepository() IUserRepository{
    if repository == nil {
        m := &MemoryUserRepository{Users:map[string]User{}}
        repository = IUserRepository(m)
    }
    return repository
}