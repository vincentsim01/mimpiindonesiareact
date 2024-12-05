import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";

const Wordofwisdomdisplay = (props) =>{


    const objectifin=[
        {
            "name":"John",
            "email":"john@email.com",
            "telephone":"111222"
        },
        {
            "name":"Jane",
            "email":"jane@email.com",
            "telephone":"333444"
        },
        {
            "name":"Jim",
            "email":"jim@email.com",
            "telephone":"555666"
        }
    ]


    const objectify = [
        {
            name:"John",
            email:"john@email.com",
            telephone:"111222",
            hobby:[
                {name:"Reading", color:"blue"},
                {name:"Writing", color:"green"},
                {name:"Cooking", color:"yellow"}
            ]

        },
        {
            name:"Jane",
            email:"jane@email.com",
            telephone:"333444",
            hobby:[
                {name:"Playing", color:"red"},
                {name:"Running", color:"purple"},
                {name:"Swimming", color:"blue"}
            ]
        },
        {
            name:"Jim",
            email:"jim@email.com",
            telephone:"555666",
            hobby:[
                {name:"Singing", color:"pink"},
                {name:"Dancing", color:"orange"},
                {name:"Painting", color:"green"}
            ]
        }
    ];

    let letters = ['a','b','c','a','b','b','c','a','a','a','a','b','c'];

    let objectletter={};

    letters.forEach((item) =>{
        if(objectletter[item]){
            objectletter[item]++;
        }else{
            objectletter[item]=1;
        }
    });



    let letterorder = ['a','d','b','g','t','w'];

    let orderedletter = letterorder.sort();

    // console.log(orderedletter);


    let numberorder = [3,56,22,23,54,10,7,88];

    let orderednumber = numberorder.sort((a,b) => a - b);
    //affect the original array
    // console.log(orderednumber);
    // console.log(numberorder);

    let slicearray = ["Abraham", "Jonathan","Jose","Lucas","Jodie","Andreas","Yonathan"];

    let slicearray2 = slicearray.slice(2,5);

    // console.log(slicearray2);
    // console.log(slicearray);


    let splicearray = ["Abraham", "Jonathan","Jose","Lucas","Jodie","Andreas","Yonathan"];
    let splicearray2=splicearray.splice(1,4,"Josh","Mario","Aldi");
    let splicearray3=splicearray.splice(4,2,"Kafi",22,33)
    //affect the original array
    // console.log(splicearray2);
    // console.log(splicearray3);
    // console.log(splicearray);


    let foreacharray = ["Lala","Lulu","Lele","Lili","Lolo"];
    // let foreached = foreacharray.forEach((item) => console.log("Hi I am "+item));
    // console.log(foreached);
    // console.log(foreacharray);


    let reducearray = [3,2,5,6,10];

    let thereduced = reducearray.reduce((acc, item)=> acc+item ,0);

    // console.log(thereduced);
    // console.log(reducearray);

    let thereducemax = reducearray.reduce(callback,0);

    function callback(accu,item){
        if(accu>item){
            return accu;
        }else{
            return item;
        }
    }
    // no effect old array
    // console.log(thereducemax);
    // console.log(reducearray);

    // let objectify3=Object.keys(objectifin[1]);
    // let objectify4=[];

    //reduce objectify

    // let phonenumberobjectifyreduce = objectify.reduce((accu,item) => accu+item.telephone,0);

    // console.log(phonenumberobjectifyreduce);

    const employeeA =  {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "painting", "cooking"],
        introduction: function(){console.log(`Hi My name is ${this.name} and I am ${this.age}`)}
    }

    // employeeA.introduction();


    function Gamescore(){
        let thescore = 0;

        function increasescore(score){
            thescore+=score;
            console.log(`increase by: ${score}`);
        }

        function decreasescore(score){
            thescore-=score;
            console.log(`decrease by: ${score}`);
        }

        function totalscore(){
            return thescore;
        }

        return {increasescore, decreasescore, totalscore};
    }

    // let gameA = Gamescore();

    // gameA.increasescore(6);
    // gameA.decreasescore(3);
    // gameA.totalscore();

    class Seacreature{
        constructor(name, species){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`${this.name} the ${this.species} makes a sound.`);
        }
    }

    let seacreatureA = new Seacreature("Jacob", "Seal");

    // seacreatureA.makeSound();


    class Usercount{

        static count=0;
        constructor(username){
            this.username=username;
            Usercount.count=Usercount.count+1;
        }

    }

    let userA = new Usercount("Jeanne");
    let userB = new Usercount("Jim");
    let userC = new Usercount("Jasmine");

    // console.log(`User Count: ${Usercount.count}`);

    function vehicle(brand, model){
        this.brand=brand;
        // this.brand=brand;
        this.model=model
    }

    let carA = new vehicle("Toyota", "Camry");
    // let carB = new Car("Honda","Freed");

    // console.log(`CarA is a ${carA.brand} `);
    // console.log(`CarA is a ${carA.model}`);



    class student{

        static studentcount=0;
        constructor(name, age, course){
            this.name=name;
            this.age=age;
            this.course=course;
            student.studentcount++;
        }

        getstudentdetail(){
            console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
        }

        static gettotalstudentcount(){
            console.log(`Total Student Count: ${student.studentcount}`);
        }
    }

    let studentA = new student("John", 20, "Computer Science");
    let studentB = new student("James", 22, "Math Science");
    let studentC = new student("Jane", 21, "English Science");
    let studentD = new student("Jim", 23, "Biology Science");

    // student.gettotalstudentcount();
    // studentC.getstudentdetail();

    function arcstudent(name, school, power){
        this.name=name;
        this.school=school;
        this.kekuatan=power;

    }

    let arcstudentA = new arcstudent("John", "ABC School", "Strong");
    let arcstudentB = new arcstudent("Jonathan", "DEF School", "telekinesis");

    // console.log(arcstudentB.kekuatan);

    let objek = {
        name:"John",
        age:22,
        hobby: "surfing"
    }

    // console.log(objek);

    class animal{
        constructor(name,species){
            this.name=name;
            this.species=species;
        }

        move(speed){
            console.log(`${this.name} the ${this.species} is moving at ${speed} mph.`);
        }
    }

    class tortoise extends animal{
        constructor(name, species, walkspeed){
            super(name, species);
            this.walkspeed=walkspeed;
        }

        canwalk(){
            console.log(`${this.name} the ${this.species} can walk at a speed of ${this.walkspeed} km/h.`);
            console.log(super.move(this.walkspeed));
        }
    }

    let squirtle = new tortoise("squirtle","water",12);

    squirtle.canwalk();



    // for (const obj of objectifin) {
    //     for (const key in obj) {
    //       objectify4.push(`${obj[key]}`); // Log each key-value pair
    //     }
    //   }

    //   console.log(objectify4);

    let objectify2=[];

    for (var obj of objectify){
        for (var key in obj){
            objectify2.push(`${key}, ${obj[key]}`);
        }
    }

    const renderdata = ({listData}) => {
        if(listData.length>0){
        return listData.map((item)=>{
            return(
                <>
                <div className="wordofwisdomcontainer">
                    <div className="containerwisdom"> Event:{item.event} </div>
                    <div className="containerwisdom"> Word:{item.word} </div>
                    <div className="containerwisdom"> Figure:{item.figure.map((item2)=>{
                        return(
                            <>
                                name: {item2.name} 
                                <br></br>
                                color: {item2.color}
                            </>
                        )
                    })} 
                    </div>
                    <div>This is objectify
                        <br></br>
                        {objectify.map((item)=>{
                            return(
                                <>
                                    {item.hobby.map((item2)=>{
                                        return(
                                            <>
                                            {item2.name}
                                            </>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
                    {/* <div>
                        {objectifin.forEach((item)=>{
                 
                                objectify2.push(item.name);
                  


                        })}
                        This is objectify2: {objectify2}


                    </div> */}

                    {/* <div className="containerwisdom"> with map: {objectify.map((item)=>{
                        return(
                            <>
                                objectify: 
                                <br></br>
                                {item.name}
                                <br></br>
                                Hobby: {item.hobby.map((item2)=>{
                                    return(
                                        <>
                                        {item2.name} and {item2.color}
                                        <br></br>
                                        </>
                                    )
                                })}

                      
                            </>
                        )
                    })} 
                    </div>
                    <br></br>
                    <br></br> */}


                    {/* <div className="containerwisdom">
                        Map Within {objectify.map((item)=>{
                            return(
                                <>
                                    {item.hobby.map((item2)=>{
                                        return(
                                            <>
                                                Hobby Name: {item2.name}
                                            
                                            </>
                                        
                                        )
                                    })}
                                
                                
                                </>
                            )
                        })}

                    </div>

                    <br></br><br></br><br></br>
                    <div className="containerwisdom">
                        {objectify3.map((item)=>{
                            return(
                                <>
                                The keys: {item} <br></br>
                                </>
                            )
                        })}

                    </div>
                    <div className="containerwisdom">
                        This is objectify4: {objectify4}

                    </div> */}


                </div>
                </>
            )
        }
        

         
        )
        }else{
            return(
                <div className="containerwisdom">No Data Found</div>
            )
        }
    }
















    return(
        <>
        {renderdata(props)}
        </>
    )
}

export default Wordofwisdomdisplay;