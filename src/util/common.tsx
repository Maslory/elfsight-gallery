
export async function handleResponseWithErrors() {
 return ''
}

// export async function handleResponseWithErrors(response: Response) {
//  if (response.status === 403) {
//      message.error('У вас недостаточно прав для совершения операции')
//      return false
//  }
//  if (response.status === 404) {
//      message.error('Не найдено')
//      return false
//  }
//  if (response.status === 401) {
//      return false
//  }
//  try {
//   let data = await response.text()
//   if (data.length > 0) {
//       const operation = JSON.parse(data);
//       if (Array.isArray(operation)) {
//           message.error(operation[0])
//       }
//       else if (typeof operation === 'object') {
//           const name: any = Object.getOwnPropertyNames(operation)[0]
//           if (Array.isArray(operation[name])) {
//               message.error(operation[name][0])
//           }
//           else if (typeof operation === 'object') {
//               const name2: any = Object.getOwnPropertyNames(operation[name])[0]
//               message.error(operation[name][name2])
//           }
//           else {
//               message.error(operation[name])
//           }
//       }
//   }
//  }
//  catch(error){
//   console.log(error)
//  }
 
// }