"use strict";
////////////////////////////////////////////////////////////
//1-misol
// interface Shape {
//     accountArea():number
// }
// class Circle implements Shape {
//     constructor(private radius:number){
//     }
//     accountArea(): number {
//         return Math.PI*this.radius*this.radius
//     }
//     getRadius(){
//         return this.radius
//     }
//     setRadius(newRadius:number):void{
//         this.radius=newRadius
//     }
// }
// class Rectangle implements Shape{
//     width:number
//     height:number
//     constructor(width:number,height:number){
//         this.width=width,
//         this.height=height
//     }
//     accountArea(): number {
//         return this.width*this.height
//     }
//     getwidthAndheigh() {
//         return `${this.width} ${this.height}`
//     }
//     setwidthAndheight(width: number,height:number): void {
//         this.width = width
//         this.height=height
//     }
// }
// const circle=new Circle(5)
// circle.setRadius(10)
// console.log(circle.getRadius());
// console.log(`Circle area:${circle.accountArea().toFixed(2)}`);
// const rectangle =new Rectangle(7,10)
// console.log(`Rectangle area:${rectangle.accountArea()}`);
///////////////////////////////////////////////////////////////////////////
//2-misol
//  abstract class Vehicle {
//     start(){
//     }
//     stop(){
//     }
// }
// class Car extends Vehicle {
//     override start(): void {
//         console.log('Car staring');
//     }
//     override stop(): void {
//         console.log('Car stoping');
//     }
// }
// class MotorCycle extends Vehicle{
//     override start(): void {
//         console.log('Moto walk for ready start');
//     }
//     override stop(): void {
//         console.log('Moto stoping');
//     }
// }
// const car =new Car()
// car.start()
// car.stop()
// const moto=new MotorCycle()
// moto.start()
// moto.stop()
//////////////////////////////////////////////////////////////
//3-misol
// class Crud<T>{
//     private items:T[]=[];
//     create (item:T):void{
//         this.items.push(item)
//     }
//     read(){
//        return this.items
//     }
//     update(index:number,item:T){
//         if (index>=0 && index<this.items.length){
//             this.items[index]=item;
//         }
//         else{
//             throw new Error("Invalid index")
//         }
//     }
//     delete(index:number):void{
//         if (index >= 0 && index < this.items.length) {
//             this.items.splice(index,1)
//         }
//         else {
//             throw new Error("Invalid index")
//         }
//     }
// }
// type User={
//     id:number;
//     name:string;
//     age:number;
//     gender:string;
// }
// class Users extends Crud<User>{
//     constructor(){
//         super()
//     }
// }
// const user=new Users()
// user.create({id:1,name:"Savash",age:19,gender:"male"})
// user.create({ id: 2, name: "Sher", age: 19, gender: "male" })
// console.log(user.read());
// user.update(0, { id: 1, name: "Sarvar", age: 19, gender: "male" })
// console.log(user.read());
// user.delete(0)
// console.log(user.read());
//////////////////////////////////////////////////////////////////////////
//4-misol
// 4 -misolni yecha olmadim chatgpt ni kodini quyib quyganimdan foyda yuq baribir tushunmasam shuni ustoz o'zingiz toliq tahlil qilib bersangiz yaxshi bo'lar edi chunki sizga 100% chatgpt kodi boradi shu vazifaga baribir
//# sourceMappingURL=index.js.map