package hello

import (
    "strconv"
)

type MemoryUserRepository struct {
    idcounter int
    Users map[string]User
}

func (r *MemoryUserRepository) Create(user User){
    r.Users["User"+strconv.Itoa(r.idcounter)] = user
    r.idcounter = r.idcounter+1
}

func (r *MemoryUserRepository) Update(id string, user User){
    r.Users[id] = user
}

func (r *MemoryUserRepository) Read(id string)(user User){
    user = r.Users[id]
    return
}

func (r *MemoryUserRepository) Delete(id string){
    delete(r.Users, id)
}

func (r *MemoryUserRepository) Keys()(keys []string){
    keys = make([]string, 0, len(r.Users))
    for k := range r.Users {
        keys = append(keys, k)
    }
    return
}

func (r *MemoryUserRepository) Verify(account string, password string) bool {
    return true
}