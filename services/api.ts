import {mocks} from './restaurant/index'


export const  restaurantRequest = (location : string )=>{
     
    return new Promise((resolve, reject) =>{
        // @ts-ignore
          const mock = mocks[location]

          if(!mock){
            setTimeout(()=>{
                reject("Not found")
            },500)
          }
          setTimeout(()=>{
              resolve(mock)
          },500)
    })
}