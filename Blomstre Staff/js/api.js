const API_URL = "https://script.google.com/macros/library/d/1-auo-JdxKNTOGSnRFGHiQsoJjw55CyNFIE4bIjAISuTAU_60no0KlChi/5";


// FIND STAFF FROM GOOGLE SHEET

async function findStaff(code){


    const response = await fetch(API_URL, {

        method:"POST",

        body: JSON.stringify({

            action:"find_staff",
            code:code

        })

    });


    return await response.json();


}




// SEND CLOCK IN / CLOCK OUT

async function sendAttendance(name, code, type){


    const response = await fetch(API_URL, {


        method:"POST",


        body:JSON.stringify({


            action:"attendance",
            name:name,
            code:code,
            type:type


        })


    });



    return await response.text();


}