// const employees = [
//     {
//         id: 1,
//         name: 'Farman',
//         age: 22,
//         position: 'Frontend | Team Leader',
//         salary: 250
//     },
//     {
//         id: 2,
//         name: 'Subhan',
//         age: 22,
//         position: 'Backend | Team Leader',
//         salary: 250
//     },
//     {
//         id: 3,
//         name: 'Aqil',
//         age: 27,
//         position: 'QA Tester',
//         salary: 70
//     },
//     {
//         id: 4,
//         name: 'Lala',
//         age: 18,
//         position: 'QA Tester',
//         salary: 70
//     },
//     {
//         id: 5,
//         name: 'Oktay',
//         age: 12,
//         position: 'Frontend',
//         salary: 160
//     },]
// 1)Saytın başlığını "Salam, Dünya!" olaraq dəyişdirin.
// const title=document.querySelector('title')
// title.textContent='Salam,Dunya!'
// console.log(title);
// 2)Bir HTML faylında id="myParagraph" olan bir paragrafın məzmununu "Yeni məzmun" olaraq dəyişdirin.(Hər iki üsulla)

// const div = document.querySelector("#myParagraph");
// div.textContent = "Yeni məzmun";
// div.innerText = "Yeni məzmun";
// 3)Bir HTML faylında name=email olan bir inputun dəyərini "admin@gmail.com" olaraq dəyişdirin.
// const input=document.querySelector('input')
// input.value='admin@gmail.com'
// console.log(input);
// 4)
// const tbody=document.querySelector('tbdoy')
// let innerHtml=''
// employees.forEach( item=>{
// innerHtml+=`
// <tr>
// <td>${item.id}</td>
// <td>${item.name}</td>
// <td>${item.age}</td>
// <td>${item.position}</td>
// <td>${item.salary}</td>
// </tr>
// `
// })

// tbody.innerHTML=innerHtml
// console.log(innerHtml);
// 5)Div elementini id-sine görə seçin və ona bir class əlavə edin
// const div=document.querySelector('#text')
// div.setAttribute('class','.text-1')
// console.log(div);
// Div elementini class-ın a görə  seçin daha sonra isə onun id-sini tapın
const elemenet=document.querySelector('.text-2')
elemenet.getAttribute('#text-3')
console.log(elemenet);
