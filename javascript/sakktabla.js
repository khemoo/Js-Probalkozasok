











var generateAllButton = document.createElement("button");
var sakktablaContainer = document.getElementById("sakktabla-container");
generateAllButton.id = "generate-all-button";
sakktablaContainer.appendChild(generateAllButton);


var elsoHalmaz = [  [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10],
                    [1,2,3,4,5,6,7,8,9,10]
];



                        // Megy a for loop, csinal egy uj ul-t (ahanyszor egy elemen atfut, egessz az elso array hosszaig)
                        //                                   Belep a masodik for loopba ezutan es annyi li-t csinal ahany elem van a belso arrayben.
                        //                                       Minden li megkrealasakor, feltesz egy classt is Erre a most krealt li-re -
                        //                                            Azt a dobozt amiben van a class, minden for loop kornel 1x meg toggle-eljuk, hogy a kovetkezo elem mar a masikat kapja.


generateAllButton.addEventListener("click", GenerateAllFunction );


// var classValtas = true;

function GenerateAllFunction() {


    for ( var i = 0; i < elsoHalmaz.length; i++ ){


        var ulGyartas = document.createElement("ul" );

        ulGyartas.classList.add( "ul-gyartas" );

        sakktablaContainer.appendChild( ulGyartas );




        var masodikHalmaz = elsoHalmaz[i];



        for ( var j = 0; j < masodikHalmaz.length; j++ ) {


             var liGyartas = document.createElement("li" );

             liGyartas.classList.add( "li-gyartas" );

             ulGyartas.appendChild( liGyartas );





             //
             if ( j % 2 === 0) {
                 liGyartas.classList.add( "fekete-class" );
             }
        }



    }

}