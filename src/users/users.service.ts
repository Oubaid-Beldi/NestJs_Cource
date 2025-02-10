import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'moderator' },
        { id: 4, name: 'David White', email: 'david@example.com', role: 'user' },
        { id: 5, name: 'Emma Davis', email: 'emma@example.com', role: 'admin' },
      ];
      findAll(role?:'INTERN'|'ENGINEER'|'ADMIN'){
        if (role){
            return this.users.filter(user=> user.role===role)
        }
        return this.users
      }
      findOne(id:number){
        const user =this.users.filter(user=> user.id===id)
        return user
      }
      create(user:{name:string,email:string,role:string}){
        const usersByHighestId=[...this.users].sort((a,b)=>b.id-a.id)
        // this.users.push(user)
        const newUser={
            id:usersByHighestId[0].id+1,
            ...user
        }
        this.users.push(newUser)
        return this.users
      }
      update(id:number,updatedUser:{
        name?:string,email?:string,role?:"INTERN"|"ENGINEER"|"ADMIN"
      }){
        this.users=this.users.map(user=>{
            if(user.id===id){
                return {...user,...updatedUser}
            }
            return user
        })
        return this.findOne(id)
      }
      delete(id:number){
        const removeUser=this.findOne(id)
        this.users=this.users.filter(user=>user.id!==id)
        return removeUser
      }

}
