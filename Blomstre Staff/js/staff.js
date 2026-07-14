let pin = "";


const buttons = document.querySelectorAll(".keypad button");

const dots = document.querySelectorAll(".pin-display span");



buttons.forEach(button => {


    button.addEventListener("click",()=>{


        let value = button.innerText;



        // NUMBER

        if(value >= "0" && value <= "9"){


            if(pin.length < 4){


                pin += value;

                updateDots();


            }


        }



        // DELETE

        else if(value === "⌫"){


            pin = pin.slice(0,-1);

            updateDots();


        }




        // CHECK

        else if(value === "✓"){



            if(pin.length !== 4){

                return;

            }




            findStaff(pin)

            .then(data=>{


                if(data.success){



                    localStorage.setItem(
                        "currentName",
                        data.name
                    );


                    localStorage.setItem(
                        "currentCode",
                        pin
                    );



                    window.location.href =
                    "attendance.html";



                }


                else{


                    alert("Wrong PIN");


                    pin="";

                    updateDots();


                }



            })



            .catch(()=>{


                alert("Cannot connect to server");


            });



        }



    });



});






function updateDots(){


    dots.forEach((dot,index)=>{


        if(index < pin.length){


            dot.classList.add("filled");


        }


        else{


            dot.classList.remove("filled");


        }


    });


}