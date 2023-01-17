// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ]

// let arr = []
//         for(i=0; i<=studentRecords.length; i++){
//             var c = studentRecords[i].name
           
//             arr.push(c.toUpperCase())
//             console.log(arr);
//         }

        // const newarr = studentRecords.map((b) => b.name.toUpperCase())
        // console.log(newarr);


        // const newarr = studentRecords.filter((b) => b.marks>50)
        // console.log(newarr);

        // const newarr = studentRecords.filter((b) => b.marks>50 && b.id > 120)
        // console.log(newarr);
        // const sum = studentRecords.reduce((a, b) => a += b.marks, 0)
        // console.log(sum);

        // const newarr = studentRecords.filter((a) => a.marks>50)
        // const arr = newarr.map((x)=> x.name)
        // console.log(arr);

        // const newarr = studentRecords.filter((b) => b.id>120)
        // const arr = newarr.reduce((a, b) => a += b.marks, 0)
        // console.log(arr);

        // const jayada = studentRecords.filter((a) => a.marks>50)
        
        // const sumjayda = jayada.reduce((a, b) => a += b.marks, 0)
       
        // const kam = studentRecords.filter((a) => a.marks<50)
     
        // const bada = kam.map((a) => a.marks + 15)
   
        // const check = bada.filter((a) => a>50)
        
        // const check1 = check.reduce((a, b) => a += b, 0)

        // const total = check1 + sumjayda

        // console.log(total);


        // arr = []

        // var obj = new Object()
        // obj.name = 'Alok'
        // obj.rollno = 225
        // obj.class = 10
        // // console.log(obj);

        // var obj1 = new Object()
        // obj1.name = 'Abhi'
        // obj1.rollno = 25
        // obj1.class = 12
        // // console.log(obj1);

        // var obj2 = new Object()
        // obj2.name = 'Abhi'
        // obj2.rollno = 25
        // obj2.class = 12
        // // console.log(obj2);

        // var obj3 = new Object()
        // obj3.name = 'Abhi'
        // obj3.rollno = 25
        // obj3.class = 12
        // // console.log(obj3);

        // var obj4 = new Object()
        // obj4.name = 'Abhi'
        // obj4.rollno = 25
        // obj4.class = 12
        // // console.log(obj4);

        // var obj5 = new Object()
        // obj5.name = 'Abhi'
        // obj5.rollno = 25
        // obj5.class = 12
        // // console.log(obj5);
        let StuArr = []
        function student(name, clas, rollno){
                this.stuName = name,
                this.stuClass = clas,
                this.stuRollNo = rollno
        }

        let Student1 = new student('EA17', 'Sept', 25)
        let Student2 = new student('EA18', 'Oct', 256)
        let Student3 = new student('EA19', 'Nov', 256)
        let Student4 = new student('EA20', 'Dec', 25)
        let Student5 = new student('EA21', 'Jan', 256)
        let Student6 = new student('EA22', 'Feb', 256)

StuArr.push(Student1)
StuArr.push(Student2)
StuArr.push(Student3)
StuArr.push(Student4)
StuArr.push(Student5)
StuArr.push(Student6)

console.log(StuArr);
